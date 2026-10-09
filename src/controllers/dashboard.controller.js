import mongoose  from "mongoose";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { Video } from "../models/video.model"
import { Like } from "../models/like.model";
import { Subscription } from "../models/subscription.model";

const getChannelStats = asyncHandler(async (req, res) => {
    //TODO: get chanel stats like total video views, total subscribers, total videos, total likes etc.
})

const getChannelVideo = asyncHandler(async( req, res) => {
    //TODO: get all the videos uploaded by the channel
})

export {
    getChannelStats, getChannelVideo
}