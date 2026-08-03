import mongoose from "mongoose";

// User schema stores employee account information and profile details
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // Select: false -> password has is hidden
    password: {
      type: String,
      required: true,
      select: false,
    },
    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    // Optional employee contact number
    phoneNumber: {
      type: String,
    },
    // Determines user permissions within the system
    role: {
      type: String,
      enum: ["employee", "manager"],
      default: "employee",
    },
    // Stores profile image URL
    profilePhoto: {
      type: String, 
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
export default User;
