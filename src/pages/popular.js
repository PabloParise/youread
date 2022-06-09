import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setBookData} from "../features/bookData";
import Card from "../components/popularCard";

const Popular = () => {

  const bookData = useSelector((state) => state.bookData.value);
  const dispatch = useDispatch();

  useEffect(() => {
      const getPopularBooks = async () => {
          try {
              const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=Yo8fdejHwEeCW5w0v3AVwZ8Z4S55JWCI`)
              console.log(res.data.results.lists);
              dispatch(setBookData(res.data.results.lists));
          } catch(error) {
              console.log(error);
          }
      }
      getPopularBooks()
  },[]); 

    return (
        <main className="min-h-screen min-w-screen py-14
            bg-slate-900  text-white
              ">
              <section className="flex flex-col mt-4 p-4 border-2 rounded-lg
                                  w-5/6 mx-auto max-w-7xl">
                <h2 className="font-serif text-3xl pb-4 md:text-5xl">
                  NYT Best Sellers
                </h2>
                <article className="flex flex-col 
                              bg-slate-600
                                rounded-lg">
                    {<Card bookData={bookData} listsNum={bookData.length} />}
                </article>
              </section>
    </main>
    );
};

export default Popular;