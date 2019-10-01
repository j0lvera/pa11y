import cookie from "node-cookie";
import axios from "axios";

const apiUrl = process.env.API_URL;
const secret = process.env.SECRET;

export default async (req, res) => {
  const session = cookie.get(req, "session", secret, true);
  console.log("session", session);

  const { token, userId } = JSON.parse(session);

  if (!session) {
    res.send(401).json({ message: "Please login." });
  }

  const endpoint = `${apiUrl}/users/${userId}`;
  try {
    const { status, data } = await axios.get(endpoint, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });

    if (status === 200) {
      console.log("response", data);

      res.status(300).json({ user: data, message: "ok" });
      res.end();
    }
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      res.status(status).json({ data });
    }
    console.error("Error trying to send authenticated request.", error);
  }
};
