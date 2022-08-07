import React from 'react';
import './favorite.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Favorite = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const movieList = localStorage.getItem('@movie');
    setMovies(JSON.parse(movieList) || []);
  }, []);

  function removeMovied(id) {
    //  const movieList = localStorage.getItem('@movie');
    //const newList = JSON.parse(movieList) || [];
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
    localStorage.setItem('@movie', JSON.stringify(newMovies));
    toast.success('Filme removido com sucesso!');
  }

  return (
    <div className="savedMovies">
      <h1>Meu Filmes</h1>
      {movies.length === 0 ? (
        <span>Você não possui nenhum filme salvo ☹️ </span>
      ) : null}
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                />{' '}
                <span>{movie.title}</span>
              </div>

              <div>
                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                <button
                  onClick={() => {
                    removeMovied(movie.id);
                  }}
                >
                  {' '}
                  Excluir{' '}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorite;
