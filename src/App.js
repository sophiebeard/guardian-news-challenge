import React, { useState, useEffect } from 'react'
import HeadlinePage from './Component/HeadlinePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleSummaryPage from './Component/ArticleSummaryPage';
import axios from 'axios';
import './App.css';


function App() {

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_KEY);
      setArticles(res.data.response.results);
      console.log(articles);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchArticles()
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HeadlinePage articles={articles} />} />
        <Route path='/articles/:id' element={<ArticleSummaryPage articles={articles} />} />
      </Routes>
    </Router>
  );
};

export default App;
