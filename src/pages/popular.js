import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/popularCard";

const Popular = () => {

    const bookData = useSelector((state) => state.bookData.value);

    return (
        <main className="min-h-screen min-w-screen pt-14
            bg-slate-900  text-white
              ">
            <section className="flex flex-col pb-8">
              <article className="w-5/6 mx-auto max-w-7xl">
                <h2 className="font-serif text-3xl py-4 md:text-5xl">
                  NYT Best Sellers
                </h2>
                <div className="flex flex-col 
                              bg-slate-600
                                rounded-lg">
                    {<Card bookData={bookData} listsNum={bookData.length} />}
                </div>
              </article>
            </section>
    </main>
    );
};

export default Popular;