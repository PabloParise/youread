import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/popularCard";
import { useDispatch, useSelector } from "react-redux";
import {setBookData} from "../features/bookData";
import { Link } from "react-router-dom";

const Home = () => {

    const bookData = useSelector((state) => state.bookData.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPopularBooks = async () => {
            try {
                const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=Yo8fdejHwEeCW5w0v3AVwZ8Z4S55JWCI`)
                console.log(res.data.results.lists);
                dispatch(setBookData(res.data.results.lists));
            } catch(error) {
                console.log(error);
            }
        }
        getPopularBooks()
    },[]);

    return (
            <main className="min-h-screen min-w-screen mb-12
                           bg-slate-900  text-white
                           ">
                <section className="flex flex-col items-center">
                    <h2 className="font-serif text-3xl py-1">NYT Best Sellers</h2>
                    <article className="flex flex-col
                                     bg-sky-900 py-1 rounded-lg
                                       w-5/6">
                        {<Card bookData={bookData} listsNum={2} />}
                        <Link to='/popular' className="text-lg pl-1">All</Link>
                    </article>
                </section>
            </main>
    );
};


export default Home;