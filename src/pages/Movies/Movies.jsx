import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';
import useGetMovies from '../../api/useGetMovies';
import { CREATE_PATH } from '../../router/route-types';
import { SEARCH_DEBOUNCE_TIME_MS } from '../../constants/constants';
import Button from '../../ui/Button/Button';
import SearchInput from '../../ui/SearchInput/SearchInput';
import StyledLink from '../../ui/StyledLink/StyledLink';

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
          <Button name="Create movie" onClick={() => navigate(CREATE_PATH)}/>
          <SearchInput label="Search" type="text" onChange={debouncedResults} placeholder="Please type title/actor" />
          <ol className="p-4 list-decimal">
            {movies?.map((movie) => <li key={movie.id}><StyledLink text={`${movie.title} (${movie.year})`} to={String(movie.id)} /></li>)}
          </ol>
          {!movies?.length && <div>There is nothing to show</div>}
        </div>
      }
    </div>
  );
};

export default Movies;
