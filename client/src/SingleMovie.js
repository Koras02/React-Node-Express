import React from 'react'
import {img_300} from "./config";
import Radium from "radium";
 
const styles = {
    handler: {
        width: "100%",

        display:"block",
        overflow: "hidden",
    },
    poster: {
   

    }
}


const SingleMovie = ({movie,id,title,poster_path, media_type, first_air_date,release_date, original_title, name,original_name, backdrop_path, vote_average }) => {
    return (
        <div style={styles.handler}>
            <div media_type={media_type} id={id} style={styles.poster}>
                <div className="poster__container">
                <img styles={styles.poster} src={poster_path ? `${img_300}/${poster_path}` : null}
                             alt={`${title ? title : (original_title ? original_title : (name ? name : original_name))}`}/>
                </div>
                <h1>{movie.name}</h1>
                
            </div>
        </div>
    )
}

export default Radium(SingleMovie);
