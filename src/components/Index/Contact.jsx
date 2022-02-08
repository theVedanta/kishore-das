import { useEffect, useState } from "react";
import Heading from "../Heading";

const Contact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts([
            { type: "Email", value: "hotmail.co,gmail.com" },
            { type: "Number", value: "1234567890" },
            { type: "Linkedin", value: "https://www.linkedin.com/" },
        ]);
    }, []);

    return (
        <section id="Contact" className="pb-44 tab:pb-20">
            <Heading text="Contact" />
            <br />
            {contacts.map((contact) => {
                return (
                    <div className="flex my-6 lap:my-3">
                        <h1 className="font-medium text-3xl blap:text-2xl lap:text-lg">
                            {contact.type} -{" "}
                            <i className="font-normal">{contact.value}</i>
                        </h1>
                    </div>
                );
            })}
        </section>
    );
};

export default Contact;
