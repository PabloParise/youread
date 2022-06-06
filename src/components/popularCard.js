import React, { useState } from "react";
import Modal from "./popularModal";

const Card = ({bookData, listsNum}) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {bookData.slice(0, listsNum).map((list) => {
                const {
                    list_name,
                    list_id,
                    books, 
                } = list;
                return (
                    <article className="flex flex-col" key={list_id}>
                        <h2 className="mb-1 ml-1">{list_name}</h2>
                        <div className="overflow-x-auto">
                            <div className="flex w-max mb-2" >
                                {books.map((item) => {
                                    const {
                                        author,
                                        book_image, 
                                        buy_links, 
                                        description, 
                                        price, 
                                        primary_isbn10,
                                        publisher,
                                        title,
                                        rank,
                                    } = item;
                                    return (
                                        <div key={rank}>
                                            <div className=" relative group" onClick={()=>{setShow(true); setItem(item)}}>
                                                <img className="h-44" src={book_image} alt='book cover' />
                                                {<div className="absolute top-0 scale-0 w-full h-full  
                                                                group-hover:scale-100 group-hover:bg-black opacity-70">
                                                    <h2>{title}</h2>
                                                    <h3>{author}</h3>
                                                    <button>COMPRAR</button>
                                                </div>}
                                            </div>
                                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
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