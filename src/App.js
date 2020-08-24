import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  //define the category and news
  const [category, setCategory] = useState('');
  const [newsList, setNews] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=966fff7f692847668a4eb772b479a4d1`;

      const response = await fetch(url);
      const result = await response.json();

      setNews(result.articles);
    }
    getAPI();
  }, [category]);

  return (
    <Fragment>
        <Header 
          title='Buscador de Noticias'
        />

        <div className="container white">
            <Form
              setCategory={setCategory}
            />

            <NewsList 
              newsList={newsList}
            />
        </div>
    </Fragment>
  );
}

export default App;
