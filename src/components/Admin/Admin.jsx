import Auth from "./Auth";
import AuthedAdmin from "./AuthedAdmin";
import { useState, useEffect } from "react";
import BASE_API_URL from "../../BASE_API_URL";
// import Load from "../Load";
import { Notyf } from "notyf";

const notyf = new Notyf();

const Admin = ({ page }) => {
    const [authed, setAuthed] = useState(false);
    // const [loaded, setLoaded] = useState(false);

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
                // setLoaded(true);
            } else {
                notyf.error("You were logged out");
                setAuthed(false);
                // setLoaded(true);
                localStorage.removeItem("token");
            }
        };

        if (token) {
            checkAuth();
        } else {
            // setLoaded(true);
            setAuthed(false);
        }
    }, []);

    return (
        <>
            {/* <Load loaded={loaded}> */}
                {authed ? (
                    <AuthedAdmin page={page} />
                ) : (
                    <Auth setAuthed={setAuthed} />
                )}
            {/* </Load> */}
        </>
    );
};

export default Admin;
