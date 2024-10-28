import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"


// placing orders using COD methode
const placeOrder = async(req,res)=>{
    try {
        const {userId,items,amount,address} = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:'COD',
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success: true,message:"Order placed successfully"})

    } catch (error) {
        console.log(error);
        res.json({success: false,message:error.message})
        
    }
}

// placing orders using Stripe methode
const placeOrderStripe = async(req,res)=>{

}

// placing orders using Razorpay methode
const placeOrderRazorpay = async(req,res)=>{

}

// placing orders using Bkash methode
const placeOrderBkash = async(req,res)=>{

}

//All orders data for admin panel
const allOrders = async(req,res)=>{

}
//All orders data for fontend
const userOrders = async(req,res)=>{
    try {
        
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true,orders})

    } catch (error) {
        console.log(error);
        res.json({success: false,message:error.message})
    }
}

//update Order Status for Admin Panel
const updateStatus = async(req,res)=>{

}

export{placeOrder,placeOrderStripe,placeOrderRazorpay,placeOrderBkash,allOrders,userOrders,updateStatus}