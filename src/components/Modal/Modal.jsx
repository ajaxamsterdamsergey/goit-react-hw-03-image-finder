import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    imageId: PropTypes.number.isRequired,
    articles: PropTypes.array.isRequired
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleESC);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleESC);
  }
  handleESC = e => {
    if (e.keyCode === 27) {
      this.props.onCloseModal();
    }
  };
  render() {
    const { imageId, articles, onCloseModal } = this.props;

    const largeImage = articles.find(article => {
      if (article.id === imageId) {
        return article.largeImageURL;
      }
    });
    return (
      <div className={styles.Overlay} onClick={onCloseModal}>
        <div className={styles.Modal}>
          <img src={largeImage.largeImageURL} alt={largeImage.tags} />
        </div>
      </div>
    );
  }
}
