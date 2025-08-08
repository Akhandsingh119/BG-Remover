import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'

import userModel from '../models/userModels.js'
//
// controller function for remove image 


const removeBgImage = async (req, res) => {
  try {

       const { clerkId } = req.body;  // Changed from req.body.data
       
       const user=await userModel.findOne({clerkId})

    if (!clerkId) {
      return res.status(400).json({ success: false, message: "ClerkId is required" });
    }

    if(!user)
      return res.status(400).json({ success: false, message: "user not found" });
          
    if(user.creditBalance==0){
        return res.status(400).json({ success: false, message: "no credit Upgrade it",creditBalance :user.creditBalance});
          
    }

    const  imagepath=req.file.path;
    //
const imagefile=fs.createReadStream(imagepath)
const formdata=new FormData()
formdata.append('image_file',imagefile)
const {data}=await axios.post('https://clipdrop-api.co/remove-background/v1',formdata,{
   headers: {
    'x-api-key': process.env.CLIPDROP_API
  },responseType:'arraybuffer'
})
 
const base64Image = Buffer.from(data, 'binary').toString('base64')

const resultImage = `data:${req.file.mimetype};base64,${base64Image}`

await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

res.json({ success: true, resultImage, creditBalance: user.creditBalance - 1, message: ' use Back' })


  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
}

export { removeBgImage };
