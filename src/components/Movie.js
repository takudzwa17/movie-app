import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

//components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch'

//Image
import NoImage from "../images/no_image.jpg"


const Movie = () => {

    const { moveId } = useParams()

    const { state: movie, loading, error } = useMovieFetch(moveId)

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>


    return(
        <React.Fragment>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
        </React.Fragment>
    )
}

export default Movie