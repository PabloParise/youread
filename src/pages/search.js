import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {setBookData} from "../features/popBookData";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import SearchCard from "../components/searchCard";
import {setSearchData} from "../features/searchData";
import { Link } from "react-router-dom";

const Books = () => {

    const [dropdown, setDropdown] = useState(false)

    const searchData = useSelector((state) => state.searchData.value);
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [subject, setSubject] = useState("");

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

        let url = `https://www.googleapis.com/books/v1/volumes?q=${titleParam}${title}${authorParam}${author}${subjectParam}${subject}&key=AIzaSyCcH8YnStIHfPmRNB4WBarph4i03ekNjX8&langRestrict=en&maxResults=40`;
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
        <main>
            <article className="w-full bg-slate-700 py-10">
                        <div className="w-5/6 md:w-4/6 mx-auto ">
                            <p className="text-lg md:text-xl font-bold pb-4">Search something you like</p>
                            <div className="flex flex-col bg-slate-600 pt-1 rounded-lg">
                                <label className="p-2 md:text-lg lg:text-xl" htmlFor="keyword">Title</label>
                                <input
                                    className="bg-slate-800 p-1" 
                                    type="text" id="title" value={title} 
                                    onChange={e=>setTitle(e.target.value)}
                                    onKeyDown={enterSearch} 
                                />
                                <label className="p-2 md:text-lg lg:text-xl" htmlFor="author">Author</label>
                                <input 
                                    className="bg-slate-800 p-1"
                                    type="text" id="author" value={author} 
                                    onChange={e=>setAuthor(e.target.value)}
                                    onKeyDown={enterSearch} 
                                />
                                <label className="p-2 md:text-lg lg:text-xl" htmlFor="subject">Category</label>
                                <input 
                                    className="bg-slate-800 p-1"
                                    type="text" id="subject" value={subject} 
                                    onChange={e=>setSubject(e.target.value)}
                                    onKeyDown={enterSearch} 
                                />
                                <Link to={`/search`} onClick={searchBooks} className="bg-slate-900 p-2 rounded-b-lg sm:hover:bg-slate-400">Search</Link>
                            </div>
                            <div className="mt-4">
                                {<SearchCard searchData = {searchData} />}
                            </div>
   
                        </div>
                    </article>
        </main>
    ); 
}

export default Books;