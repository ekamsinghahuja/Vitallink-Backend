import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    specification: {
      type: String,
      required: true,
      trim: true,
    },
    patients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Patient",
      },
      { default: [] },
    ],
    hospital: [
      {
        type: Schema.Types.ObjectId,
        ref: "Hospital",
      },
      { default: [] },
    ],
  },
  {
    timestamps: true,
  },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
