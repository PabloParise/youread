import React from "react";
import { AiOutlineClose  } from "react-icons/ai";
import { FaAngleDown  } from "react-icons/fa";

const Modal = ({show, item, onClose}) => {

    if(!show) {
        return null;
    }

    const {
        author, 
        book_image, 
        buy_links, 
        description, 
        weeks_on_list, 
        publisher,
        title,
    } = item

    return (
        <>
            <div className="fixed z-10 pt-2 left-0 top-0 
                            w-full h-full overflow-auto 
                            bg-black/90">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 
                                w-[329px] m-auto bg-slate-700">
                    <img className="min-w-[329px]" src={book_image} alt='book cover'/>
                    <AiOutlineClose  size='26' onClick={onClose} style={{position: "absolute", top: "0.2", right: "0.1rem", color: "#909090", cursor: "pointer"}}/>
                    <p className="absolute top-0 left-1 bg-white/60 rounded-sm text-black">
                        {(() => {
                            switch(weeks_on_list) {
                                case 0:
                                    return 'New this week!';
                                case 1:
                                    return '1 week on the list'
                                default:
                                    return `${weeks_on_list} weeks on the list`
                            }
                        })()}
                    </p>
                    
                    <div className="p-1">
                        <h2 className="font-serif text-lg font-bold">{title}</h2>
                        <h3>by {author}</h3>
                        <p>{'> '}{description}</p> 
                        <div className="pt-1">
                            <div className="flex items-center"><p>Buy it!</p><FaAngleDown /></div>
                            <ul className="list-disc ml-5">
                                {buy_links.map((item, index) => {
                                    const {
                                        name,
                                        url
                                    } = item;
                                    return (
                                        <li key={index}>
                                            <a href={url}>{name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;