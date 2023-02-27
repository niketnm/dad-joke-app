import React, { useState, useEffect } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke);
      });
  }

  const handleNewJokeClick = () => {
    fetchJoke();
  }

  return (
    <div>
      <p>{joke}</p>
      <button className='btn' onClick={handleNewJokeClick}>Generate New</button>
    </div>
  );
}

export default Joke;
