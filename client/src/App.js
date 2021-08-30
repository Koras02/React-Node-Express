import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleMovie from './SingleMovie';
import Radium from "radium";

function App() {
  const styles = {
    wrapper: {
      width: "100%",
      height: "auto",
      margin:"-20px auto",
      padding:"10px 0px",
      background:"#2d3635",
      float:"left"
    },
    h1 : {
       textAlign:"center",
     
    }
  }


  const [movies, setMovies] = useState([]);
 
  function getMovies(page) {
    axios({
      method: "get",
      // eslint-disable-next-line no-undef
      url: `/3/discover/tv?api_key=7db8b1ffbba88aaa67068565d84fe99f`
    }).then(response => {
      setMovies(response.data.results ?? [])
      console.log(response);
    }).catch((error) =>{
      console.log(error);
    })
  }

  useEffect(() => {
    getMovies();
  })

  return (
    <>
     <div style={styles.wrapper}>
         <h1 style={styles.h1}>영화 목록</h1>
          {movies.length > 0 && movies.map((movie, index) => (
              <>
              <SingleMovie key={movie.id} id={movie.id} media_type={'tv'}  movie={movie} {...movie} />
             </>
          ))}
 
     </div>
  
     </>
  );
}

export default Radium(App);