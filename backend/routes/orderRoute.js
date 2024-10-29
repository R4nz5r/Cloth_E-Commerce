import express from "express";
import adminAuth from "../middleware/adminAuth.js";

// Import routes
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  placeOrderBkash,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment routes
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorPay", authUser, placeOrderRazorpay);
orderRouter.post("/bkash", authUser, placeOrderBkash);

// user routes
orderRouter.post("/userorders", authUser, userOrders);

// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe)
export default orderRouter;
