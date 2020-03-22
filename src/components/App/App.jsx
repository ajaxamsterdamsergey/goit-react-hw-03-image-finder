import React, { Component } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import * as articleAPI from "../services/api";
import styles from "./App.module.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import SearchBar from "../SearchBar/SearchBar";
export default class App extends Component {
  state = {
    articles: [],
    query: "",
    page: 1,
    isLoading: false,
    error: null,
    isModalOpen: false,
    imageId: null
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query, articles } = this.state;

    if (prevState.page !== page) {
      this.fetchArticles(query, page);
    }

    if (prevState.articles !== articles && articles.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }
  fetchArticles = (query, page) => {
    console.log(query, page);
    this.setState({ isLoading: true, query: query });
    articleAPI
      .fetchArticles(query, page)
      .then(res =>
        this.setState(prevState => {
          console.log(res.data.hits);
          return { articles: [...prevState.articles, ...res.data.hits] };
        })
      )

      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  handleOpenModal = id => {
    this.setState({
      isModalOpen: true,
      imageId: id
    });
  };

  handleCloseModal = e => {
    this.setState({
      isModalOpen: false,
      imageId: ""
    });
  };
  onLoadMore = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1,
      isLoading: true
    });
    console.log(page);
  };
  render() {
    const { articles, isLoading, error, isModalOpen, imageId } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.fetchArticles} />
        {isModalOpen && (
          <Modal
            imageId={imageId}
            articles={articles}
            onCloseModal={this.handleCloseModal}
          />
        )}
        <ImageGallery items={articles} openModal={this.handleOpenModal} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
