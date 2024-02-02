import React from "react";
import { blogPost } from "../constants";

interface Props {
    title: string;
    date: string;
    img: string;
}

const BlogCard = (props: Props) => {
    const { title, img, date } = props;

    return (
        <div className="relative shadow-lg rounded overflow-hidden group">
            <img
                src={img}
                alt="blog posts"
                className="w-full bg-cover md:h-[200px]"
            />
            <div className="w-full flex items-center gap-2 px-3 py-3">
                <div className="flex flex-col justify-center border-r-2 border-red-300 px-2.5 text-center">
                    {date.split(" ").map((value, index) => {
                        return (
                            <span key={value} className="uppercase text-xs">{value}</span>
                        );
                    })}
                </div>
                <div className="px-2 h-full">
                    <h3 className="text-md md:text-xs text-gray-900 capitalize font-medium">
                        {title}
                    </h3>
                </div>
            </div>
            {/*Hover effect*/}
            <div className="flex items-center justify-center pb-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300">
                <button className="capitalize rounded bg-yellow-400 text-white py-1.5 px-2">
                    Read more
                </button>
            </div>
        </div>
    );
};

const Blog = (/*props: Props*/) => {
    return (
        <div className="w-full h-full bg-gray-200">
            <div className="py-6 flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col items-center justify-center p-3.5 mt-2 mb-2">
                    <h2 className="text-xl font-medium uppercase text-gray-700">
                        Blog
                    </h2>
                    <p className="text-sm text-gray-500">
                        latest new from blog
                    </p>
                </div>

                <div className="py-5 flex flex-col md:flex-row items-center md:items-stretch gap-2.5 md:w-screen-sm px-3">
                    {blogPost.map((blog, index) => {
                        return (
                            <BlogCard
                                key={`${blog.title}-${index}`}
                                title={blog.title}
                                img={blog.img}
                                date={blog.date}
                            />
                        );
                    })}
                </div>
                <div className="flex items-center justify-center mt-5">
                    <button className="px-2 py-1.5 bg-yellow-400/80 rounded capitalize text-md text-white">
                        view all post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
