import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/popularCard";
import SearchCard from "../components/searchCard";
import { useDispatch, useSelector } from "react-redux";
import {setPopBookData} from "../features/popBookData";
import {setSearchData} from "../features/searchData";
import { Link } from "react-router-dom";

const Home = () => {

    const popBookData = useSelector((state) => state.popBookData.value);
    const searchData = useSelector((state) => state.searchData.value);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [subject, setSubject] = useState("");

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

    const searchBooks = () => {

        let titleParam = "";
        let authorParam = "";
        let subjectParam = "";

        if(title !== "") {
            titleParam = "+intitle:";
        };
        if(author != "") {
            authorParam = "+inauthor:";
        };
        if(subject != "") {
            subjectParam = "+subject:";
        };

        let url = `https://www.googleapis.com/books/v1/volumes?q=${titleParam}${title}${authorParam}${author}${subjectParam}${subject}&key=AIzaSyCcH8YnStIHfPmRNB4WBarph4i03ekNjX8&maxResults=40`;
        axios.get(url)
        .then(res => {
                if(res.data.totalItems =! 0) {
                    dispatch(setSearchData(res.data.items))
                    console.log(res.data.items)
                } else {
                    dispatch(setSearchData([]))
                }
            })
        .catch(err => console.log(err))
        };
    
    const enterSearch = (event) => {
        if(event.key === 'Enter') {searchBooks()}
    };

    return (
            <main className="min-h-screen min-w-screen pt-14
                           bg-slate-900  text-white
                           ">
                <section className="relative pb-44">
                    <h1 className="text-[80px] text-center">YOU<strong>READ</strong></h1>
                    <h2 className="text-2xl text-center">Find your next favourite book</h2>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                        <svg className="relative block h-[67px] w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="fill-slate-600"></path>
                        </svg>
                    </div>
                </section>
                
                <section className="grid grid-cols-1 pb-8 ">
                    <article className="w-full bg-slate-600 py-10">
                        <div className="w-5/6 md:w-4/6 mx-auto ">
                            <p className="text-lg md:text-xl font-bold pb-4">Check out the NYT Best Sellers</p>
                            <div className="flex flex-col bg-slate-500 rounded-lg">
                                {<Card popBookData={popBookData} listsNum={2} />}
                                <Link to='/popular' className="text-lg pl-1 text-center 
                                                            font-bold bg-slate-500 w-full
                                                            rounded-b-lg">
                                    View all
                                </Link>
                            </div>
                        </div>
                    </article>
                    <article className="w-full bg-slate-700 py-10">
                        <div className="w-5/6 md:w-4/6 mx-auto ">
                            <p className="text-lg md:text-xl font-bold pb-4">Get a recomendation based on a/an book/author you like</p>
                            <div className="flex flex-col bg-slate-600 pt-1 rounded-lg">
                                <label className="p-2 md:text-lg lg:text-xl" htmlFor="keyword">Titulo</label>
                                <input
                                    className="bg-slate-900 p-1" 
                                    type="text" id="title" value={title} 
                                    onChange={e=>setTitle(e.target.value)}
                                    onKeyDown={enterSearch} 
                                />
                                <label className="p-2 md:text-lg lg:text-xl" htmlFor="author">Autor/es</label>
                                <input 
                                    className="bg-slate-900 p-1"
                                    type="text" id="author" value={author} 
                                    onChange={e=>setAuthor(e.target.value)}
                                    onKeyDown={enterSearch} 
                                />
                                <label className="p-2 md:text-lg lg:text-xl" htmlFor="subject">Categoría</label>
                                <input 
                                    className="bg-slate-900 p-1"
                                    type="text" id="subject" value={subject} 
                                    onChange={e=>setSubject(e.target.value)}
                                    onKeyDown={enterSearch} 
                                />
                                <button onClick={searchBooks}>Search</button>

                                {<SearchCard searchData = {searchData} />}

                                <Link to='/search' className="text-lg pl-1 text-center 
                                                            font-bold bg-slate-500 w-full
                                                            rounded-b-lg">
                                    View all
                                </Link>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
    );
};


export default Home;