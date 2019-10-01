import { useState } from "react";
import Router from "next/router";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { Box, Button, Text } from "rebass";
import { Input, Label } from "@rebass/forms";
import Layout from "../components/layout";
import css from "../components/spin.css";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isLoading: false,
    error: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();

    updateState({ isLoading: true, error: "" });

    try {
      const { username, password } = user;
      const response = await axios.post("/api/login", {
        username,
        password
      });

      if (response.status === 200) {
        updateState({ isLoading: false });
        Router.push("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        updateState({ isLoading: false });
        const { data, status } = error.response;
        console.error("Error trying to login user", status, data);

        if (status === 400) {
          updateState({ error: data.message });
        }
      }
    }
  }

  function updateState(newState) {
    setUser(Object.assign({}, user, newState));
  }

  function handleChange(event) {
    setUser(
      Object.assign({}, user, {
        [event.target.name]: event.target.value
      })
    );
  }

  return (
    <Layout>
      <Box width={[1 / 4]} mx="auto" p={4} bg="muted">
        {user.error && (
          <Box bg="brown" color="white">
            {user.error}
          </Box>
        )}
        <Box as="form" onSubmit={handleSubmit}>
          <Box mb={3}>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              bg="background"
              onChange={handleChange}
            />
          </Box>

          <Box mb={3}>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              bg="background"
              onChange={handleChange}
            />
          </Box>

          <Button type="submit" disabled={user.isLoading}>
            {user.isLoading ? (
              <>
                <FaSpinner className={css.spin} />
                <Text as="span" ml={2}>
                  Login
                </Text>
              </>
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default Login;
