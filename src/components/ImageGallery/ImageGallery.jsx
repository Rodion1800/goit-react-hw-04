import ImageGalleryCard from "./ImageGalleryCard";
import { StyledUl, StyledLi } from "../../styles/styled";

export default function ImageGallery({ images, onImageClick }) {
  if (!images || images.length === 0) return null;
  return (
    <StyledUl>
      {images.map((image) => (
        <StyledLi key={image.id} onClick={() => onImageClick(image)}>
          <ImageGalleryCard image={image} />
        </StyledLi>
      ))}
    </StyledUl>
  );
}
