import { FaEnvelope } from "react-icons/fa";
import Heading from "../Heading";

const Header = () => {
    return (
        <section className="w-full flex justify-between items-center ph:flex-col-reverse">
            <div className="header-left flex flex-col w-1/2 tab:w-2/3 ph:w-full ph:text-center">
                <Heading text="Kishore Kumar Das" />
                <p className="font-medium text-2xl mb-8 blap:text-xl lap:text-lg ph:text-base">
                    Independant management Consultant
                </p>
                <p className="pr-16 text-lg blap:text-base blap:pr-4 lap:text-sm lap:pr-0 tab:text-xs ph:text-justify">
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
            <div className="header-right w-1/2 flex flex-col justify-center pl-44 tab:w-1/3 tab:pl-12 ph:pl-0 ph:w-full ph:items-center ph:mb-6">
                <img
                    src="/assets/kishoreji.png"
                    alt="Kishore Das"
                    className="w-5/6 h-5/6 mb-6 lap:w-9/12 lap:h-9/12 tab:w-full tab:h-full tab:mb-3 ph:w-2/3 ph:h-2/3"
                />
                <p className="text-slate-500 text-xl flex items-center lap:text-base tab:text-sm">
                    <FaEnvelope />
                    <i className="ml-3">kishore.unitol.com</i>
                </p>
            </div>
        </section>
    );
};

export default Header;
