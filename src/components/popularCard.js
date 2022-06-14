import React from "react";
import { Link } from "react-router-dom";

const Card = ({popBookData, listsNum}) => {

    return (
        <>
            {popBookData.slice(0, listsNum).map((list) => {
                const {
                    list_name,
                    list_id,
                    books, 
                } = list;
                return (
                    <article className="flex flex-col mb-4" key={list_id}>
                        <h2 className="p-2 bg-blue-600 md:text-lg lg:text-xl">{list_name}</h2>
                        <div className="overflow-x-auto scrollbar 
                                     scrollbar-thumb-green-400 
                                     scrollbar-track-blue-900">
                            <div className="flex w-max mb-2" >
                                {books.map((item) => {
                                    const {
                                        author,
                                        book_image, 
                                        book_image_width,
                                        buy_links, 
                                        description, 
                                        price, 
                                        primary_isbn10,
                                        primary_isbn13,
                                        publisher,
                                        title,
                                        rank,
                                    } = item;
                                    return (
                                        <div key={rank}>
                                            <div className=" relative group">
                                                <Link to={(() => {
                                                            if(item.primary_isbn10 !== "") {
                                                                return `/popularbook/${primary_isbn10}`;
                                                            } else {
                                                                return `/popularbook/${primary_isbn13}`;
                                                            }
                                                        })()} 
                                                state={{ item }}>
                                                    <img className="h-44 md:h-56 md:group-hover:brightness-110 
                                                    md:group-hover:cursor-pointer" 
                                                    src={book_image} alt='book cover'
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </article>
                )
            })} 
        </>
    );
};

export default Card;