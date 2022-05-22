import { useEffect, useState } from "react";
import Heading from "../Heading";

const Contact = ({ conts }) => {
    const [contacts, setContacts] = useState([]);

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    useEffect(() => {
        setContacts(conts ? conts : []);
    }, [conts]);

    return (
        <section id="Contact" className="pb-44 tab:pb-20">
            <Heading text="Contact" />
            <br />
            {contacts.map((contact) => {
                return (
                    <div className="flex my-6 lap:my-3" key={contact.contact}>
                        <h1 className="text-3xl blap:text-2xl lap:text-lg">
                            {toTitleCase(contact.name)} -{" "}
                            <a
                                className="font-normal text-blue italic"
                                target={
                                    contact.name !== "mail" &&
                                    contact.name !== "phone"
                                        ? "_blank"
                                        : ""
                                }
                                rel="noreferrer"
                                href={`${
                                    contact.name === "mail"
                                        ? "mailto:"
                                        : contact.name === "phone"
                                        ? "tel:"
                                        : "https://"
                                }${contact.contact}`}
                            >
                                {contact.contact}
                            </a>
                        </h1>
                    </div>
                );
            })}
        </section>
    );
};

export default Contact;
