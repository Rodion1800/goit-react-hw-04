import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import "./App.css";
import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Container } from "./styles/styled";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
      } catch (err) {
        setError("Щось пішло не так");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <Container>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {!loading && images.length > 0 && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </Container>
  );
}

export default App;
