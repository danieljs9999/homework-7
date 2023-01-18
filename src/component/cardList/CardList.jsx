import React, { useState } from "react";
import DeleteModal from "../deleteModal/DeleteModal";
import {
  LiMovieElement,
  LiMovieEflementImage,
  LiMovieeImg,
  LiMovieElementInfo,
  LiMovieElementInfoH2,
  LiMovieElementInfoPStars,
  LiMovieElementInfoButton,
} from "../global/Global";
import Modalka from "../modalka/Modalka";

function CardList({ deleteMovieHandler, element, index }) {
  const [deleteList, setDeleteList] = useState(false);

  const deleteMovieList = (event) => {
    setDeleteList((prevState) => !prevState);
    event.preventDefault();
  };

  const deleteMovieListHandler = () => {
    setDeleteList(false);
    deleteMovieHandler(element.id);
  };

  return (
    <div>
      <LiMovieElement key={index}>
        <LiMovieEflementImage>
          <LiMovieeImg src={element.img} />
        </LiMovieEflementImage>
        <LiMovieElementInfo>
          <LiMovieElementInfoH2>{element.title}</LiMovieElementInfoH2>
          <LiMovieElementInfoPStars>
            {element.rating}/5 stars
          </LiMovieElementInfoPStars>
          {deleteList ? (
            <Modalka onCancel={deleteMovieList} onConForm={deleteMovieList}>
              <DeleteModal
                onCancel={deleteMovieList}
                onConForm={deleteMovieListHandler}
              />
            </Modalka>
          ) : null}

          <LiMovieElementInfoButton onClick={deleteMovieList}>
            Delete
          </LiMovieElementInfoButton>
        </LiMovieElementInfo>
      </LiMovieElement>
    </div>
  );
}

export default CardList;
