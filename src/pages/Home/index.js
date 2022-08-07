import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// https:/movie/now_playing?api_key=cb35b229f134f593da02fa9ded6da8ca&language=en-US&page=1

const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: 'cb35b229f134f593da02fa9ded6da8ca',
          langauge: 'pt-BR',
          page: 1,
        },
      });
      // console.log(response.data.results.slice(0, 10));
      setMovies(response.data.results);
      setLoading(false);
    }
    loadMovies();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>carregando filme</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/filme/${movie.id}`}> Acessar </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
