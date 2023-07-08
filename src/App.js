import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsBox from './components/NewsBox';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<NewsBox key='general' pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route path='/business' element={<NewsBox key='business' pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route path='/entertainment' element={<NewsBox key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route path='/general' element={<NewsBox key='general' pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route path='/health' element={<NewsBox key='health' pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route path='/science' element={<NewsBox key='science' pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route path='/sports' element={<NewsBox key='sports' pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route path='/technology' element={<NewsBox key='technology' pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
