import mongoose from "mongoose";

import bcrypt from "bcryptjs";

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
  password: {
    type: String,
  },
  wallets: [walletSchema],
});

userSchema.methods.comparePassword = async (enteredPassword: string) => {
  return await bcrypt.compare(enteredPassword, this?.password);
};

export const User = mongoose.model("User", userSchema);
