import cookie from "node-cookie";
import axios from "axios";

const apiUrl = `${process.env.API_URL}/token-auth/`;
const secret = process.env.SECRET;

export default async function login(req, res) {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.status(400).json({ message: "Username or password param missing." });
  }

  try {
    const response = await axios.post(apiUrl, {
      username,
      password
    });

    if (response.status === 200) {
      const { token, user_id } = response.data;

      const payload = JSON.stringify({ token, userId: user_id });
      cookie.create(
        res,
        "session",
        payload,
        {
          httpOnly: true,
          path: "/"
        },
        secret,
        true
      );

      res.status(200).end();
    }
  } catch (error) {
    // TODO: Figure out error handling in the frontend
    console.error(error);
    if (error.response) {
      const { status, data } = error.response;
      res.status(status).json({ message: data });
    }
  }
}
