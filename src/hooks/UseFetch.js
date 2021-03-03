import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
  // create state variables
  console.log(initialUrl)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if(!url) return;
    setData(null);
    setError(null);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            setError(error);
        });
  }, [url]);

  return { data, error, setUrl };
};

export default UseFetch;

