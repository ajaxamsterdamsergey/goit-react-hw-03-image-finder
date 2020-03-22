import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";
const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li onClick={() => onClick(item.id)} className={styles.ImageGalleryItem}>
      <img
        src={item.largeImageURL}
        alt={item.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
export default ImageGalleryItem;
