import React, { useEffect, useState } from "react";
import axios from "axios";

const PopularRev = ({revTitle}) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getPopularReviews = async () => {
            try {
                const res = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${revTitle}&api-key=Yo8fdejHwEeCW5w0v3AVwZ8Z4S55JWCI`)
                setReviews(res.data.results);
            } catch(error) {
                console.log(error);
            }
        }
        getPopularReviews()
    },[]); 

    return (
        <>
            {(() => {
                if(reviews.length !== 0) {
                    return (
                        <>
                            {reviews.map((item, index) => {
                                const {
                                    url,
                                    byline,
                                    summary,
                                    publication_dt
                                } = item;
                                return (
                                    <div key={index} className="border-t-2 p-2">
                                        <p className="font-bold">{byline !== "" ? byline : "-"}</p>
                                        <p className="font-light">{publication_dt}</p>
                                        <p className="my-1">{'> '}{summary}</p>
                                        <p>See the full review <a href={url} target="_blank" rel="noopener noreferrer" className="font-bold">here</a></p>
                                    </div>
                                ) 
                            })}
                        </>
                    )
                } else {
                    return (
                        <p className="font-light">Sadly, there are no reviews yet</p>
                    )
                }
            })()}
        </>
    );
};

export default PopularRev;