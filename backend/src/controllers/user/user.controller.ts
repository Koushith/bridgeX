import express, { Request, Response } from "express";

import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { User } from "../../models/user.js";

/**
 * @desc    Get all users
 */
export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  console.log("get all users working");

  const query = await User.find({});

  if (!query) {
    throw new Error("No user found");
  } else {
    res.status(200).json({
      success: true,
      data: query,
    });
  }
});

/**
 * @desc    Get user by id
 */

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById({ id });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
    return;
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});
