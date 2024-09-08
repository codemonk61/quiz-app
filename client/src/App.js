

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import StyleGuides from './styleguide/StyleGuides';
import Questions from './organisms/Questions';
import ResultScreen from './organisms/ResultScreen';
import { Provider } from 'react-redux';
import { store } from './redux/redux';


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions/>} /> 
        <Route path="/resultscreen" element={<ResultScreen/>} /> 
        <Route path="/styleguides" element={<StyleGuides/>} /> 
        <Route path="/notfound" element={<NotFound />} /> 
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;

