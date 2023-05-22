import React, {useEffect, useState} from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

export interface IMovie {
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    genres: string[];
    backdrops: string[];
}

export interface IHeroProps {
    movies: IMovie[];
}

function App() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            setMovies(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home movies={movies}/>}>
                    </Route>
                </Route>
            </Routes>
            <Layout/>
        </div>
    );
}

export default App;
