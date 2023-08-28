import React from 'react';

function Blog({title, contents, color}) {
    return (
        <div className={`p-6 rounded-xl ${color}`} data-aos="zoom-in" data-aos-duration="1000">
            <div class="mt-2">
                <p class="text-lg text-center text-white sm:text-xl font-bold my-2 leading-tight">{title}</p>
                <div className="h-6"></div>
                <div class="flex text-white text-center text-base sm:text-md leading-tight">
                     <p>{contents}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog

