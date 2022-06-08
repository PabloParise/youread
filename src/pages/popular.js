import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/popularCard";

const Popular = () => {

    const bookData = useSelector((state) => state.bookData.value);

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