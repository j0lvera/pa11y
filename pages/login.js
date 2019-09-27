import Layout from "../components/layout";

function Login() {
  return (
    <Layout>
      <form>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </fieldset>

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}

export default Login;
