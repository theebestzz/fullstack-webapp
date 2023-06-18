import mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect("mongodb://localhost:27017/")
      .then(() => {
        console.log("Succesfully connected to database");
      })
      .catch((error) => {
        console.log("Error connection to database", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
