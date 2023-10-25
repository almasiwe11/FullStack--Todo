import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [25, "Name cannot exceed 25 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model("Todo", TodoSchema)
