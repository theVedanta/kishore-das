import InputBox from "../InputBox";
import TextBox from "../TextBox";
import Heading from "../Heading";
import { Notyf } from "notyf";
import BASE_API_URL from "../../BASE_API_URL";
import { useState, useEffect } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";

const notyf = new Notyf();

const IndexCMS = () => {
    const [mainImg, setMainImg] = useState("");
    const [trs, setTrs] = useState([]);
    const [cons, setCons] = useState([]);
    const [tests, setTests] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [index, setIndex] = useState({});
    let typeTimeout;

    const updateStateThings = async (testi, conta) => {
        const updatedJson = await fetch(`${BASE_API_URL}/api/cms/update`, {
            method: "PUT",
            body: JSON.stringify({
                testimonials: testi,
                contacts: conta,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updated = await updatedJson.json();

        if (updated.done) {
            notyf.success("Changes Saved");
            return true;
        } else notyf.error("Some Error occurred");
    };

    const updateCall = async (bod) => {
        const updatedJson = await fetch(`${BASE_API_URL}/api/cms/update`, {
            method: "PUT",
            body: JSON.stringify(bod),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updated = await updatedJson.json();

        if (updated.done) notyf.success("Changes Saved");
        else notyf.error("Some error occurred");
    };

    const upload = (e, main) => {
        const file = e.target.files[0];
        const ext = file.name.split(".").pop().toLowerCase();

        notyf.success("Uploading image...");

        if (ext === "jpg" || ext === "png" || ext === "jpeg") {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                const b64 = reader.result.split("base64,")[1];
                const uploadedJson = await fetch(
                    `${BASE_API_URL}/api/image/upload`,
                    {
                        method: "POST",
                        body: JSON.stringify({ b64: b64 }),
                        headers: {
                            "Content-type": "application/json",
                        },
                    }
                );
                const uploaded = await uploadedJson.json();

                if (uploaded.link) {
                    if (main) {
                        setMainImg(uploaded.link);
                        let body = {};
                        body.header = {
                            name: document
                                .querySelector("input[name='head-name']")
                                .value.trim(),
                            sub: document
                                .querySelector("input[name='head-sub']")
                                .value.trim(),
                            desc: document
                                .querySelector("textarea[name='head-desc']")
                                .value.trim(),
                            mainImg: uploaded.link,
                        };

                        const updatedJson = await fetch(
                            `${BASE_API_URL}/api/cms/update`,
                            {
                                method: "PUT",
                                body: JSON.stringify(body),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }
                        );
                        const updated = await updatedJson.json();

                        if (updated.done) notyf.success("Changes Saved");
                        else notyf.error("Some error occurred");
                    } else {
                        document
                            .querySelector("#test-add-img")
                            .setAttribute("src", uploaded.link);
                    }
                } else {
                    notyf.error("Error in uploading image");
                }
            };
            reader.onerror = () => {
                notyf.error("File could not be uploaded");
            };
        } else {
            notyf.error("File format not supported");
        }
    };

    const addTr = () => {
        const tr = document.querySelector("#add-tr").value.trim();
        if (tr) {
            document.querySelector("#add-tr").value = "";
            let body = {};
            body.training = {
                desc: document
                    .querySelector("textarea[name='training']")
                    .value.trim(),
                trs: [...trs, tr],
            };
            updateCall(body);
            setTrs([...trs, tr]);
        } else notyf.error("Please put in a value");
    };
    const removeTr = (trVal) => {
        let trList = trs.filter((tr) => tr !== trVal);
        let body = {};
        body.training = {
            desc: document
                .querySelector("textarea[name='training']")
                .value.trim(),
            trs: trList,
        };
        updateCall(body);
        setTrs(trList);
    };

    const addCon = () => {
        const con = document.querySelector("#add-con").value.trim();
        if (con) {
            document.querySelector("#add-con").value = "";
            let body = {};
            body.consultancy = {
                desc: document
                    .querySelector("textarea[name='consul']")
                    .value.trim(),
                cons: [...cons, con],
            };
            updateCall(body);
            setCons([...cons, con]);
        } else notyf.error("Please enter a value");
    };
    const removeCon = (conVal) => {
        let conList = cons.filter((con) => con !== conVal);
        let body = {};
        body.consultancy = {
            desc: document
                .querySelector("textarea[name='consul']")
                .value.trim(),
            cons: conList,
        };
        updateCall(body);
        setCons(conList);
    };

    const addTest = () => {
        const addTestDiv = document.querySelector(".add-test");

        const img = addTestDiv.querySelector("img").getAttribute("src");
        const name = addTestDiv
            .querySelector("input[name='test-add-name']")
            .value.trim();
        const test = addTestDiv.querySelector("textarea").value.trim();

        if (img !== "/assets/h.svg" && name !== "" && test !== "") {
            const newTest = {
                name,
                img,
                desc: test,
            };

            addTestDiv
                .querySelector("img")
                .setAttribute("src", "/assets/h.svg");
            addTestDiv.querySelector("input[name='test-add-name']").value = "";
            addTestDiv.querySelector("textarea").value = "";

            updateStateThings([...tests, newTest], contacts)
                ? setTests([...tests, newTest])
                : console.log("err");
        } else notyf.error("Please fill all fields");
    };
    const removeTest = (id) => {
        const testDiv = document.querySelector(`#t-${id}`);
        let name = testDiv.querySelector("input").value.trim();
        updateStateThings(
            tests.filter((test) => test.name !== name),
            contacts
        )
            ? setTests(tests.filter((test) => test.name !== name))
            : console.log("err");
    };

    const addContact = () => {
        const contactDiv = document.querySelector(".add-contact");
        const contactName = contactDiv.querySelector("select").value.trim();
        const contact = contactDiv.querySelector("input").value.trim();

        if (contact !== "") {
            contactDiv.querySelector("input").value = "";
            contactDiv.querySelector("select").value = "mail";
            const contactObj = {
                name: contactName,
                contact,
            };

            updateStateThings(tests, [...contacts, contactObj])
                ? setContacts([...contacts, contactObj])
                : console.log("err");
        } else notyf.error("Please fill in the field");
    };
    const removeContact = (contactPass) => {
        updateStateThings(
            tests,
            contacts.filter(
                (contact) => contact.contact !== contactPass.contact
            )
        )
            ? setContacts(
                  contacts.filter(
                      (contact) => contact.contact !== contactPass.contact
                  )
              )
            : console.log("err");
    };

    const updateCMS = async (type) => {
        let body = {};

        if (type === "head") {
            body.header = {
                name: document
                    .querySelector("input[name='head-name']")
                    .value.trim(),
                sub: document
                    .querySelector("input[name='head-sub']")
                    .value.trim(),
                desc: document
                    .querySelector("textarea[name='head-desc']")
                    .value.trim(),
                mainImg: mainImg,
            };
        } else if (type === "about") {
            body.about = document
                .querySelector("textarea[name='about']")
                .value.trim();
        } else if (type === "training") {
            body.training = {
                desc: document
                    .querySelector("textarea[name='training']")
                    .value.trim(),
                trs,
            };
        } else if (type === "consul") {
            body.consultancy = {
                desc: document
                    .querySelector("textarea[name='consul']")
                    .value.trim(),
                cons,
            };
        }

        updateCall(body);
    };
    const updateCMSTime = (e) => {
        if (e.target.value.trim()) {
            clearTimeout(typeTimeout);

            const type = e.target.getAttribute("name").split("-")[0];
            typeTimeout = setTimeout(() => {
                updateCMS(type);
            }, 2000);
        } else notyf.error("Field cannot be blank");
    };

    useEffect(() => {
        const initialFetch = async () => {
            const dataJson = await fetch(`${BASE_API_URL}/api/cms`);
            const data = await dataJson.json();
            const index = data.index;

            setIndex(index);
            setTests(index.testimonials);
            setContacts(index.contacts);
            setMainImg(index.header.mainImg);
            setCons(index.consultancy.cons);
            setTrs(index.training.trs);
        };
        initialFetch();
    }, []);

    return (
        <>
            <main className="relative">
                <div className="main-container px-72 pt-16 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                    <section className="w-full flex justify-between items-center ph:flex-col-reverse">
                        <div className="header-left flex flex-col w-1/2 tab:w-2/3 ph:w-full ph:text-center">
                            <InputBox
                                text={index.header ? index.header.name : ""}
                                supreme={true}
                                name="head-name"
                                onChange={(eve) => updateCMSTime(eve)}
                            ></InputBox>
                            <InputBox
                                text={index.header ? index.header.sub : ""}
                                name="head-sub"
                                onChange={(eve) => updateCMSTime(eve)}
                            ></InputBox>
                            <TextBox
                                name="head-desc"
                                onChange={(eve) => updateCMSTime(eve)}
                                text={index.header ? index.header.desc : ""}
                            ></TextBox>
                        </div>
                        <div className="header-right w-1/2 flex flex-col justify-center pl-44 tab:w-1/3 tab:pl-12 ph:pl-0 ph:w-full ph:items-center ph:mb-6">
                            <img
                                src={mainImg}
                                alt="Kishore Das"
                                className="w-5/6 h-5/6 mb-6 lap:w-9/12 lap:h-9/12 tab:w-full tab:h-full tab:mb-3 ph:w-2/3 ph:h-2/3"
                            />
                            <input
                                type="file"
                                onChange={(eve) => upload(eve, true)}
                                className="hidden"
                                id="main-img"
                                name="main-img"
                                accept="image/*"
                            />
                            <label
                                htmlFor="main-img"
                                className="w-5/6 bg-blue rounded-xl text-white py-3 flex justify-center items-center cursor-pointer transition-all hover:bg-darkBlue"
                            >
                                Upload New
                            </label>
                        </div>
                    </section>
                    <section id="About">
                        <Heading text="About" />
                        <TextBox
                            text={index.about ? index.about : ""}
                            name="about"
                            onChange={(eve) => updateCMSTime(eve)}
                        />
                    </section>
                    <section id="Training">
                        <Heading text="Training" />
                        <TextBox
                            text={index.training ? index.training.desc : ""}
                            name="training"
                            onChange={(eve) => updateCMSTime(eve)}
                        ></TextBox>
                        <div className="trs mt-10">
                            <div className="tr flex w-1/2 justify-center items-center">
                                <InputBox
                                    placeholder="Add categories"
                                    id="add-tr"
                                ></InputBox>
                                <FaPlusCircle
                                    className="text-2xl ml-6 text-blue cursor-pointer"
                                    onClick={addTr}
                                />
                            </div>
                            {trs.map((tr) => {
                                return (
                                    <div
                                        className="tr flex w-1/2 justify-center items-center"
                                        key={tr}
                                    >
                                        <InputBox
                                            text={tr}
                                            readonly={true}
                                        ></InputBox>
                                        <FaTrashAlt
                                            className="text-2xl ml-6 text-red-400 cursor-pointer"
                                            onClick={() =>
                                                removeTr(
                                                    document
                                                        .querySelector(
                                                            `input[value="${tr}"]`
                                                        )
                                                        .value.trim()
                                                )
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section id="Consultancy">
                        <Heading text="Consultancy" />
                        <TextBox
                            className="mt-7 mb-12 text-xl"
                            name="consul"
                            onChange={(eve) => updateCMSTime(eve)}
                            text={
                                index.consultancy ? index.consultancy.desc : ""
                            }
                        ></TextBox>
                        <div className="cons mt-10">
                            <div className="con flex w-1/2 justify-center items-center">
                                <InputBox
                                    placeholder="Add categories"
                                    id="add-con"
                                ></InputBox>
                                <FaPlusCircle
                                    className="text-2xl ml-6 text-blue cursor-pointer"
                                    onClick={addCon}
                                />
                            </div>
                            {cons.map((con) => {
                                return (
                                    <div
                                        className="con flex w-1/2 justify-center items-center"
                                        key={con}
                                    >
                                        <InputBox
                                            text={con}
                                            readonly={true}
                                        ></InputBox>
                                        <FaTrashAlt
                                            className="text-2xl ml-6 text-red-400 cursor-pointer"
                                            onClick={() =>
                                                removeCon(
                                                    document
                                                        .querySelector(
                                                            `input[value="${con}"]`
                                                        )
                                                        .value.trim()
                                                )
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section id="Testimonials">
                        <Heading text="Testimonials" />
                        <div className="add-test flex w-full mt-12">
                            <div className="test-img w-1/3 h-full flex flex-col items-center justify-center">
                                <img
                                    src="/assets/h.svg"
                                    id="test-add-img"
                                    alt="Kishore Das"
                                    className="w-4/6 h-full mb-6 rounded-lg lap:w-9/12 lap:h-9/12 tab:w-full tab:h-full tab:mb-3 ph:w-2/3 ph:h-2/3"
                                />
                                <input
                                    type="file"
                                    onChange={(eve) => upload(eve, false)}
                                    className="hidden"
                                    id="test-img"
                                    name="test-img"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="test-img"
                                    className="w-4/6 bg-blue rounded-xl text-white py-3 flex justify-center items-center cursor-pointer transition-all hover:bg-darkBlue"
                                >
                                    Upload New
                                </label>
                            </div>
                            <div className="test-content flex flex-col w-2/3">
                                <div className="test-inp flex w-full justify-center items-center">
                                    <InputBox
                                        placeholder="Name & Designation"
                                        name="test-add-name"
                                        id="test-add-name"
                                    ></InputBox>
                                    <FaPlusCircle
                                        className="text-2xl ml-6 text-blue cursor-pointer"
                                        onClick={addTest}
                                    />
                                </div>
                                <TextBox
                                    placeholder="Testimonial"
                                    height="20vh"
                                    id="test-add-desc"
                                ></TextBox>
                            </div>
                        </div>

                        {tests.map((test) => {
                            return (
                                <div
                                    className="test flex w-full my-10"
                                    key={`t-${
                                        test.img.split("/").pop().split(".")[0]
                                    }`}
                                    id={`t-${
                                        test.img.split("/").pop().split(".")[0]
                                    }`}
                                >
                                    <div className="test-img w-1/3 flex flex-col items-center justify-center">
                                        <img
                                            src={test.img}
                                            alt="Kishore Das"
                                            className="w-5/6 h-full mb-6 rounded-lg lap:w-9/12 lap:h-9/12 tab:w-full tab:h-full tab:mb-3 ph:w-2/3 ph:h-2/3"
                                        />
                                    </div>
                                    <div className="test-content flex flex-col w-2/3">
                                        <div className="test-inp flex w-full justify-center items-center">
                                            <InputBox
                                                text={test.name}
                                                readonly={true}
                                            ></InputBox>
                                            <FaTrashAlt
                                                className="text-2xl ml-6 text-red-400 cursor-pointer"
                                                onClick={() =>
                                                    removeTest(
                                                        test.img
                                                            .split("/")
                                                            .pop()
                                                            .split(".")[0]
                                                    )
                                                }
                                            />
                                        </div>
                                        <TextBox
                                            text={test.desc}
                                            readonly={true}
                                            height="20vh"
                                        ></TextBox>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                    <section id="Contact" className="pb-44 tab:pb-20">
                        <Heading text="Contact" />
                        <br />
                        <div className="add-contact flex w-2/3 justify-center items-center">
                            <select
                                className={
                                    "border-slate-400 rounded-xl w-1/2 px-6 py-4 my-2 mr-10"
                                }
                                style={{ borderWidth: "1px" }}
                            >
                                <option value="mail">EMAIL</option>
                                <option value="phone">PHONE</option>
                                <option value="linkedin">LINKEDIN</option>
                            </select>
                            <InputBox
                                placeholder="Contact"
                                id="add-cont-inp"
                            ></InputBox>
                            <FaPlusCircle
                                className="text-4xl ml-6 text-blue cursor-pointer"
                                onClick={addContact}
                            />
                        </div>
                        {contacts.map((contact) => {
                            return (
                                <div
                                    className="contact flex w-2/3 justify-center items-center"
                                    key={contact.contact}
                                >
                                    <InputBox
                                        text={contact.name.toUpperCase()}
                                        readonly={true}
                                        width="w-1/2"
                                        margin="mr-10"
                                    ></InputBox>
                                    <InputBox
                                        text={contact.contact}
                                        readonly={true}
                                    ></InputBox>
                                    <FaTrashAlt
                                        className="text-4xl ml-6 text-red-400 cursor-pointer"
                                        onClick={() => removeContact(contact)}
                                    />
                                </div>
                            );
                        })}
                    </section>
                </div>
            </main>
        </>
    );
};

export default IndexCMS;
