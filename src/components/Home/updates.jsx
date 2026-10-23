
import { Link } from "react-router-dom";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const marqueeData = [


    {
        text: "📄 Announced: Revised Discounted Registration Charges & Packages",
        link: 'https://drive.google.com/file/d/1LEjPegDNrkFHOj5td8Frlth1-rd0CsSk/view',
    },
    {
        text: "📝 Abstract (Offline)",
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScKrOOlkOrjsHshGfdogDvIaYP-fLNsObDgqRKO-SahDwu78Q/viewform',
    },
    {
        text: "📝 (Online)",
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf7ovkrs4-uP8cbwDxvo0jKvDjMw0AUdWMA9gOEqW_azohy3w/viewform',
    },
    {
        text: "📊 Registration",
        link: 'https://sites.google.com/iitrpr.ac.in/biomanthan/registration',
    },
    {
        text: "📄 Brochure",
        link: 'https://drive.google.com/file/d/1zrKp_3EkxiwVZ5HYezpAZk84GlgnWH8L/view',
    },

]
const Updates = () => {
    const [Speed, setSpeed] = useState(70);
    return (
        <>
            <div className="w-full flex justify-center items-center grid grid-col-1 bg-red-500" id="update bar" >
                <Marquee speed={Speed} className="w-full overflow-y-hidden">
                    {marqueeData.map((data, i) => (
                        <div className=" w-full flex flex-col  items-center justify-center p-2 px-24">
                            <Link
                                target="_blank"
                                to={data.link}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <span className="text-white font-bold font-roboto text-lg">{data.text}</span>
                            </Link>
                            {/* <span className="text-black">{data.name}</span> */}
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default Updates;
