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
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment routes
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/strip", authUser, placeOrderStripe);
orderRouter.post("/razorPay", authUser, placeOrderRazorpay);
orderRouter.post("/razorPay", authUser, placeOrderBkash);

// user routes
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
