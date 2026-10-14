import mongoose, { isValidObjectId } from "mongoose";
import { Tweet } from "../models/tweet.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createTweet = asyncHandler(async (req, res) => {
  // TODO: create tweets
});

const getUsertTweet = asyncHandler(async (req, res) => {
  // TODO: get users tweets
});

const updateTweet = asyncHandler(async (req, res) => {
  // TODO: update users tweets
});
const deleteTweet = asyncHandler(async (req, res) => {
  // TODO: delete users tweets
});

export{
    createTweet,
    getUsertTweet,
    updateTweet,
    deleteTweet
}