import React from 'react';

function Blog({title, contents, color}) {
    return (
        <div className={`p-6 rounded-xl ${color}`} data-aos="zoom-in" data-aos-duration="1000">
            <div class="mt-2">
                <p class="text-xl text-center text-white sm:text-2xl font-bold my-2 leading-tight">{title}</p>
                <div className="h-10"></div>
                <div class="flex text-white text-center text-base sm:text-lg leading-tight">
                     <p>{contents}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog

