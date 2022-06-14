import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({searchData}) => {

    return (
        <>
            <article>
                    <div className="flex flex-wrap justify-center mb-2 py-8 border-2 rounded-lg" >
                        {(() => {
                            if(searchData !==  undefined) {
                                return (
                                    <>
                                    {searchData.map((item) => {
                                        let id = item.id;
                                        let smallThumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                                        let description = item.volumeInfo.description;
                                        if((thumbnail && description) != undefined ) {
                                            return (
                                                <div className="relative group" key={id}>
                                                    <Link to={`/searchbook/${id}`} state={{ item }}>
                                                        <img className="h-44 md:h-48 w-32 md:group-hover:brightness-110 
                                                                        md:group-hover:cursor-pointer" 
                                                            src={smallThumbnail} alt='book cover'
                                                        />
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    })}
                                    </>
                                )
                            } else {
                                return (
                                    <p className="font-light p-4">No matching results</p>
                                )
                            }
                        })()}
                    </div>
            </article>
        </>
    );
};

export default SearchCard;