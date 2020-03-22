import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";
export default class App extends Component {
  state = {};
  render() {
    return (
      <div className={styles.Loader}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={2000} 
        />
      </div>
    );
  }
}
