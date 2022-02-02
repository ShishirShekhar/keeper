import React from "react";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";


function App() {
  return (
    <>
      <Header />
      {notes.map((props) => (
        <Note 
          key={props.key} 
          title={props.title}
          content={props.content} 
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
