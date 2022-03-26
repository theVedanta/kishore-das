import Auth from "./Auth";
import IndexCMS from "./IndexCMS";
import { useState, useEffect } from "react";
import BASE_API_URL from "../../BASE_API_URL";
import { Notyf } from "notyf";
const notyf = new Notyf();

const Admin = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const checkAuth = async () => {
            const authedJson = await fetch(
                `${BASE_API_URL}/api/auth/validate`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                }
            );
            const authed = await authedJson.json();

            if (authed.done) {
                setAuthed(true);
            } else {
                notyf.error("Some Error occurred");
                setAuthed(false);
                localStorage.removeItem("token");
            }
        };

        if (token) {
            checkAuth();
        } else {
            setAuthed(false);
        }
    }, []);

    return <>{authed ? <IndexCMS /> : <Auth setAuthed={setAuthed} />}</>;
};

export default Admin;
