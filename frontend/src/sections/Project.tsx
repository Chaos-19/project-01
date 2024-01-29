import React from "react";
import { projectsIdea } from "../constants";

interface Props {
    // Define your props here
}

const ProjectCard = (props: {
    title: string;
    body: string;
    img: string;
    date: string;
}) => {
    const { img, title, body, date } = props;
    return (
        <div className="relative group">
            <img src={img} alt="Project image" className="w-full bg-cover" />
            <div className="absolute top-0 left-0 inset-0 bg-black/40">
                <div className="flex flex-col gap-1.5 p-4 text-white">
                    <p className="text-xs">{date}</p>
                    <h2 className="text-lg mb-2 font-medium ">{title}</h2>
                    <p className="text-xs md:hidden group-hover:block">
                        {body}
                    </p>
                </div>
                <button className="absolute opacity-0 group-hover:opacity-100 m-auto right-0 left-0 -bottom-8 group-hover:bottom-0 transition-all bg-yellow-500 text-white p-2 px-2.5">
                    Read more
                </button>
            </div>
        </div>
    );
};

const Project = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full bg-gray-200 py-8">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col p-3.5 mt-2 mb-2">
                        <h2 className="text-xl font-medium uppercase text-gray-700">
                            interior ideas
                        </h2>
                        <p className="text-sm text-gray-500">
                            keeping things minimal
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row px-4 gap-3.5 md:gap-4 md:justify-center mb-5 md:px-28">
                    {projectsIdea.map((project, index) => {
                        return (
                            <ProjectCard
                                title={project.title}
                                body={project.body}
                                img={project.img}
                                date={project.date}
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

export default Project;
