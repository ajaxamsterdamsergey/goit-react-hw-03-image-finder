import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
  }
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    imageId: PropTypes.number.isRequired,
    articles: PropTypes.array.isRequired,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleESC);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleESC);
  }
  handleESC = (e) => {
    if (e.keyCode === 27) {
      this.props.onCloseModal();
    }
  };
  handleBgClick = (e) => {
    const overlay = this.modalRef.current;
    if (e.target === overlay) this.props.onCloseModal();
  };
  render() {
    const { imageId, articles } = this.props;

    const largeImage = articles.find((article) => {
      if (article.id === imageId) {
        return article.largeImageURL;
      }
    });
    return (
      <div
        className={styles.Overlay}
        onClick={this.handleBgClick}
        ref={this.modalRef}
      >
        <div className={styles.Modal}>
          <img src={largeImage.largeImageURL} alt={largeImage.tags} />
        </div>
      </div>
    );
  }
}
export default Modal;
