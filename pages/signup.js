import { useState } from "react";
import axios from "axios";
import Layout from "../components/layout";

function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { username, password } = user;
      const response = await axios.post("http://localhost:8000/users/create/", {
        username,
        password
      });
      console.log("response", response);
    } catch (err) {
      console.error("Error trying to create a user", err);
    }
  }

  function updateUser(event) {
    setUser(
      Object.assign({}, user, {
        [event.target.name]: event.target.value
      })
    );
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={updateUser}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={updateUser}
          />
        </fieldset>

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}

export default Signup;
