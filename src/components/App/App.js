import React, { Component } from 'react';
import galleryApi from '../../services/galleryApi';
import SearchBar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Notification from '../Notification/Notification';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Modal from '../Modal/Modal';
import style from './App.module.css';


class App extends Component {
  // static defaultProps = {
  //   page: 0,
  //   isLoading: false,
  //   isShowModal: false,
  // };
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    page: 0,
    isShowModal: false,
    modalImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchGallery();
    }
  }

  fetchGallery = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    const { searchQuery, page } = this.state;

    this.setState ({isLoading: true});

    galleryApi
    .fetchGalleryWithQuery(searchQuery, page)
    .then(gallery => this.setState(prevState => ({
      gallery: [...prevState.gallery, ...gallery],
      page: prevState.page + 1,
    })),
    )
    .catch(error => this.setState ({error}))
    // .catch(error => console.log(error))
    .finally(() => {
      this.setState ({isLoading: false});
      });
  };

  handleSearchFormSubmit = query => {
    this.setState ({
      searchQuery: query,
      page: 1,
      gallery: [],
    });
  };

  handleImageClick = url => {
    this.setState({ isShowModal: true, modalImageURL: url });
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false, modalImageURL: '' });
  };

  render(){
    const {gallery, isLoading, error, isShowModal } = this.state;
    return(
      <>
        <div className={style.App}>
          <SearchBar onSubmit = {this.handleSearchFormSubmit}/>
          {error && (
            <Notification message={`Whoops, something went wrong: ${error.message}`}/>
          )}
          {isLoading && (<Spinner message="Is loading..."/>)}
          {gallery.length > 0 && (
            <ImageGallery gallery = {gallery} onImageClick = {this.handleImageClick} />
          )}
          {gallery.length > 0 && (
            <Button fetchGallery={this.fetchGallery} />
          )}
        </div>

        {isShowModal && (
          <Modal onCloseModal={this.handleCloseModal}>
            <img src={this.state.modalImageURL} alt={this.state.searchQuery}/>
          </Modal>
        )}
      </>
    ) 
  }

}




export default App;
