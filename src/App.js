import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state={
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
            color="#f11856"
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}  apiKey={this.apiKey}   
                pageSize={6}
                key="general"
                country="in"
                category="general"
              /> 
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress}  apiKey={this.apiKey}    pageSize={6} key="sports" country="in" category="sports" />
            </Route>
            <Route exact path="/Business">
              <News setProgress={this.setProgress}  apiKey={this.apiKey}    
                pageSize={6}
                key="business"
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Tech">
              <News setProgress={this.setProgress}  apiKey={this.apiKey}   
                pageSize={6}
                key="technology"
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress={this.setProgress}  apiKey={this.apiKey}   
                pageSize={6}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            </Route>

            <Route exact path="/science">
              <News setProgress={this.setProgress}  apiKey={this.apiKey}   
                pageSize={6}
                key="Science"
                country="in"
                category="science"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
