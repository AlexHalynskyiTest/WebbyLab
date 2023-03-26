import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';
import useGetMovies from '../../api/useGetMovies';
import { CREATE_PATH } from '../../router/route-types';
import { SEARCH_DEBOUNCE_TIME_MS } from '../../constants/constants';

const Movies = () => {
  const { isAuth } = useAuth();
  const getMovies = useGetMovies();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const debouncedResults = useMemo(() => {
    return debounce((e) => setSearch(e.target.value), SEARCH_DEBOUNCE_TIME_MS);
  }, []);

  useEffect( () => {
    getMovies('title', 'ASC', search);
    return () => {
      debouncedResults.cancel();
    };
    // eslint-disable-next-line
  }, [search]);

  const movies = useSelector(state => state.movies.movies);

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <div>
            <div>Search</div>
            <input type="text" onChange={debouncedResults} placeholder="Please type title/actor" />
          </div>
          <button onClick={() => navigate(CREATE_PATH)}>Create movie</button>
          {movies?.map((movie) => <div key={movie.id}><Link to={String(movie.id)}> {movie.title} ({movie.year}) </Link></div>)}
          {!movies?.length && <div>There is nothing to show</div>}
        </div>
      }
    </div>
  );
};

export default Movies;
