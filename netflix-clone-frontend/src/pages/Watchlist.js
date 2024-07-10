import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const res = await axios.get(`http://localhost:5001/api/users/${userId}/watchlist`);
        setWatchlist(res.data.watchlist);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div>
      {watchlist.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default Watchlist;
