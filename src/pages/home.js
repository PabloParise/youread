import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/popularCard";
import { useDispatch, useSelector } from "react-redux";
import {setPopBookData} from "../features/popBookData";
import { Link } from "react-router-dom";

const Home = () => {

    const popBookData = useSelector((state) => state.popBookData.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPopularBooks = async () => {
            try {
                const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=Yo8fdejHwEeCW5w0v3AVwZ8Z4S55JWCI`)
                dispatch(setPopBookData(res.data.results.lists));
            } catch(error) {
                console.log(error);
            }
        }
        getPopularBooks()
    },[]); 

    return (
            <main className="min-h-screen min-w-screen pt-14
                           bg-slate-900  text-white
                           ">
                <section className="mb-10">
                    <h1 className="text-[80px] text-center">You<strong>READ</strong></h1>
                    <h2 className="text-2xl text-center">Find your next favourite book</h2>
                </section>
                
                <section className="grid grid-cols-1 md:grid-cols-2 pb-8">
                    <article className="w-5/6 md:w-11/12 mx-auto border-2 rounded-lg p-4">
                        <p className="text-lg md:text-xl pb-2">Check out the NYT Best Sellers</p>
                        <div className="flex flex-col bg-slate-600 rounded-lg">
                            {<Card popBookData={popBookData} listsNum={2} />}
                            <Link to='/popular' className="text-lg pl-1 text-center 
                                                        font-bold bg-slate-500 w-full
                                                        rounded-b-lg">
                                View all
                            </Link>
                        </div>
                    </article>
                    <article className="w-5/6 md:w-11/12 mx-auto border-2 rounded-lg p-4">
                        <p className="text-lg md:text-xl pb-2">Get a recomendation based on a/an book/author you like</p>
                        <div className="flex flex-col bg-slate-600 pt-1 rounded-lg">
                            {/*<Link to='/search' className="text-lg pl-1 text-center 
                                                        font-bold bg-slate-500 w-full
                                                        rounded-b-lg">
                                Search
                            </Link>*/}
                        </div>
                    </article>
                </section>
            </main>
    );
};


export default Home;