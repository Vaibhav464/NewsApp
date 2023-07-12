import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import NewsBox from './components/NewsBox';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageSize = 6;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  // setProgress(progress)

    return (
      <BrowserRouter>
        <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
          <NavBar />
          <Routes>
            <Route path='/' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path='/business' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country="in" category="business" />}></Route>
            <Route path='/entertainment' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route path='/general' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path='/health' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country="in" category="health" />}></Route>
            <Route path='/science' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country="in" category="science" />}></Route>
            <Route path='/sports' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route path='/technology' element={<NewsBox setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  
}
export default App;