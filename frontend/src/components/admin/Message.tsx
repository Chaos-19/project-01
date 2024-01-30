import { useState } from "react";
import { ChevronUp, ChevronDown } from "../../assets/index";
type Props = {

    name: string;
    email?: string;
    subject: string;
    message: string;

}

const Message = (props: Props) => {
    const { name, subject, message } = props

    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <div>
            <h2>
                <button type="button" className="flex items-center justify-between w-full p-2.5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
                    <span>{subject}</span>
                    <button
                        onClick={() =>
                            setIsOpen(!isOpen)
                        }
                    >
                        {isOpen ? (
                            <ChevronDown />
                        ) : (
                            <ChevronUp />
                        )}
                    </button>
                </button>
            </h2>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{message}</p>

                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        {!name ?? <li>{"Name : " + name}</li>}
                        {!props?.email ?? <li>{"Email: " + name}</li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Message