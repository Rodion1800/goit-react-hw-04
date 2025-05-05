import { ClipLoader } from "react-spinners";
import { StyledLoader } from "../../styles/styled";

export default function Loader() {
  return (
    <StyledLoader>
      <ClipLoader loading={true} size={40} color="#123abc" />
      <p>Завантаження...</p>
    </StyledLoader>
  );
}
