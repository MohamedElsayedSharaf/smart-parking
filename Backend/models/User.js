import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phone: String,
    vehicle_details: [
      {
        plate_Char: { type: String, required: true },
        Plate_Num: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
UserSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", UserSchema);
export default User;
