import React from "react";
import BabyName from "./BabyName";

const FavoriteNames = ({ favorite, changeFavorite }) => {
  return (
    <div className="favoriteNames">
      <h2>Favourite names: </h2>
      {favorite.map((el) => (
        <BabyName key={el.id} {...el} changeFavorite={changeFavorite} />
      ))}
    </div>
  );
};

export default FavoriteNames;
