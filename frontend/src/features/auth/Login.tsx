import React, { useRef, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hook";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [check, setCheck] = useState(false);

    const navigate = useNavigate();

    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setError("");
    }, [email, password]);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            if (email && password) {
                const userDate = await login({ email, password }).unwrap();

                /*const userDate: {} = { token: "this is my token" };*/
                dispatch(setCredentials({ ...userDate, email }));
                setEmail("");
                setPassword("");
                navigate("/product/list");
            }
        } catch (error) {
            setError("Login Faild");
            errRef.current.focus();
        }
    };

    return (
        <section className="w-screen h-screen flex justify-center items-center mb-10">
            <div className="w-full max-w-lg md:p-8 p-12">
                <h2 className="text-4xl text-black font-medium">
                    Welcome back
                </h2>
                <p className="my-5 text-md text-gray-500">
                    Welcome! Please enter your details.
                </p>
                <p
                    ref={errRef}
                    className={
                        error
                            ? `p-4 text-white font-medium text-md bg-red-600`
                            : ""
                    }
                >
                    {error}
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center gap-3 text-md text-gray-500"
                >
                    <label htmlFor="email">Email</label>
                    <input
                        ref={userRef}
                        type="email"
                        name="email"
                        placeholder="Enter you email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="p-3 border border-gray-300 rounded"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="p-3 border border-gray-300 rounded"
                    />
                    
                    <button className="w-full p-3 flex items-center justify-center text-white bg-blue-500 rounded-xl">
                        Sign in
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Login;
