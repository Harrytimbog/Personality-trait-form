import mongoose from "mongoose";

const selfAwarenessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  field1: { type: String, required: true },
  field2: { type: String, required: true },
});

const otherTableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  field3: { type: String, required: true },
});

export const FormModel = mongoose.model("Form", selfAwarenessSchema);
export const OtherTableModel = mongoose.model("OtherTable", otherTableSchema);
