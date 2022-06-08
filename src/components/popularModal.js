import React, { useState } from "react";
import { AiOutlineClose  } from "react-icons/ai";
import { FaAngleDown  } from "react-icons/fa";

const Modal = ({show, item, onClose}) => {

    const [showLinks, setShowLinks] = useState(false);
    
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
                            lg:pt-0
                            bg-gray-800/10">
                <div className="relative flex flex-col sm:flex-row mt-6
                                w-[329px] m-auto bg-slate-900 rounded-lg
                                sm:w-11/12 md:w-5/6 lg:w-4/6 max-w-4xl
                                ">
                    <img className="min-w-[329px]" src={book_image} alt='book cover'/>
                    <AiOutlineClose  size='22' onClick={() => {onClose(); setShowLinks(false)}} 
                        style={{position: "absolute", top: "0", right: "0", 
                        color: "black", cursor: "pointer", borderRadius: "100%",
                        backgroundColor: "rgba(257,257,257,0.6)"}}
                    />
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
                    <div className="flex flex-col justify-between p-2 sm:pr-7">
                        <div className="bg-slate-800 rounded-lg p-1">
                            <h2 className="font-serif text-lg font-bold lg:text-2xl xl:text-4xl">
                                {title}
                            </h2>
                            <h3 className="text-sm lg:text-lg xl:text-xl">
                                by {author}
                            </h3>
                        </div>
                        <p className="bg-slate-900 rounded-lg p-1 my-2 lg:text-lg xl:text-xl">
                            {'> '}{description}
                        </p> 
                        <div className="pt-1 lg:text-lg xl:text-xl">
                            <div className="flex items-center bg-green-400 
                                            w-fit p-1 rounded-md hover:cursor-pointer"
                                            onClick={() => {setShowLinks(!showLinks)}}>
                                <p>Buy it!</p><FaAngleDown />
                            </div>
                            <ul className={`bg-slate-900 rounded-lg p-1 mt-1 ${showLinks ? 'block': 'hidden'}`}>
                                {buy_links.map((item, index) => {
                                    const {
                                        name,
                                        url
                                    } = item;
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
                </div>
            </div>
        </>
    )
};

export default Modal;