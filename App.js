import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="General"
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              path="/Business"
              element={
                <News
                  key="Business"
                  pageSize={this.pageSize}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            <Route
              path="/Entertainment"
              element={
                <News
                  key="Entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              path="/General"
              element={
                <News
                  key="General"
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              path="/Health"
              element={
                <News
                  key="Health"
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              path="/Science"
              element={
                <News
                  key="Science"
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News
                  key="Sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              path="/Technology"
              element={
                <News
                  key="Technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
