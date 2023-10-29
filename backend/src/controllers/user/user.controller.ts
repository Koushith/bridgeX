import express, { Request, Response } from 'express'

import jwt from 'jsonwebtoken'

import { asyncHandler } from '../../middlewares/asyncHandler.js'
import { User } from '../../models/user.model.js'

//TODO: - make use of firebase auth- remove this

/**
 *  @description - authorize the user and send token
 */
export const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  //this will check if the hashed password is as same as passoword stored in the database
  //@ts-ignore TODO: check for type safy later
  if (user && (await user?.comparePassword(password))) {
    // genrate the token and set in httponly cookie
    const token = jwt.sign(
      {
        userId: user?._id,
      },
      '5f1nc1ujbc', // TODO: move this to env- change the key while deploying
      {
        expiresIn: '30d',
      }
    )
    // setting this on cookie, we are not sending this token in response. much safer and prevents cross side attacks!!
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 1000, //30days
      secure: process.env.NODE_ENV !== 'development',
    })

    res.status(200).json({
      user,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
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
