import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  StyledHeader,
  StyledInput,
  StyledButton,
  StyledForm,
} from "../../styles/styled";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length > 0) {
      onSubmit(inputValue);
    } else {
      toast("Будь-ласка введіть свій запит");
    }
  };
  return (
    <StyledHeader>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Toaster />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </StyledHeader>
  );
}
