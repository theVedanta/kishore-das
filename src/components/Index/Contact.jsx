import { useEffect, useState } from "react";
import Heading from "../Heading";

const Contact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts([
            { type: "Email", value: "mailto:hotmail.co" },
            { type: "Number", value: "tel:1234567890" },
            { type: "Linkedin", value: "https://www.linkedin.com/" },
        ]);
    }, []);

    return (
        <section id="Contact" className="pb-44 tab:pb-20">
            <Heading text="Contact" />
            <br />
            {contacts.map((contact) => {
                return (
                    <div className="flex my-6 lap:my-3" key={contact.value}>
                        <h1 className="font-medium text-3xl blap:text-2xl lap:text-lg">
                            {contact.type} -{" "}
                            <a
                                className="font-normal text-blue italic"
                                href={contact.value}
                            >
                                {contact.value.includes("mailto:")
                                    ? contact.value.replace("mailto:", "")
                                    : contact.value.includes("tel:")
                                    ? contact.value.replace("tel:", "")
                                    : contact.value}
                            </a>
                        </h1>
                    </div>
                );
            })}
        </section>
    );
};

export default Contact;
