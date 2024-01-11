import React from "react";
import { blogPost } from "../constants";

interface Props {
    // Define your props here
    title: string;
    date: string;
    img: string;
}

const BlogCard = (props: Props) => {
    const { title, img, date } = props;

    return (
        <div className="shadow-lg rounded">
            <img
                src={img}
                alt="blog posts"
                className="w-full bg-cover"
            />
            <div className="w-full flex items-center gap-2 px-3 py-3">
                <div className="flex flex-col justify-center border-r-2 border-red-300 px-2.5 text-center">
                    {date.split(" ").map((value, index) => {
                        return (
                            <span className="uppercase text-xs">{value}</span>
                        );
                    })}
                </div>
                <div className="px-2">
                    <h3 className="text-md text-gray-600 capitalize font-medium">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

const Blog = (/*props: Props*/) => {
    return (
        <div className="w-full h-full bg-gray-200 mb-80">
            <div className="py-6 flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col p-3.5 mt-2 mb-2">
                    <h2 className="text-xl font-medium uppercase text-gray-700">
                        Blog
                    </h2>
                    <p className="text-sm text-gray-500">
                        latest new from blog
                    </p>
                </div>

                <div className="py-5 px-4 flex flex-col md:flex-row items-center gap-2.5 max-w-2xl">
                    {blogPost.map((blog, index) => {
                        return (
                            <BlogCard
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
