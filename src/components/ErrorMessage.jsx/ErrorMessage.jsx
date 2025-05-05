import { StyledError } from "../../styles/styled";
export default function ErrorMessage({ message }) {
  return (
    <StyledError>
      <p>{message}</p>
    </StyledError>
  );
}
