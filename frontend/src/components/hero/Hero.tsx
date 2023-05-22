import React, {CSSProperties} from 'react';
import './Hero.scss';
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";
import {IHeroProps, IMovie} from "../../App";



const Hero = (props: IHeroProps) => {
    return <Carousel className={"movie-carousel-container"}>
        {props.movies.map((movie:IMovie) =>
            <Paper>
                <div className={"movie-card-container"}>
                    <div className={"movie-card"} style={{"--img" : `url(${movie.backdrops[0]})`} as CSSProperties}>
                        <div className={"movie-detail"}>
                            <div className={"movie-poster"}>
                                <img src={movie.poster}/>
                            </div>
                            <div className={"movie-title"}>
                                <h4>{movie.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        )}
    </Carousel>
};

export default Hero