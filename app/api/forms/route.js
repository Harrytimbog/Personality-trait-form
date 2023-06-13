import mongoose from "mongoose";
import { FormModel, OtherTableModel } from "../path/to/models";

export default async function handler(req, res) {
  const { name, field1, field2, field3 } = req.body;

  try {
    // Insert into FormModel
    const formData = new FormModel({ name, field1, field2 });
    await formData.save();

    // Insert into OtherTableModel
    const otherData = new OtherTableModel({ name, field3 });
    await otherData.save();

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
