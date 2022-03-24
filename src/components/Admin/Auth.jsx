import Heading from "../Heading";

const Auth = ({ setAuthed }) => {
    const auth = (e) => {
        e.preventDefault();
        const username = document
            .querySelector("input[name='username']")
            .value.trim();
        const password = document
            .querySelector("input[name='password']")
            .value.trim();

        if (username === "username" && password === "password") {
            setAuthed(true);
            localStorage.setItem("token", "authed");
        } else {
            setAuthed(false);
            document.querySelector(".error").classList.add("opacity-100");
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
            <p className="error text-lg text-red-500 font-medium opacity-0 transition-all">
                Username or Password is incorrect
            </p>
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
