import React from "react";
import "../public/reset.css";
import "react-big-calendar/lib/sass/styles.scss";
import wrapper from "../store/configureStore";

const _app = ({ Component }) => {
  return <Component />;
};

export default wrapper.withRedux(_app);
