import { db } from "../connect.js";
import jwt from "jsonwebtoken";

async function getPosts(req, res) {
  const token = req.cookies.accessToken;
  console.log(token);
  if (!token) return res.status(401).json("Not logged in!");

  //TODO --> Change env
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(402).json("Token is not valid!");

    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(data);
      return res.status(200).json(data);
    });
  });
}

export { getPosts };
