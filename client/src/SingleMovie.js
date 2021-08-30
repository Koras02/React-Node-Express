import React from 'react'
 
import {img_300} from "./config";


const SingleMovie = ({movie,id,title,poster_path, media_type, first_air_date,release_date, original_title, name,original_name, backdrop_path, vote_average }) => {
    return (
        <div classNamee="handler">
            <div media_type={media_type} id={id}>
                <div className="poster__container">
                <img className={'poster'} src={poster_path ? `${img_300}/${poster_path}` : null}
                             alt={`${title ? title : (original_title ? original_title : (name ? name : original_name))}`}/>

                </div>
            </div>
        </div>
    )
}

export default SingleMovie
