import styled from "styled-components";

export const HeaderMovies = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
`;

export const HeaderMoviesButton = styled.button`
  font: inherit;
  padding: 0.5rem 1rem;
  background: #f67722;
  border: 1px solid #f67722;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:hover {
    background: #f3cc4b;
    border-color: #f3cc4b;
    color: #995200;
  }

  &:active {
    background: #f67722;
    border-color: #f67722;
    color: white;
  }
`;

export const HeaderMoviesH1Text = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;

export const AddBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const AddModal = styled.div`
  position: fixed;
  z-index: 100;
  background: white;
  border-radius: 10px;
  width: 540px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  top: 30%;
  left: 32%;
  /* 
  */
  animation: fade-slide-in 0.3s ease-out forwards;

  @keyframes fade-slide-in {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const AddModalActions = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const AddModalBtnSuccess = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #00329e;
  background: #00329e;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 1rem;

  &:hover {
    background: #f67722;
    border-color: #f67722;
  }
  &:active {
    background: #eb5e00;
    border-color: #eb5e00;
  }
`;

export const AddModalBtnPassive = styled.button`
  color: #00329e;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  &:hover {
    background: #aec6f8;
  }
`;

export const UlMovieList = styled.ul`
  list-style: none;
  width: 40rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 0;
`;

export const LiMovieElement = styled.li`
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
`;

export const LiMovieEflementImage = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`;

export const LiMovieeImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LiMovieElementInfo = styled.div`
  flex: 2;
  padding: 1rem;
`;

export const LiMovieElementInfoH2 = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  color: #383838;
  margin-bottom: 1rem;
`;

export const LiMovieElementInfoPStars = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: white;
  display: inline;
  background: #f67722;
  padding: 0.25rem 1rem;
  border-radius: 15px;
`;

export const LiMovieElementInfoButton = styled.button`
  background: #d30808;
  color: white;
  border-color: #d30808;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  margin: 0 0.5rem;

  &:hover {
    background: #ff3217;
    border-color: #ff3217;
  }
`;
