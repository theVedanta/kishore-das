import InputBox from "../InputBox";
import TextBox from "../TextBox";
import Heading from "../Heading";
import { Notyf } from "notyf";
import BASE_API_URL from "../../BASE_API_URL";
import { useState } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";

const notyf = new Notyf();

const IndexCMS = () => {
    const [mainImg, setMainImg] = useState("/assets/kishoreji.png");
    const [trs, setTrs] = useState([]);
    const [cons, setCons] = useState([]);
    const [tests, setTests] = useState([]);

    const upload = (e, main) => {
        const file = e.target.files[0];
        const ext = file.name.split(".").pop();

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
                    if (main) setMainImg(uploaded.link);
                    else {
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
            setTrs([...trs, tr]);
        } else notyf.error("Please put in a value");
    };
    const removeTr = (trVal) => {
        let trList = trs.filter((tr) => tr !== trVal);
        setTrs(trList);
    };

    const addCon = () => {
        const con = document.querySelector("#add-con").value.trim();
        if (con) {
            document.querySelector("#add-con").value = "";
            setCons([...cons, con]);
        } else notyf.error("Please enter a value");
    };
    const removeCon = (conVal) => {
        let conList = cons.filter((con) => con !== conVal);
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

            setTests([...tests, newTest]);
        } else notyf.error("Please fill all fields");
    };
    const removeTest = () => {};

    return (
        <>
            <main className="relative">
                <div className="main-container px-72 pt-16 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                    <section className="w-full flex justify-between items-center ph:flex-col-reverse">
                        <div className="header-left flex flex-col w-1/2 tab:w-2/3 ph:w-full ph:text-center">
                            <InputBox
                                text={"Kishore Kumar Das"}
                                supreme={true}
                            ></InputBox>
                            <InputBox
                                text={"Independant management Consultant"}
                            ></InputBox>
                            <TextBox
                                text={`An alumni of XLRI 1990 batch, and BE
(Production) from BIT, MESRA with over 30 years of experience in HR, IR and Total Quality Management areas.

Worked in Tata Steel in both HR and TQM area from 1990 to 2001. Worked in Hero Corp (Hero Honda) in Corporate HR, heading Learning and Development function from 2001 to 2000 and as a plant HR head from 2015 to 2006. Worked with DCM ltd as VP (HR & TQM) from 2017 to 2019`}
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
                                className="w-5/6 bg-blue rounded-xl text-white py-3 flex justify-center items-center cursor-pointer"
                            >
                                Upload New
                            </label>
                        </div>
                    </section>
                    <section id="About">
                        <Heading text="About" />
                        <TextBox
                            text={`its sleep time in your room a light shine its your doom the danger the closed door theres the danger on the floor danger danger he is the boo a faint noise in your room your father is your doom keep yoour eyes wide open the door now is open danger the danger i am the boo father is here father father i am the boo father father i will kill you father father sadie kills sleep time in your room a light shine its your doom the danger the closed door theres the danger on the floor. floor danger. danger. he is the boo a faint noise in your room your father is your doom keep yoour eyes wide open the door now is open danger the danger i am the boo father is here father father i am the boo father father i will kill you father father sadie kills sleep time in your room a light shine its your doom the danger the closed door theres the danger on the floor danger danger he is the boo a faint noise in your room your father is your doom keep yoour eyes wide open. open the door now is.
`}
                        />
                    </section>
                    <section id="Training">
                        <Heading text="Training" />
                        <TextBox
                            text={`20+ years of training facilitation experience in the following areas`}
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
                            text={`20+ years of training facilitation experience in the following areas`}
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
                        <div className="add-test flex w-full">
                            <div className="test-img w-1/3 flex flex-col items-center justify-center">
                                <img
                                    src="/assets/h.svg"
                                    id="test-add-img"
                                    alt="Kishore Das"
                                    className="w-4/6 h-4/6 mb-6 rounded-lg lap:w-9/12 lap:h-9/12 tab:w-full tab:h-full tab:mb-3 ph:w-2/3 ph:h-2/3"
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
                                    className="w-4/6 bg-blue rounded-xl text-white py-3 flex justify-center items-center cursor-pointer"
                                >
                                    Upload New
                                </label>
                            </div>
                            <div className="test-content flex flex-col w-2/3">
                                <div className="test-inp flex w-full justify-center items-center">
                                    <InputBox
                                        placeholder="Name & Designation"
                                        name="test-add-name"
                                    ></InputBox>
                                    <FaPlusCircle
                                        className="text-2xl ml-6 text-blue cursor-pointer"
                                        onClick={addTest}
                                    />
                                </div>
                                <TextBox
                                    placeholder="Testimonial"
                                    height="20vh"
                                ></TextBox>
                            </div>
                        </div>

                        {tests.map((test) => {
                            return (
                                <div className="test flex w-full">
                                    <div className="test-img w-1/3 flex flex-col items-center justify-center">
                                        <img
                                            src={test.img}
                                            alt="Kishore Das"
                                            className="w-5/6 h-4/6 mb-6 rounded-lg lap:w-9/12 lap:h-9/12 tab:w-full tab:h-full tab:mb-3 ph:w-2/3 ph:h-2/3"
                                        />
                                    </div>
                                    <div className="test-content flex flex-col w-2/3">
                                        <div className="test-inp flex w-full justify-center items-center">
                                            <InputBox
                                                text={test.name}
                                            ></InputBox>
                                            <FaTrashAlt
                                                className="text-2xl ml-6 text-blue cursor-pointer"
                                                onClick={removeTest}
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
                </div>
            </main>
        </>
    );
};

export default IndexCMS;
