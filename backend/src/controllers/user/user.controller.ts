import express, { Request, Response } from 'express'
import { initializeApp } from 'firebase-admin/app';
import jwt from 'jsonwebtoken'
import { getAuth } from 'firebase-admin/auth'

import { asyncHandler } from '../../middlewares/asyncHandler.js'
import { User } from '../../models/user.model.js'


//TODO: - make use of firebase auth- remove this

/**
 *  @description - authorize the user and send token
 */
export const authUser = asyncHandler(async (req: Request, res: Response) => {
  console.log("route working")
  // initializeApp();
  const firebaseAuth = getAuth()

  const { name, email, walletAddress } = req.body
  console.log('req.body ----->', name, email, walletAddress)

  const token = req.headers.authorization?.split('')[1]
  console.log('token ----->', token)
  // if (!token) {
  //   res.status(401)
  //   throw new Error('Not authorized, no token')
  // }
  const authUser = await firebaseAuth.verifyIdToken(token as string)
  console.log('auth user ----->', authUser)
  if (!authUser) {
    res.status(401)
    throw new Error('Not authorized, no valid token')
  }

  const user = await User.findOne({ email })

  if (!user) {
    const newUser = await User.create({
      name,
      email,
      walletAddress,
    })
    if (newUser) {
      res.status(201).json({
        success: true,
        data: newUser,
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  }

})

/**
 * @desc    Get all users
 */
export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  console.log('get all users working.')

  const query = await User.find({})

  if (!query) {
    throw new Error('No user found')
  } else {
    res.status(200).json({
      success: true,
      data: query,
    })
  }
})

/**
 * @desc    Get user by id
 */

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id
  const user = await User.findById({ id })
  if (!user) {
    res.status(404)
    throw new Error('User not found')
    return
  }

  res.status(200).json({
    success: true,
    data: user,
  })
})

//delete user - admin only
