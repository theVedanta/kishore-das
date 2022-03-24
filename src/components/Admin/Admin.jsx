import Auth from "./Auth";
import IndexCMS from "./IndexCMS";
import { useState, useEffect } from "react";

const Admin = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === "authed") {
            setAuthed(true);
        } else {
            setAuthed(false);
        }
    }, []);

    return (
        <>
            {authed ? (
                <IndexCMS />
            ) : (
                <Auth setAuthed={setAuthed} />
            )}
        </>
    );
};

export default Admin;
