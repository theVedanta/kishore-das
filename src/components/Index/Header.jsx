import { FaEnvelope } from "react-icons/fa";

const Header = () => {
    return (
        <section className="w-full flex justify-between items-center">
            <div className="header-left flex flex-col w-1/2">
                <h1 className="text-6xl text-blue font-serif mb-4">
                    Kishore Kumar Das
                </h1>
                <p className="font-medium text-2xl mb-8">
                    Independant management Consultant
                </p>
                <p className="pr-16 text-lg">
                    An alumni of XLRI 1990 batch, and BE (Production) from BIT,
                    MESRA with over 30 years of experience in HR, IR and Total
                    Quality Management areas.
                    <br />
                    <br />
                    Worked in Tata Steel in both HR and TQM area from 1990 to
                    2001. Worked in Hero Corp (Hero Honda) in Corporate HR,
                    heading Learning and Development function from 2001 to 2000
                    and as a plant HR head from 2015 to 2006. Worked with DCM
                    ltd as VP (HR & TQM) from 2017 to 201
                </p>
            </div>
            <div className="header-right w-1/2 flex flex-col justify-center pl-44">
                <img
                    src="/assets/kishoreji.png"
                    alt="Kishore Das"
                    className="w-5/6 h-5/6 mb-6"
                />
                <p className="text-slate-500 text-xl flex items-center">
                    <FaEnvelope />
                    <i className="ml-3">kishore.unitol.com</i>
                </p>
            </div>
        </section>
    );
};

export default Header;
