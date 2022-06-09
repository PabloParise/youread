import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDown, FaTwitter  } from "react-icons/fa";

const PopularBook = () => {

    const { state } = useLocation();

    const { item } = state || {};

    console.log(item.book_image_width);

    const [showLinks, setShowLinks] = useState(false);

    return (
            <main className="flex justify-center 
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
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text={`Has anyone read ${item.title} by ${item.author}?`}  data-show-count="false"><FaTwitter />Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
            </main>
    );
};


export default PopularBook;