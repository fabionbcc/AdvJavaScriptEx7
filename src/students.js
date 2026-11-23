import { ObjectId } from "mongodb";
import { db } from "./db.js";

const studentsCollection = db.collection("students");

export const getStudents = async (filter = {}) => {
  const students = await studentsCollection
    .find(filter)
    .sort({ lastName: 1, firstName: 1 })
    .toArray();

  return students;
};

export const getStudent = async (id) => {
  const student = await studentsCollection.findOne({ _id: new ObjectId(id) });

  return student;
};

export const insertStudent = async (student) => {
  const result = await studentsCollection.insertOne(student);
  //   console.log(result);
  return result.insertedId;
};

export const insertStudents = async (student) => {
  const result = await studentsCollection.insertMany(student);
  //   console.log(result);
  return result.insertedCount;
};
