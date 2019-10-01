import axios from "axios";
// import cookie from "node-cookie";
import cookie from "cookie";
import Layout from "../components/layout";
// import { Router } from "next/router";

const Dashboard = ({ user }) => {
  console.log("user", user);
  return (
    <Layout>
      <div>Hello, world.</div>
    </Layout>
  );
};

Dashboard.getInitialProps = async ctx => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    const { req, res } = ctx;
    if (!req.headers.cookie) {
      res.writeHead(302, {
        Location: "/login"
      });
      res.end();
      return;
    }

    const secret = process.env.SECRET;

    const apiRoutesUrl = process.env.API_ROUTES_URL;
    const endpoint = `${apiRoutesUrl}/profile`;

    console.log("endpoint", endpoint);

    const { session } = cookie.parse(req.headers.cookie);

    console.log("session from dashboard.js", session);

    try {
      const { status, data } = await axios.get(endpoint, {
        withCredentials: true,
        headers: {
          Cookie: `session=${session}`
        }
      });

      console.log("status", status);

      if (status === 200) {
        console.log("response data", data);
        return {
          user: data.user
        };
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 300) {
          return {
            user: data.user
          };
        }

        if (status === 401) {
          res.writeHead(302, {
            Location: "login"
          });
          res.end();
          return;
        }
      }

      console.error(
        "Error trying to get profile from the frontend",
        error.response.status,
        error.response.data
      );
    }
  }
  return {};
};

export default Dashboard;
