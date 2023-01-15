import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";

export default class App extends Component {
  pageSize=8
  state ={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

          <Routes> <Route
              
              path="/"
              key="home"
              element={ <News setProgress={this.setProgress} pageSize={5} country="in" category="general" />}
            ></Route>
            <Route
             
              path="/business"
              key="business"
              element={ <News setProgress={this.setProgress} pageSize={5} country="in" category="business" />}
            ></Route></Routes>
          <Routes> <Route
              exact
              path="/sports"
              key="sports"
              element={ <News setProgress={this.setProgress} pageSize={5} country="in" category="sports" />}
            ></Route>
            <Route
              
              path="/entertainment"
              key="entertainment"
              element={
                 <News setProgress={this.setProgress} pageSize={5} country="in" category="entertainment" />
              }
            ></Route></Routes>
          <Routes><Route
              
              path="/science"
              key="science"
              element={
                 <News setProgress={this.setProgress} exact pageSize={5} country="in" category="science" />
              }
            ></Route>
            <Route
              
              path="/technology"
              key="technology"
              element={ <News setProgress={this.setProgress} pageSize={5} country="in" category="technology" />}
            ></Route></Routes>
          <Routes>
            <Route
             
              path="/health"
              key="health"
              element={ <News setProgress={this.setProgress} pageSize={5} country="in" category="health" />}
            ></Route>
            <Route
            
              path="/general"
              key="general"
              element={ <News setProgress={this.setProgress} pageSize={5} country="in" category="general" />}
            ></Route></Routes>
           
           
            
          
        </Router>
      </div>
    );
  }
}
