import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

interface SlideItemProps {
    bgImage: string;
    title: string;
    body: string;
    btn: Object;
}

const SlideItem = (props: SlideItemProps) => {
    const { bgImage, title, body, btn } = props;

    return (
        <div
            className="h-full w-full flex items-center bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="space-y-6 px-3 pl-4 text-white md:ml-14 ml-4 max-w-lg"
            >
                <motion.h2
                    variants={fadeIn("down", "tween", 0.5, 1)}
                    className="text-2xl md:text-4xl font-black text-white capitalize"
                >
                    {title}
                </motion.h2>
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="text-sm md:text-xl pr-4"
                >
                    {body}
                </motion.p>
                <motion.button
                    variants={fadeIn("up", "spring", 0.85, 1.5)}
                    className={`${`bg-${btn?.color}-400`} p-2 px-4 border border-2`}
                 >
                    {btn.text}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default SlideItem;
