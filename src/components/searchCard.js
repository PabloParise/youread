import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({searchData}) => {

    return (
        <>
            <article className="flex ">
                <div className="overflow-x-auto scrollbar 
                                scrollbar-thumb-green-400 
                                scrollbar-track-slate-900">
                    <div className="flex w-max mb-2" >
                        {searchData.map((item) => {
                            let id = item.id;
                            let smallThumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                            let description = item.volumeInfo.description;
                            if((thumbnail && description) != undefined ) {
                            return (
                                <div className=" relative group" key={id}>
                                    
                                    <Link to={`/searchbook/${id}`} state={{ item }}>
                                        <img className="h-44 md:h-56 md:group-hover:brightness-110 
                                                        md:group-hover:cursor-pointer" 
                                            src={smallThumbnail} alt='book cover'
                                        />
                                    </Link>
                                </div>
                            )}
                        })}
                    </div>
                </div>
            </article>
        </>
    );
};

export default SearchCard;