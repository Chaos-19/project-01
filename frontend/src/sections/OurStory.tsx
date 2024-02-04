import { image4 } from "../assets/index";

interface Props {
    // Define your props here
}

const OurStory = (/*props: Props*/) => {
    return (
        <div
            className="w-full h-[50vh] md:h-[48vh] bg-cover bg-fixed bg-center "
            style={{ backgroundImage: `url(${image4})` }}
        >
            <div className="w-full h-full flex justify-center">
                <div className="flex flex-col items-center justify-center md:px-20 text-center mt-8">
                    <h5 className="capitalize text-xl text-white font-medium">
                        Our Story
                    </h5>
                    <p className="text-sm md:text-md text-white text-center font-normal md:px-10">
                        We believe in creativity as one of the major forces of
                        progress. With this idea, we traveled throughout World
                        to find exceptional artisans and bring their unique
                        handcrafted objects to connoisseurs everywhere.
                    </p>

                    <a
                        className="text-lg font-medium text-white mt-12 capitalize border py-1.5 px-2.5"
                        href="/about"
                    >
                        Read full Story
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
