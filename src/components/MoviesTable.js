import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesTable = ({ authToken }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+authToken
        };

        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/movies', {
                    headers: headers
                });
                setMovies(response.data.data);
            } catch (err) {
                setError('Error fetching movies');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [authToken]);

    if (loading) {
        return <div>Loading movies...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Movies</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Age rating</th>
                        <th>Language</th>
                        <th>IMG</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.movies_id}>
                            <td>{movie.title}</td>
                            <td>{movie.age_rating}</td>
                            <td>{movie.lang}</td>
                            <td>{movie.cover_img}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MoviesTable;