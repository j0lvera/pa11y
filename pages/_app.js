import React from "react";
import App, { Container } from "next/app";
import { PaletteProvider } from "../components/palette-context";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PaletteProvider>
          <Component {...pageProps} />
        </PaletteProvider>
      </Container>
    );
  }
}

export default MyApp;
