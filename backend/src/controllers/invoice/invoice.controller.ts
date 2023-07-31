import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";

export const getAllInvoices = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      data: "get all invoices working",
    });
  }
);
