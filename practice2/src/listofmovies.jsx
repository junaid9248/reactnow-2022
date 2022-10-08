import React, {useState} from "react";

const List_movies= () => {
const [movie, setMovie]= useState([
    {
        title: 'a',
        release: 2020,
        price: 150,
    },
    {
        title: 'b',
        release: 2021,
        price: 180,
    },

    {
        title: 'c',
        release: 2022,
        price: 125,
    },
]);
//Now to map the array of objects
return (
    <span>{movie.map(movie => (<li>{movie.title}</li>))}</span>
);
};
export default List_movies;