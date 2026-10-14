import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from "../models/playlist.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPlaylist = asyncHandler(async(req, res)=> {
    const {name, description} = req.body

    //TODO: create a playlist
})

const getUserPlaylist = asyncHandler(async(req, res)=>{
    const {userId} = req.params

    //TODO: get user playlist
}) 
const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  //TODO: get playlist by id
});

const addVideoToPlaylist = asyncHandler(async (res, res) => {
  const { playlistId, videoId } = req.params;
  // Todo: add video to the playlist
});

const removeVideoFromPlaylist = asyncHandler(async (res, res) => {
  const { playlistId, videoId } = req.params;
  // Todo: remove video from the playlist
});

const deletePlaylist = asyncHandler(async (req, res) =>{
    const {playlistId} = req.params;
    //TODO: get playlist by id 
})

const updatePlaylist = asyncHandler(async(req, res)=> {
    const {playlistId} = req.params
    const {name, description} = req.body
    //Todo: update playlist
})

export { 
    createPlaylist,
    getUserPlaylist,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}