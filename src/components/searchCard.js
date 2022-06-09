import React from "react";

const SearchCard = ({seaBookData}) => {

    return (
        <>
            <article className="flex ">
                <div className="overflow-x-auto scrollbar 
                                scrollbar-thumb-green-400 
                                scrollbar-track-slate-900">
                    <div className="flex w-max mb-2" >
                        {seaBookData.map((item) => {
                            let id = item.id;
                            let smallThumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                            let title = item.volumeInfo.title;
                            let author = item.volumeInfo.authors;
                            let description = item.volumeInfo.description;
                            {/*let category = item.volumeInfo.categories[0];*/}
                            if(thumbnail != undefined) {
                            return (
                                <div className=" relative group" key={id}>
                                    <img className="h-44 md:h-56 md:group-hover:brightness-110 
                                        md:group-hover:cursor-pointer" 
                                        src={smallThumbnail} alt='book cover'
                                        />
                                    {/*<Link to={(() => {
                                                if(item.primary_isbn10 !== "") {
                                                    return `/popularbook/${primary_isbn10}`;
                                                } else {
                                                    return `/popularbook/${primary_isbn13}`;
                                                }
                                            })()} 
                                    state={{ item }}>
                                        
                                        </Link>*/}
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