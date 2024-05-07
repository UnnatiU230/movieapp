import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const popular = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(popular).then((response) => {
            const result = response.data;
            setMovies(result);
        });
    };

    const openDetails = (id) => {
        const selected = movies.find(movie => movie.id === id);
        setSelectedMovie(selected);
    };

    const closeDetails = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="App">
            {selectedMovie ? (
                <div className="detailsContainer">
                    
                    <img src={`https://picsum.photos/200?random=$`} alt="Movie Poster" />
                    <h3>Movie Id: {selectedMovie.id}</h3>
                    <h4>Title: {selectedMovie.title}</h4>
                    <p>Body: {selectedMovie.body}</p>
                </div>
            ) : (
                movies.map((item) => (
                    <div className="movieContainer" key={item.id} onClick={() => openDetails(item.id)}>
                        <img src={`https://picsum.photos/200?random=${item.id}`} alt="Movie Poster" />
                        <h5>Movie Id: {item.id}</h5>
                        <h5>Title: {item.title}</h5>
                        <h5>Body: {item.body}</h5>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
