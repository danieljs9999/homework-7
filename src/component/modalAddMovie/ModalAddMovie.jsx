import React, { useRef } from "react";
import {
  AddModalActions,
  AddModalBtnSuccess,
  AddModalBtnPassive,
} from "../global/Global";
import Input from "../UI/input/Input";

function ModalAddMovie({ onCancel, onConForm, moviesAdd }) {
  const MovieTitle = useRef();
  const MovieImage = useRef();
  const MovieRating = useRef();

  const focusEnterMovieTitle = (elem) => {
    if (elem.key === "Enter") {
      MovieImage.current.focus();
    }
  };
  const focusEnterMovieImage = (elem) => {
    if (elem.key === "Enter") {
      MovieRating.current.focus();
    }
  };
  const focusEnterMovieRating = (elem) => {
    if (elem.key === "Enter") {
      MovieTitle.current.focus();
    }
  };

  const add = (event) => {
    const userData = {
      title: MovieTitle.current.value,
      img: MovieImage.current.value,
      rating: MovieRating.current.value,
    };

    moviesAdd(userData);
    onConForm();

    MovieTitle.current.value = "";
    MovieImage.current.value = "";
    MovieRating.current.value = "";
    event.preventDefault();
  };

  return (
    <>
      <>
        <Input
          type={"text"}
          labelName={"Movie Title"}
          ref={MovieTitle}
          onKeyUp={focusEnterMovieTitle}
        />
        <Input
          type={"text"}
          labelName={"Image URL"}
          ref={MovieImage}
          onKeyUp={focusEnterMovieImage}
        />
        <Input
          type={"number"}
          labelName={"Your Rating"}
          ref={MovieRating}
          onKeyUp={focusEnterMovieRating}
        />
      </>
      <AddModalActions>
        <AddModalBtnPassive onClick={onCancel}>Cancel</AddModalBtnPassive>
        <AddModalBtnSuccess onClick={add}>Add</AddModalBtnSuccess>
      </AddModalActions>
    </>
  );
}

export default ModalAddMovie;
