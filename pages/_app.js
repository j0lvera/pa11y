import React from "react";
import App, { Container } from "next/app";
import { resetServerContext } from "react-beautiful-dnd";
import { PaletteProvider } from "../components/palette-context";

resetServerContext();

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
