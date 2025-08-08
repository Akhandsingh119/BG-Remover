import express from 'express'


import {clerkWebhooks, userCredits} from '../Controler/control.js'
import authUser from '../middleware/auth.js'

const userRouter=express.Router()

userRouter.post('/webhooks',clerkWebhooks)
userRouter.get('/credits',authUser,userCredits)

export default userRouter