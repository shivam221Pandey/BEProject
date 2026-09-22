import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { UploadOncloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fillNmae, email, username, password } = req.body;
  console.log("email", email);

  if (
    [FullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, " All Fields Are Required");
  }

  const exitedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (exitedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0].path;
  const coverImageLocalPath = req.files?.coverImage[0].path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avtar file is required.");
  }

  const avatar = await UploadOncloudinary(avatarLocalPath);
  const coverImage = await UploadOncloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avtar file is required.");
  }

  const user = await User.create({
    FullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowercase(),
  });

  const createdUser = await User.findById(User._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiError(200, createdUser, "User registered successfully"));
});

export { registerUser };
