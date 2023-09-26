import React from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function Pagination({ links }) {
    // console.log(links);
    const prev = links.links[0].url;
    const next = links.links[links.links.length - 1].url;
    const current = links.current_page;
    // function getClassName(active) {
    //     if (active) {
    //         return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
    //     } else {
    //         return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
    //     }
    // }

    return (
        // links.length > 1 && (
        //     <div className="mb-4">
        //         <div className="flex flex-wrap mt-8">
        //             {links.map((link, key) =>
        //                 link.url === null ? (
        //                     <div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">
        //                         {link.label}
        //                     </div>
        //                 ) : (
        //                     <Link
        //                         className={getClassName(link.active)}
        //                         href={link.url}
        //                     >
        //                         {link.label}
        //                     </Link>
        //                 )
        //             )}
        //         </div>
        //     </div>
        // )
        <div className="join">
            <Link href={prev} className="join-item btn">
                «
            </Link>
            <button className="join-item btn">Page {current}</button>
            <Link href={next} className="join-item btn">
                »
            </Link>
        </div>
    );
}
