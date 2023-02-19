import { useState } from 'react';
import axios from 'axios';

function App() {
  const apiKey = 'tu_api_key_aquí';
  const apiUrl = 'https://api.themoviedb.org/3/'; // Aquí utilizo el endpoint de la película "Fight Club" como ejemplo

  axios
    .get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return <></>;
}

export default App;
