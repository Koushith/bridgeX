import mongoose from 'mongoose'

import bcrypt from 'bcryptjs'
import { timeStamp } from 'console'

//TODO: Refactor this. add few more meta details
const addressBook = new mongoose.Schema({
  name: {
    type: String,
  },
  walletAddress: {
    type: String,
  },
})

const userSchema = new mongoose.Schema(
  {
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
    walletAddress: {
      type: [String],
    },
    addressBook: [addressBook], //array of objects
  },
  {
    timestamps: true,
  }
)

// userSchema.methods.comparePassword = async (enteredPassword: string) => {
//   return await bcrypt.compare(enteredPassword, this?.password)
// }

export const User = mongoose.model('User', userSchema)
