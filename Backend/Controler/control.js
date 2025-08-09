import { Webhook } from "svix";
import userModel from '../models/userModels.js'
import Razorpay from 'razorpay'
import transactionmodel from "../models/transactionModel.js";

import { json } from "express";
// API Controller Function to manage Clerk users with the database
// Endpoint: http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with the Clerk webhook secret
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await webhook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = { 
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.create(userData);
        res.json({});

        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;  // Changed from req.body.data
    
    if (!clerkId) {
      return res.status(400).json({ success: false, message: "ClerkId is required" });
    }
    
    const userData = await userModel.findOne({ clerkId });
    
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) { 
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};


const razorpayInstance = new Razorpay({  
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const PaymentRazorpay = async (req, res) => {
  try {
    const { clerkId, planId } = req.body;
    const userData = await userModel.findOne({ clerkId });
    
    if (!userData || !planId) {
      return res.status(400).json({ success: false, message: 'Invalid request' });
    }

    let credits, plan, amount;

    switch (planId) {
      case 'Basic':
        plan = 'Basic';
        credits = 10;
        amount = 30;
        break;
      case 'Advanced':
        plan = 'Advanced';
        credits = 30;
        amount = 60;
        break;
      case 'Business':  
        plan = 'Business';
        credits =200 ;
        amount = 99;
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid plan selected' });
    }

    const date = Date.now();

    const transactionData = {
      clerkId,
      plan,
      amount,
      credits,
      date
    };

    const newTransaction = await transactionmodel.create(transactionData);
    
    const options = {
      amount: amount * 100,  
      currency: process.env.CURRENCY,
      receipt: newTransaction._id
    };

    // ✅ Better error handling
    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.error('Razorpay Error:', error);
        return res.status(500).json({ 
          success: false, 
          message: error.message || 'Payment gateway error' 
        });
      }
      return res.json({ success: true, order });
    });

  } catch (error) {
    console.error('PaymentRazorpay Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const verifyrazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    
    if (!razorpay_order_id) {
      return res.status(400).json({ success: false, message: 'Order ID is required' });
    }

    console.log('Verifying payment for order:', razorpay_order_id);

    // Fetch order info from Razorpay
    const orderinfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    

    if (orderinfo.status !== 'paid') {
      return res.json({ success: false, message: 'Payment not confirmed by Razorpay' });
    }

    // ✅ Fixed: Proper database query and moved outside if block
    const transactionData = await transactionmodel.findById(orderinfo.receipt);
    
    if (!transactionData) {
     
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }



    // ✅ Fixed: Check if payment already processed
    if (transactionData.payment) {
      return res.json({ success: false, message: 'Payment already processed' });
    }

    // Find user and update credits
    const userData = await userModel.findOne({ clerkId: transactionData.clerkId });
    
    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

 

    const creditBalance = userData.creditBalance + transactionData.credits;

    // Update user credits
    await userModel.findByIdAndUpdate(userData._id, { creditBalance });

    // Mark transaction as paid
    await transactionmodel.findByIdAndUpdate(transactionData._id, { payment: true });


    return res.json({ 
      success: true, 
      message: "Credits added successfully",
      newCreditBalance: creditBalance 
    });

  } catch (error) {
    console.error('Verify Razorpay Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { clerkWebhooks,userCredits,PaymentRazorpay,verifyrazorpay};
   



