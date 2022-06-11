import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const AuthorBook = () => {

    const { state } = useLocation();
    const { item } = state || {};

    const [showLinks, setShowLinks] = useState(false);
    const [isReadMoreShown, setReadMoreShown] = useState(true);
    
    const toggleReadBtn = () => {
        setReadMoreShown(prevState => !prevState)
    };

    let id = item.id;
    let smallThumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
    let title = item.volumeInfo.title;
    let author = item.volumeInfo.authors.join(", ");
    let description = item.volumeInfo.description;
    let publisher = item.volumeInfo.publisher;
    let pageCount = item.volumeInfo.pageCount;
    let category = item.volumeInfo.categories.join(", ");
    let rating = item.volumeInfo.averageRating;
    let format = item.saleInfo.isEbook;
    let price = item.saleInfo.listPrice["amount"];
    let currency = item.saleInfo.listPrice["currencyCode"];
    let buyLink = item.saleInfo.buyLink;

    console.log(item);

    return (
            <main className="flex flex-col items-center
                             min-h-screen min-w-screen
                           bg-slate-900  text-white
                             ">
                    <article className="flex flex-col items-center mt-20 mx-2 mb-6 p-4 h-fit
                                     bg-slate-900 border-2 rounded-lg w-5/6 max-w-5xl
                                      sm:flex-row sm:items-start sm:justify-around">
                        <div className="">
                            <p className="bg-green-400 rounded-sm mb-1 text-center">
                               Rating: {rating}/5
                            </p>
                            <img className="" src={thumbnail} alt='book cover'/>
                        </div>
                        <div className={`mt-2 sm:mt-0 sm:ml-2 lg:max-w-lg`}>
                            <div className="bg-slate-800 rounded-lg p-1">
                                <h2 className="font-serif text-lg font-bold lg:text-2xl xl:text-4xl 2xl:text-5xl">
                                    {title.toUpperCase()}
                                </h2>
                                <h3 className="text-sm lg:text-lg xl:text-xl">
                                    by {author}
                                </h3>
                            </div>
                            <p className="bg-slate-900 rounded-lg p-1 mt-2 text-justify lg:text-lg xl:text-xl">
                                {(() => {
                                    if(description === "") {
                                        return `${'> '}Description not available (but it's an amazing book!)`;
                                    } else {
                                        return (<>
                                            {isReadMoreShown ? `${'> '}${description.substr(0, 200)}` : `${'> '}${description}`} 
                                            <button onClick={toggleReadBtn} className="text-slate-300 ml-1">{isReadMoreShown? "... Read more" : "Read less"}</button>
                                        </>)
                                    }
                                })()}
                                
                            </p> 
                            <div className="my-2 lg:text-lg xl:text-xl">
                                <button className="flex items-center bg-green-400 
                                                   p-1 rounded-md hover:cursor-pointer"
                                                   onClick={() => {setShowLinks(!showLinks)}}>
                                    <p>Details</p><FaAngleDown />
                                </button>
                                <ul className={`list-inside list-disc bg-slate-800 rounded-lg p-1 mt-1 ${showLinks ? 'block': 'hidden'}`}>
                                    <li>Publisher: {publisher}</li>
                                    <li>Category: {category}</li>
                                    <li>Pages: {pageCount}</li>
                                    <li>Format: {format ? "Ebook" : "Book"}</li>
                                    <li>Price: {currency} {price}</li>
                                    <li><a href={buyLink} target="_blank" rel="noopener noreferrer" className="font-bold">Buying link</a></li>
                                </ul>
                            </div>
                        </div>
                    </article>
            </main>
    );
};


export default AuthorBook;