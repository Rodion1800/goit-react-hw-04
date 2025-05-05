import { StyledImage } from "../../styles/styled";

export default function ImageGalleryCard({ image }) {
  return (
    <div>
      <StyledImage src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
