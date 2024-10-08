import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      console.log(
        `🚀 Server is running at http://localhost:${process.env.PORT}/api/v1/`,
      );
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed!!", err);
  });
