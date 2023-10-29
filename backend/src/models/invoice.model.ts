import mongoose from 'mongoose'

//TODO: Refactor this. add few more meta details- visit later

export const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: String,
      required: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    paymentdetails: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    paymentWalletAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Invoice = mongoose.model('Invoice', invoiceSchema)
