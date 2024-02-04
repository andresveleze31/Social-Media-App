import  express  from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
})
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(cookieParser());


app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/likes", likesRoutes);

//TODO Port in env file
app.listen(8800, () => {

  console.log("Api Working");  
})