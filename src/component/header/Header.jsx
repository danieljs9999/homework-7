import React, { useState } from "react";
import {
  HeaderMovies,
  HeaderMoviesH1Text,
  HeaderMoviesButton,
} from "../global/Global";
import ModalAddMovie from "../modalAddMovie/ModalAddMovie";
import Modalka from "../modalka/Modalka";

function Header({ moviesAdd }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = (event) => {
    setModalVisible((prevState) => !prevState);
    event.preventDefault();
  };

  const confirmHamdler = (event) => {
    setModalVisible(false);
    event.preventDefault();
  };

  return (
    <>
      {isModalVisible ? (
        <Modalka
          onCancel={toggleModalHandler}
          onConForm={confirmHamdler}
          moviesAdd={moviesAdd}
        >
          <ModalAddMovie
            moviesAdd={moviesAdd}
            onCancel={toggleModalHandler}
            onConForm={confirmHamdler}
          />
        </Modalka>
      ) : null}

      <HeaderMovies>
        <HeaderMoviesH1Text>Favorite Movies</HeaderMoviesH1Text>
        <HeaderMoviesButton onClick={toggleModalHandler}>
          ADD MOVIE
        </HeaderMoviesButton>
      </HeaderMovies>
    </>
  );
}

export default Header;
