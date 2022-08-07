import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './movie-infor.css';
import { toast } from 'react-toastify';

const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: 'cb35b229f134f593da02fa9ded6da8ca',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setMovie(response.data);

          setLoading(false);
        })
        .catch(() => {
          alert('Filme não encontrado');
          navigate('/', { replace: true });
          return;
        });
    }
    loadMovie();

    return () => {
      // loadMovie();
      console.log('desmontou');
    };
  }, [navigate, id]);

  function saveMovie() {
    const movieList = localStorage.getItem('@movie');
    let savedMovies = JSON.parse(movieList) || [];

    const hasFilme = savedMovies.some((movies) => movies.id === movie.id);

    if (hasFilme) {
      toast.warn('Esse filme já está na sua lista!');
      return;
    }
    savedMovies.push(movie);
    localStorage.setItem('@movie', JSON.stringify(savedMovies));
    toast.success('Filme salvo com sucesso!');
  }

  if (loading) {
    return (
      <div className="filme-info">
        {' '}
        <h1> Carregando detalhes </h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinpose</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          {' '}
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${movie.title}`}
          >
            {' '}
            Trailer{' '}
          </a>
        </button>
      </div>
    </div>
  );
};
export default Filme;
