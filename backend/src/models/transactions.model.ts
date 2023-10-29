import mongoose from 'mongoose'

//TODO: Refactor this. add few more meta details- visit later
const transactionSchema = new mongoose.Schema(
  {
    chain: {
      type: String,
      required: true,
    },
    depositAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Transaction = mongoose.model('Transaction', transactionSchema)
