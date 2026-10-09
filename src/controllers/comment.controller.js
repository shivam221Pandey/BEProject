import mongoose from "mongoose";
import { Comment } from "../models/comment.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const getVideoComments = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;
  //TODO: get all comments for video
});

const addComment = asyncHandler(async (req, res) => {
  //TODO: add a comment to a video
});

const updateComment = asyncHandler(async (req, res) => {
  //TODO: Update a comment
});

const deleteComment = asyncHandler(async (req, res) => {
  //TODO: Delete a comment
});

export { getVideoComments, addComment, updateComment, deleteComment };
