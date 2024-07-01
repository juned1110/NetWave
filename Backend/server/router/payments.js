const router = require("express").Router();
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const { route } = require("./auth-router");
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.Razorpay_Key_ID,
  key_secret: process.env.Razorpay_Key_SECRET,
});
router.get("/test", async (req, res) => {
  res.json({
    message: "Yes It Works",
  });
});

router.post("/order", async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const options = {
    amount: amount * 100, //to convert amount into INR
    currency,
    receipt,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
