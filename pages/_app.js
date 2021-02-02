import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function AppNext({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

AppNext.defaultProps = {
  Component: null,
  pageProps: null,
};

AppNext.propTypes = {
  Component: null,
  pageProps: null,
};