import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  walletName: {
    type: String,
  },
  address: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  wallets: [walletSchema],
});

export const User = mongoose.model("User", userSchema);
