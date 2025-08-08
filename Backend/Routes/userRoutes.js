import express from 'express'


import {clerkWebhooks,PaymentRazorpay, userCredits, verifyrazorpay} from '../Controler/control.js'
import authUser from '../middleware/auth.js'

const userRouter=express.Router()

userRouter.post('/webhooks',clerkWebhooks)
userRouter.get('/credits',authUser,userCredits)
userRouter.post('/pay-razor',authUser,PaymentRazorpay)
userRouter.post('/verify-razor',authUser,verifyrazorpay)
export default userRouter 