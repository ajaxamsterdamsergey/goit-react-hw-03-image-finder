import React from "react";
import PropTypes from "prop-types";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ items, openModal }) => {
  return (
    <>
      {items.length > 0 && (
        <ul className={styles.ImageGallery}>
          {items.map(item => (
            <ImageGalleryItem item={item} onClick={openModal} key={item.id} />
          ))}
        </ul>
      )}
    </>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired
};
export default ImageGallery;
