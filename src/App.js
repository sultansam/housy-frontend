import React from 'react';
import Header from './components/Header';
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

function App() {
  return (
    <div className="container pb-5">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
