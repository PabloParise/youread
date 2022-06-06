import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/popularCard";

const Popular = () => {

    const bookData = useSelector((state) => state.bookData.value);

    return (
        <main className="min-h-screen min-w-screen mb-12
            bg-slate-900  text-white
              ">
            <section className="flex flex-col items-center">
            <h2 className="font-serif text-3xl py-1">NYT Best Sellers</h2>
                    <article className="flex flex-col
                                     bg-sky-900 py-1 rounded-lg
                                       w-full">
                        {<Card bookData={bookData} listsNum={bookData.length} />}
                    </article>
            </section>
    </main>
    );
};

export default Popular;