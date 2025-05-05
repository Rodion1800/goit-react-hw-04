import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  & > header {
    flex: 0 1 auto;
  }
`;
export const StyledHeader = styled.header`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: red;
`;

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  list-style: none;
`;
export const StyledLi = styled.li`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;
export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
`;
export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 30px;
`;
export const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid orange;
  border-radius: 30px;
`;
export const StyledMoreButton = styled.button`
  padding: 10px;
  border: 1px solid orange;
  border-radius: 30px;
  margin: auto;
  width: 30%;
`;
export const StyledForm = styled.form`
  justify-content: center;
  display: flex;
  width: 100%;
`;
export const StyledError = styled.div`
  text-align: center;
  margin-top: 20px;
  color: red;
`;

export const StyledLoader = styled.div`
  text-align: center;
  margin-top: 20px;
  color: red;
`;
export const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  display: block;
  margin: 0 auto;
`;
export const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    position: "relative",
    background: "white",
    padding: 0,
    border: "none",
    borderRadius: "8px",
    maxWidth: "90vw",
    maxHeight: "90vh",
    inset: "auto",
  },
};
