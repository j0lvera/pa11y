import React from "react";
import App, { Container } from "next/app";
import { PaletteProvider } from "../components/palette-context";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const persistedState = process.browser
      ? JSON.parse(window.localStorage.getItem("pa11y"))
      : {};

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, persistedState };
  }

  render() {
    const { Component, pageProps, persistedState } = this.props;

    return (
      <Container>
        <PaletteProvider persistedState={persistedState}>
          <Component {...pageProps} />
        </PaletteProvider>
      </Container>
    );
  }
}

export default MyApp;
