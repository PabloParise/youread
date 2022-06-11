import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setAuthorBookData} from "../features/authorBookData";
import { useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import AuthorCard from "../components/authorCard";
import PopularRev from "../components/popularRev";

const PopularBook = () => {

    const { state } = useLocation();
    const { item } = state || {};

    const [showLinks, setShowLinks] = useState(false);

    const authorBookData = useSelector((state) => state.authorBookData.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const getAuthorBooks = async () => {
            try {
                const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${item.author}&key=AIzaSyCcH8YnStIHfPmRNB4WBarph4i03ekNjX8&langRestrict=en&maxResults=20`)
                if(res.data.totalItems =! 0) {
                    let dataArr = [];
                    let titlesArr = [];
                    res.data.items.map((elem) => {
                        if(titlesArr.includes(elem.volumeInfo.title) === false 
                        && elem.volumeInfo.title.toLowerCase() !== item.title.toLowerCase() 
                        && elem.volumeInfo.authors.includes(item.author)) {
                            dataArr.push(elem);
                            titlesArr.push(elem.volumeInfo.title)
                        } 
                    })
                    dispatch(setAuthorBookData(dataArr))
                } else {
                    dispatch(setAuthorBookData([]))
                }
            } catch(error) {
                console.log(error);
            }
        }
        getAuthorBooks()
    },[]); 

    return (
            <main className="flex flex-col items-center
                             min-h-screen min-w-screen
                           bg-slate-900  text-white
                             ">
                    <article className="flex flex-col items-center mt-20 mx-2 mb-6 p-4 h-fit
                                     bg-slate-900 border-2 rounded-lg w-5/6 max-w-5xl
                                      sm:flex-row sm:items-start sm:justify-around">
                        <div className={`max-w-[${item.book_image_width}px]`}>
                            <p className="bg-green-400 rounded-sm mb-1 text-center">
                                {(() => {
                                    switch(item.weeks_on_list) {
                                        case 0:
                                            return 'New this week!';
                                        case 1:
                                            return '1 week on the list'
                                        default:
                                            return `${item.weeks_on_list} weeks on the list`
                                    }
                                })()}
                            </p>
                            <img className="" src={item.book_image} alt='book cover'/>
                        </div>
                        <div className={`mt-2 sm:mt-0 sm:ml-2 lg:max-w-lg`}>
                            <div className="bg-slate-800 rounded-lg p-1">
                                <h2 className="font-serif text-lg font-bold lg:text-2xl xl:text-4xl 2xl:text-5xl">
                                    {item.title}
                                </h2>
                                <h3 className="text-sm lg:text-lg xl:text-xl">
                                    by {item.author}
                                </h3>
                            </div>
                            <p className="bg-slate-900 rounded-lg p-1 mt-2 text-justify lg:text-lg xl:text-xl">
                                {(() => {
                                    if(item.description === "") {
                                        return `${'> '}Description not available (but it's an amazing book!)`;
                                    } else {
                                        return `${'> '}${item.description}`
                                    }
                                })()}
                            </p> 
                            <div className="my-2 lg:text-lg xl:text-xl">
                                <button className="flex items-center bg-green-400 
                                                   p-1 rounded-md hover:cursor-pointer"
                                                   onClick={() => {setShowLinks(!showLinks)}}>
                                    <p>Buy it!</p><FaAngleDown />
                                </button>
                                <ul className={`bg-slate-800 rounded-lg p-1 mt-1 ${showLinks ? 'block': 'hidden'}`}>
                                    {item.buy_links.map((link, index) => {
                                        const {
                                            name,
                                            url
                                        } = link;
                                        return (
                                            <li className="list-disc list-inside 
                                            hover:text-green-400" 
                                                key={index}>
                                                <a href={url} target="_blank">{name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article className="flex justify-center mb-6 p-4 h-fit
                                     bg-slate-900 border-2 rounded-lg w-5/6 max-w-5xl">
                        <div className="w-full">
                            <h2 className="lg:text-lg xl:text-xl mb-2">NYT book reviews for {item.title}</h2>
                            <PopularRev revTitle = {item.title} />
                        </div>
                    </article>
                    <article className="flex justify-center mb-6 p-4 h-fit
                                     bg-slate-900 border-2 rounded-lg w-5/6 max-w-5xl">
                        <div className="w-full">
                            <h2 className="lg:text-lg xl:text-xl mb-2">More from {item.author}</h2>
                            {(() => {
                                    if(authorBookData.length === 0) {
                                        return (<p className="text-sm lg:text-md font-light">It seems that there are none</p>);
                                    } else {
                                        return (
                                            <div><AuthorCard authorBookData={authorBookData} /></div>
                                        )
                                    }
                            })()}
                        </div>
                    </article>
            </main>
    );
};


export default PopularBook;