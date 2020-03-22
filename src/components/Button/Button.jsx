import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onLoadMore }) => (
  <button type="button" className={styles.Button} onClick={onLoadMore}>
    load more
  </button>
);
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};
export default Button;
