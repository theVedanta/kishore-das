import { useEffect, useState } from "react";

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
        <section id="Contact" className="mb-44">
            <h1 className="text-6xl text-blue font-serif mb-16">
                Contact Information
            </h1>
            {contacts.map((contact) => {
                return (
                    <div className="flex my-6">
                        <h1 className="font-medium text-3xl">
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
