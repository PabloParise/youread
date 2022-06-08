import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDown  } from "react-icons/fa";

const PopularBook = () => {

    const { state } = useLocation();

    const { item } = state || {};

    console.log(item);

    const [showLinks, setShowLinks] = useState(false);

    return (
            <main className="flex justify-center 
                             min-h-screen min-w-screen pt-14
                           bg-slate-900  text-white
                             ">
                <section className="flex flex-col my-4 p-4 border-2 rounded-lg w-5/6">
                    <article className="flex flex-col mx-auto
                                     bg-slate-900 rounded-lg
                                      ">
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
                        <div className="flex flex-col mt-2">
                            <div className="bg-slate-800 rounded-lg p-1">
                                <h2 className="font-serif text-lg font-bold lg:text-2xl xl:text-4xl">
                                    {item.title}
                                </h2>
                                <h3 className="text-sm lg:text-lg xl:text-xl">
                                    by {item.author}
                                </h3>
                            </div>
                            <p className="bg-slate-900 rounded-lg p-1 mt-2 lg:text-lg xl:text-xl">
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
                                <ul className={`bg-slate-900 rounded-lg p-1 mt-1 ${showLinks ? 'block': 'hidden'}`}>
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
                </section>
            </main>
    );
};


export default PopularBook;