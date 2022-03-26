import Heading from "../Heading";
import { useState } from "react";
import BASE_API_URL from "../../BASE_API_URL";

const Auth = ({ setAuthed }) => {
    const [error, setError] = useState("");

    const auth = async (e) => {
        e.preventDefault();
        const username = document
            .querySelector("input[name='username']")
            .value.trim();
        const password = document
            .querySelector("input[name='password']")
            .value.trim();

        if (username !== "" && password !== "") {
            const authedJson = await fetch(`${BASE_API_URL}/api/auth`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const authed = await authedJson.json();

            if (authed.done) {
                localStorage.setItem("token", authed.token);
                setAuthed(true);
            } else {
                localStorage.removeItem("token");
                setAuthed(false);
                setError(authed.message);
            }
        } else {
            setError("Please enter username and password");
        }
    };

    return (
        <form
            className="flex justify-center items-center w-screen h-screen flex-col px-96"
            onSubmit={(eve) => auth(eve)}
        >
            <Heading text="Admin Panel" />
            <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-1/2 bg-gray px-5 py-3 text-lg rounded-xl mb-4 mt-10"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-1/2 bg-gray px-5 py-3 text-lg rounded-xl mb-4"
            />
            <p className="error text-lg text-red-500 font-medium">{error}</p>
            <button
                className="btn bg-blue px-10 py-3 rounded-xl text-white mt-6 text-xl"
                type="submit"
            >
                Login
            </button>
        </form>
    );
};

export default Auth;
