import React from 'react';
import Hero from "../hero/Hero";
import {IHeroProps} from "../../App";

const Home = (props: IHeroProps) => {
    return <Hero movies={props.movies}></Hero>
};

export default Home