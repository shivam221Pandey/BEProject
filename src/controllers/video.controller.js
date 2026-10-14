import mongoose, { isValidObjectId } from "mongoose";
import { Video } from "../models/video.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, soryType, userId } = req.query;

  //   TODO: get all videos based on query, sort and paginantion
});

const publishVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  //   TODO: get video, upload to claudinary, create video
});

const getVideoById = asyncHandler(async (req, res) => {
  const { VideoId } = req.params;
  //   TODO: get video by id
});

const updateVideo = asyncHandler(async (req, res) => {
  const { VideoId } = req.params;
  //TODO: update video details like title, description, thumbnail
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { VideoId } = req.params;
  //TODO: Delete video
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { VideoId } = req.params;
});


export {
    getAllVideos,
    publishVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}
