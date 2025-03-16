import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropright,
  IoIosArrowDropleft,
  IoIosContacts,
} from "react-icons/io";
import { GrLinkedin, GrMoney } from "react-icons/gr";
import {
  FaBook,
  FaCheckCircle,
  FaFacebook,
  FaFileSignature,
  FaHandHoldingMedical,
  FaHandHoldingUsd,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiContactsFill, RiFileSettingsLine } from "react-icons/ri";
import { IoDocumentText, IoFingerPrintOutline } from "react-icons/io5";
import { BsFillCreditCardFill } from "react-icons/bs";

import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { PiWarningBold } from "react-icons/pi";

const BlockPage = () => {
  const col1 = [
    "WHY HAVE THESE PROJECTS BEEN RECRUITED?",
    "DOES EACH PROJECT HAVE A DIFFERENT TARGETED POPULATION?",
    "HOW ARE THESE PROJECTS HELPING THOSE IN NEED?",
    "WHAT KIND OF AN IMPACT HAVE YOUR PROJECTS MADE TILL DATE?",
  ];
  const col2 = [
    "WHAT HAPPENS IF A PROJECT DOES NOT REACH ITS GOAL?",
    "WHO FUNDS THE PROJECTS?",
    "HOW LONG DOES A PROJECT APPEAR ON YOUR WEBSITE?",
    "HOW WILL I KNOW ABOUT THE LATEST PROJECTS?",
    "DO I NEED TO HAVE A SPECIFIC QUALIFICATION IN ORDER TO BE A MENTOR AT ONE OR MORE OF YOUR TUITION CENTERS?",
  ];

  const [open, setOpen] = useState(null);
  const [open1, setOpen1] = useState(null);
  const handleClick = (index) => {
    setOpen(open === index ? null : index);
  };
  const handleClick1 = (index) => {
    setOpen1(open1 === index ? null : index);
  };

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const [activeTab, setActiveTab] = useState("current");

  const consultations = {
    current: [
      {
        title:
          'Share your suggestions and ideas to us to support the Federal Tax Authority aligning with the "Zero Government Bureaucracy" program',
        date: "22/07/2025",
      },
      {
        title:
          'FAHR: Consultation about encouraging participation in the Recruitment Platform "Estiqtab"',
        date: "31/05/2025",
      },
      {
        title: "My school.. My identity Competition",
        date: "15/05/2025",
      },
    ],
    planned: [],
    closed: [],
  };

  const requirements = [
    "Completed applications for the opening of a Branch Office",
    "The trade name reservation certificate",
    "The passport copies of the Company's Director(s)",
    "The board resolution of the Parent Company for opening a Branch Office in Dubai UAE.",
    "The Memorandum and Articles of Association (MAA) by the parent company.",
    "A copy of the Certificate of Incorporation of the parent company.",
    "A no-objection letter from the parent company.",
    "A power of attorney for the Director of the Branch Office.",
  ];

  const initiatives = [
    {
      title: "Museum of the Future",
      image: "/images/i5.png",
    },
    {
      title: "35 of UAE's leading space projects",
      image: "/images/i9.png",
    },
    {
      title: "Dubai Centre for Artificial Intelligence",
      image: "/images/i10.png",
    },
    {
      title: "Dubai Metaverse Assembly",
      image: "/images/i11.png",
    },
  ];
  const crises = [
    {
      id: 1,
      region: "Gaza",
      description:
        "We have reached more than 180,000 people in Gaza with critical services.",
      image: "/images/i12.png",
    },
    {
      id: 2,
      region: "Sudan",
      description:
        "Sudan is now facing the largest humanitarian crisis ever recorded",
      image: "/images/i12.png",
    },
    {
      id: 3,
      region: "Democratic Republic of Congo",
      description: "Conflict has forced almost 3 million to become displaced",
      image: "/images/i12.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      imageSrc: "/images/i7.png",
      caption:
        "Fajer really likes the color red and playing with her sister. The 6 year old from Baghdad participated in an Ahlan Simsim School Readiness program implemented by the IRC with support from the Iraqi Ministry of Education.",
    },
    {
      id: 2,
      imageSrc: "/images/i8.png",
      caption: "Second image description here.",
    },
    {
      id: 2,
      imageSrc: "/images/i10.png",
      caption: "Second image description here.",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentItem = galleryItems[currentIndex];

  const stories = [
    {
      category: "Aid Funding Crisis",
      title: "U.S. aid cuts put millions in peril",
      link: "#"
    },
    {
      category: "International Women's Day",
      title: "12 women activists and leaders making the world a better place",
      link: "#"
    },
    {
      category: "Healing Classrooms",
      title: "5 ways to support students during the holy month of Ramadan",
      link: "#"
    },
    {
      category: "Ukraine",
      title: "What's happening in Ukraine now, and how to help",
      link: "#"
    },
    {
      category: "Ukraine crisis",
      title: "Three years on: Ukrainians show what the war has taken from them",
      link: "#"
    },
    {
      category: "Emergency Watchlist",
      title: "What's happening in DRC, and how to help",
      link: "#"
    }
  ];

  return (
    <>
      {/* partners and sponsors */}
      <div className="container mx-auto px-40">
        <h1 className="text-center mt-20 text-4xl font-[400] font-mono">
          Partners and Sponsors
        </h1>

        <div className="mt-20">
          <Swiper
          className=""
            spaceBetween={10}
            slidesPerView={6}
            navigation={true}
            loop = {true}
            modules={[Navigation]}
          >
            <SwiperSlide >
              <div className="  h-32">
                <img
                  className="h-full w-full object-contain"
                  src="/images/1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/3.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/3.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="h-32 ">
                <img
                  className="h-full w-full object-contain"
                  src="/images/3.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Anual Ration */}
      <div className="container mx-auto flex items-center justify-center gap-14 mt-20">
        <div className=" rounded-l-xl overflow-hidden">
          <div className="bg-yellow-300 h-22 flex items-center justify-center ">
            <h1 className="text-gray-100 text-xl uppercase font-semibold">
              make a donation
            </h1>
          </div>
          <div className="h-[500px] w-[450px] object-cover">
            <img className="h-full w-full" src="/images/i1.png" alt="" />
          </div>
          <div className="bg-gray-500 h-22 flex items-center justify-center ">
            <h1 className="text-gray-200 text-xl uppercase font-semibold">
              get involved{" "}
            </h1>
          </div>
        </div>
        <div className=" h-[660px] w-[550px]  ">
          <h1 className=" capitalize text-[40px] leading-14 font-mono">
            annual ration distribution united mercy kits
          </h1>
          <p className="pt-6 text-xl  leading-9  tracking-wide">
            The United Mercy Kits campaign is one of TUFs oldest and most
            exciting annual initiatives. Each year, TUF creates a channel for
            the obligatory and voluntary charities of the Muslim Communities
            across the country to reach the most deserving beneficiaries with
            utmost diligence. Wholesome Ration Kits containing essential
            groceries are curated, that ensure a family of 5 eat nutritious,
            wholesome meals for an entire month. Our kits reach beneficiaries
            across Bangalore, Tumkur, Ladakh and Bihar.
          </p>
          <button className="uppercase mt-20 text-sm font-stretch-200% tracking-widest cursor-pointer text-lime-600 font-bold">

            Know more
          </button>

        </div>
      </div>
      {/* common question */}
      
      <div className="container mx-auto px-50">
        <h1 className="text-center mt-10 text-[40px]  font-semibold font-serif tracking-wider ">
          Common Questions
        </h1>

        <div className="lg:flex items-start justify-center mt-20 gap-[5%] ">
          <div className=" lg:w-[45%]">
            {col1.map((question, index) => (
              <div
                key={index}
                className="border border-gray-300 overflow-hidden mb-8"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-[500]  hover:bg-gray-100 text-sm tracking-wide flex-wrap"
                  onClick={() => handleClick(index)}
                >
                  <h1 className="w-[85%]">{question}</h1>
                  {open === index ? (
                    <Minus
                      className=" bg-black text-white rounded-4xl text-sm"
                      size={16}
                    />
                  ) : (
                    <Plus
                      className=" bg-black text-white rounded-4xl  text-sm"
                      size={16}
                    />
                  )}
                </button>
                {open === index && (
                  <div className="p-6  bg-white">
                    This is the answer to the question.
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className=" lg:w-[45%]">
            {col2.map((question, index) => (
              <div
                key={index}
                className="border border-gray-300 overflow-hidden mb-8"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-[500]  hover:bg-gray-100 text-sm tracking-wide flex-wrap"
                  onClick={() => handleClick1(index)}
                >
                  <h1 className="w-[85%]">{question}</h1>
                  {open1 === index ? (
                    <Minus
                      className=" bg-black text-white rounded-4xl text-sm"
                      size={16}
                    />
                  ) : (
                    <Plus
                      className=" bg-black text-white rounded-4xl  text-sm"
                      size={16}
                    />
                  )}
                </button>
                {open1 === index && (
                  <div className="p-6  bg-white">
                    This is the answer to the question.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Social impact */}
      <div className=" container mx-auto px-20">
        <h1 className="text-center mt-16 text-5xl font-[600] font-sans">
          Social
          <span className="text-orange-500"> Impact</span>
        </h1>

        <p className="text-center text-lg font-medium px-20 mt-8 leading-8">
          Your active support has significantly impacted the community and
          helped uplift individuals from economically backward sections of
          society and underprivileged backgrounds.
        </p>

        <div className="flex justify-between items-center  mt-14 px-20">
          <div className="flex flex-col  items-center  gap-3">
            <div className="h-50 rounded-[50%] overflow-hidden">
              <img className="h-full" src="/images/i2.png" alt="" />
            </div>
            <h1 className="text-orange-600 text-4xl font-semibold tracking-wider">70,000+</h1>
            <h1 className="text-lg font-medium ">Upskillded and Employed</h1>
          </div>
          <div className="flex flex-col  items-center  gap-3">
            <div className="h-50 rounded-[50%] overflow-hidden">
              <img className="h-full" src="/images/i3.png" alt="" />
            </div>
            <h1 className="text-orange-600 text-4xl font-semibold tracking-wider">100+</h1>
            <h1 className="text-lg font-medium ">No. of Recruiters</h1>
          </div>
          <div className="flex flex-col  items-center  gap-3">
            <div className="h-50 rounded-[50%] overflow-hidden">
              <img className="h-full" src="/images/i4.png" alt="" />
            </div>
            <h1 className="text-orange-600 text-4xl font-semibold tracking-wider">4+</h1>
            <h1 className="text-lg font-medium ">No. of Sectors</h1>
          </div>
         
        </div>
      </div>
      {/* get involded */}
      <div className="container mx-auto px-45">
        <h1 className="text-center mt-10 text-5xl font-[600] font-sans">
          Get
          <span className="text-orange-500"> Involded</span>
        </h1>

        <div className="flex justify-between mt-14">
          <h1 className="text-4xl font-semibold">Donation Compaigns</h1>
          <a href="" className="font-bold text-lg">
            More...
          </a>
        </div>

        <div className="mt-20 flex justify-evenly  gap-8 overflow-hidden relative overflow-x-scroll scrollbar-hide " ref={scrollRef}>
          <div className="w-92 pt-5 border-dashed border-1 rounded-2xl overflow-hidden flex flex-col items-center justify-between shrink-0">
            <div className="overflow-hidden rounded-t-2xl">
              <img className="w-full" src="/images/i5.png" alt="" />
            </div>
            <h1 className="text-2xl font-semibold my-3 ">Sponsor a Youth</h1>
            <p className="px-5 font-medium">
              Donate Now Your contribution sponsors training and skill
              development of a Youth.
            </p>
            <a
              className="bg-orange-500 w-full mt-4 text-center p-3 text-white text-2xl font-medium"
              href=""
            >
              Donate Now
            </a>
          </div>
          <div className="w-92 pt-5 border-dashed border-1 rounded-2xl overflow-hidden flex flex-col items-center justify-between shrink-0">
            <div className="overflow-hidden rounded-t-2xl">
              <img className="w-full" src="/images/i5.png" alt="" />
            </div>
            <h1 className="text-2xl font-semibold my-3 ">Corpus Fund</h1>
            <p className="px-5 font-medium">
            UNNATI needs your contributions to keep the hope burning bright students.
            </p>
            <a
              className="bg-orange-500 w-full mt-4 text-center p-3 text-white text-2xl font-medium"
              href=""
            >
              Donate Now
            </a>
          </div>
          <div className="w-92 pt-5 border-dashed border-1 rounded-2xl overflow-hidden flex flex-col items-center justify-between shrink-0">
            <div className="overflow-hidden rounded-t-2xl">
              <img className="w-full" src="/images/i5.png" alt="" />
            </div>
            <h1 className="text-2xl font-semibold my-3 ">Sponsoring a Scholarship</h1>
            <p className="px-5 font-medium">
            Funding an Annual Scholarship ensures that a deserving student will be recognized and rewarded.
            </p>
            <a
              className="bg-orange-500 w-full mt-4 text-center p-3 text-white text-2xl font-medium"
              href=""
            >
              Donate Now
            </a>
          </div>
          <div className="w-92 pt-5 border-dashed border-1 rounded-2xl overflow-hidden flex flex-col items-center justify-between shrink-0">
            <div className="overflow-hidden rounded-t-2xl">
              <img className="w-full" src="/images/i5.png" alt="" />
            </div>
            <h1 className="text-2xl font-semibold my-3 ">Sponsor a Youth</h1>
            <p className="px-5 font-medium">
              Donate Now Your contribution sponsors training and skill
              development of a Youth.
            </p>
            <a
              className="bg-orange-500 w-full mt-4 text-center p-3 text-white text-2xl font-medium"
              href=""
            >
              Donate Now
            </a>
          </div>
        </div>
        <button className=" absolute right-[16%] top-[50%] z-200 "   onClick={scrollRight}>
          <IoIosArrowDropright className="text-6xl text-orange-600" />
        </button>
      </div>
      {/* UAE nation brand */}
      <div className="container mx-auto flex items-center justify-evenly mt-20">
        <div className="h-92">
          <img className="h-full" src="/images/i6.png" alt="" />
        </div>
        <div className="h-92 flex flex-col  justify-between w-112">
          <h1 className="text-2xl font-medium">UAE Nation Brand</h1>
          <p className="text-lg ">
            People all over the world voted for the '7 Lines' design to be the
            UAE's logo for the next 50 years. The logo represents the seven
            emirates and the seven founding fathers, and complements the slogan
            'Make it Happen'. The UAE Government calls on all entities to use
            this logo in their initiatives and events to convey the UAE's story
            to the world.
          </p>
          <a className="rounded-4xl border-1 w-52 p-3 text-center" href="">
            Learn more
          </a>
        </div>
      </div>
      {/* Service statistics */}
      <div className="container mx-auto mt-20 flex items-center justify-evenly">
        <div className="w-1/3">
          <h1 className="text-2xl font-semibold mb-4">Service statistics</h1>
          <p className="text-lg">
            The UAE provides more than 6,000 federal and local digital services.
            At the federal level, there are 1,913 federal digital services. They
            can be classified as follows:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-1/3  ">
          <div>
            <GrMoney className="text-3xl text-yellow-950" />
            <h1 className="text-3xl font-semibold text-yellow-900">1,669</h1>
            <h1 className="text-lg leading-6  font-semibold">
              Transaction Services
            </h1>
          </div>
          <div>
            <FaHandHoldingUsd className="text-3xl text-yellow-950" />
            <h1 className="text-3xl font-semibold text-yellow-900">82</h1>
            <h1 className="text-lg leading-6  font-semibold">
              Informational Services
            </h1>
          </div>
          <div>
            <FaHandHoldingUsd className="text-3xl text-yellow-950" />
            <h1 className="text-3xl font-semibold text-yellow-900">54</h1>
            <h1 className="text-lg leading-6  font-semibold">
              Commerical Services
            </h1>
          </div>
          <div>
            <FaHandHoldingMedical className="text-3xl text-yellow-950" />
            <h1 className="text-3xl font-semibold text-yellow-900">71</h1>
            <h1 className="text-lg leading-6  font-semibold">
              Social Services
            </h1>
          </div>
          <div>
            <FaBook className="text-3xl text-yellow-950" />
            <h1 className="text-3xl font-semibold text-yellow-900">37</h1>
            <h1 className="text-lg leading-6  font-semibold">
              Seizural Services
            </h1>
          </div>
          <div>
            <RiFileSettingsLine className="text-3xl text-yellow-950" />
            <h1 className="text-3xl font-semibold text-yellow-900">118</h1>
            <h1 className="text-lg leading-6  font-semibold">
              Priority Services
            </h1>
          </div>
      
        </div>
      </div>
      {/* UAE Pass */}
      <div className="container mx-auto mt-10 px-32">
        <h1 className="text-3xl font-semibold">UAE Pass</h1>
        <p className="mt-3 text-lg">
          In order to use some of these digital services, you must have an
          account on UAE PASS. Learn how to register on UAE PASS.
        </p>
        <p className="mt-3 text-lg">By registering on UAE Pass, you can:</p>

        <div className="flex flex-wrap items-center justify-start gap-10 mt-16 ">
          <div className="border-1 border-gray-300 w-72 h-62 p-8 flex flex-col justify-evenly items-center">
            <IoFingerPrintOutline className="text-5xl text-yellow-900 " />

            <p className="px-4 text-lg text-center">
              Log in with face recognition technology (facial ID)
            </p>
          </div>
          <div className="border-1 border-gray-300 w-72 h-62 p-8 flex flex-col justify-evenly items-center">
            <BsFillCreditCardFill className="text-5xl text-yellow-900 " />

            <p className="px-3 text-lg text-center">
              Sign in to services through a single mobile-based login{" "}
            </p>
          </div>
          <div className="border-1 border-gray-300 w-72 h-62 p-8 flex flex-col justify-evenly items-center">
            <FaFileSignature className="text-5xl text-yellow-900 " />

            <p className="px-4 text-lg text-center">
              Sign documents digitally{" "}
            </p>
          </div>
          <div className="border-1 border-gray-300 w-72 h-62 p-8 flex flex-col justify-evenly items-center">
            <IoDocumentText className="text-5xl text-yellow-900 " />

            <p className="px-4 text-lg text-center">
              Store and share digital documents
            </p>
          </div>
          <div className="border-1 border-gray-300 w-72 h-62 p-8 flex flex-col justify-evenly items-center">
            <IoIosContacts className="text-5xl text-yellow-900 " />

            <p className="px-4 text-lg text-center">
              Update your profile information{" "}
            </p>
          </div>
          <div className="border-1 border-gray-300 w-72 h-62 p-8 flex flex-col justify-evenly items-center">
            <RiContactsFill className="text-5xl text-yellow-900 " />

            <p className="px-4 text-lg text-center">
              Update your address records{" "}
            </p>
          </div>
        </div>
      </div>
      {/* personalized and cohensive user experience */}
      <div className="container mx-auto mt-20 flex items-start justify-center gap-20">
        <div className="w-[40%] flex flex-col gap-10">
          <h1 className="text-3xl font-medium">Personalised and cohesive user experience</h1>
          <p className="text-[17px] ">
            The UAE has introduced a Design Language System (DLS) and other
            guidelines, principles and policies for designing government portals
            and publishing content on them. The DLS ensures that users have a
            smooth experience while browsing. One of the key features of this
            portal is the ability for users to customise and personalise their
            experience, making it more efficient and user-friendly. A
            personalised dashboard enables users to access, store, and review
            their data, interactions and transactions on the portal. Specific
            service transactions initiated through the portal can be saved and
            accessed later. Users can customise or personalise the portal to
            mark their favourite or most used online services.
          </p>

          <p className="text-[17px]">Read how to use government eServices through this guide.</p>
          <p className="text-[17px]">
            Services are accessible for people of determination. Read about live
            support about public services for people of determination.
          </p>
          <a className="rounded-4xl border-1 w-52 p-3 text-center" href="">
            Learn more
          </a>
        </div>
        <div className="w-[30%] overflow-hidden mt-5">
          <img className="w-full" src="/images/i7.png" alt="" />
        </div>
      </div>

      {/* Consultations */}
      <div className="container mx-auto mt-20 px-30 ">
        <h1 className=" text-4xl">Consultations</h1>

        <div className="border-b border-gray-400 mt-10 mx-auto">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setActiveTab("current")}
              className={`py-4 px-6 w-1/3 text-lg ${
                activeTab === "current" ? "border-b-2 border-green-700" : ""
              }`}
            >
              Current consultations
            </button>
            <button
              onClick={() => setActiveTab("planned")}
              className={`py-4 px-6 w-1/3 text-lg ${
                activeTab === "planned" ? "border-b-2 border-green-700" : ""
              }`}
            >
              Planned consultations
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`py-4 px-6 w-1/3 text-lg ${
                activeTab === "closed" ? "border-b-2 border-green-700" : ""
              }`}
            >
              Closed consultations
            </button>
          </div>
        </div>

        <div className="mt-8 border-b-1 pb-10 border-gray-400">
          {consultations[activeTab].map((consultation, index) => (
            <div key={index} className="flex justify-between py-2 text-lg">
              <div className="font-medium w-[75%]">{consultation.title}</div>
              <div className="text-gray-600">{consultation.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* video section */}

      <div className="container mx-auto mt-10 px-30">
        <h1 className="text-4xl font-bold mb-10">Videos</h1>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="w-full">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/eHPJNC0E0NU?si=i1j5es2ekJ5llOKJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className=" h-[400px] w-[500px]">
            <h3 className="text-4xl font-medium">COP28</h3>
            <p className="text-gray-700 mt-8 text-lg">
              The UAE will host the 28th Conference of the Parties to the UN
              Framework Convention on Climate Change (COP28) from November 30 to
              December 12, 2023 at Expo City Dubai to unite the world towards
              agreement on bold, practical and ambitious solutions to the most
              pressing global challenge of our time.
            </p>
            <p className="text-gray-700 mt-2 text-lg">
              COP28 is of particular significance as it marks the conclusion of
              the first Global Stocktake, a comprehensive assessment of the
              progress made in achieving the goals of the Paris Agreement.
            </p>
          </div>
        </div>
        <a href="" className="mt-20 flex justify-center ">
          <h1 className="border text-center  w-92 border-green-900 text-green-800 px-6 py-4 rounded-full hover:bg-green-600 hover:text-white transition ">
            More videos
          </h1>
        </a>
      </div>

      {/* living in dubai */}

      <div className="container mx-auto mt-20  flex items-center justify-center gap-10 ">
        <div className="w-[40%]">
          <h1 className="text-5xl font-semibold">Living in Dubai</h1>
          <p className="mt-8 text-lg">
            Citizens, residents, and anyone looking to move to Dubai will find
            an overview of key services required to make the most of the city's
            multicultural, business-friendly, and safe environment.
          </p>
          <p className="mt-4 text-lg">
            Within this section, information and services about aspects of life
            in Dubai, including health, education, family affairs, security, and
            activities, are available. Dubai.ae facilitates a seamless
            connection to specialized channels, ensuring direct and accurate
            access to essential details from government service providers.
          </p>
        </div>
        <div className="">
        <div className=" grid grid-cols-2 gap-4">
        <img src="/images/i8.png" alt="Family in Dubai" className="rounded-lg w-82 object-cover" />
        <img src="/images/i10.png" alt="Dubai Sunset" className="rounded-lg w-82 object-cover" />
        <img src="/images/i11.png" alt="Dubai Bridge" className="rounded-lg w-82 object-cover" />
        <img src="/images/i9.png" alt="Happy Family" className="rounded-lg w-82 object-cover" />
      </div>
        </div>
      </div>

      {/* footer */}

      <footer className="container mx-auto  mt-20 ">
        <div className="flex items-center justify-center mb-2">
          <div className="">
            <p className="text-lg font-bold">حكومــــة دبــــي</p>
            <p className="text-sm font-bold">GOVERNMENT OF DUBAI</p>
          </div>

          <div className="h-42">
            <img
              src="/images/1.png"
              alt="Government of Dubai Logo"
              className="h-full"
            />
          </div>
        </div>

        <div className="flex justify-center text-lg mb-8">
          <a href="#" className="px-2 hover:text-gray-900">
            Digital Dubai
          </a>
          <span className="border-r border-gray-900"></span>
          <a href="#" className="px-2 hover:text-gray-900">
            Open Data
          </a>
          <span className="border-r border-gray-900"></span>
          <a href="#" className="px-2 hover:text-gray-900">
            About Dubai.ae
          </a>
        </div>

        <div className="flex flex-wrap justify-center text-lg mb-8 ">
          <a href="#" className="px-2 hover:text-gray-700">
            Terms & Conditions
          </a>
          <span className="mx-1">·</span>
          <a href="#" className="px-2 hover:text-gray-700">
            Intellectual Property
          </a>
          <span className="mx-1">·</span>
          <a href="#" className="px-2 hover:text-gray-700">
            Website Policy
          </a>
          <span className="mx-1">·</span>
          <a href="#" className="px-2 hover:text-gray-700">
            Disclaimers
          </a>
        </div>

        <div className="flex justify-center mb-8 gap-6 text-4xl">
          <FaFacebook className="rounded-4xl text-black" />
          <FaSquareXTwitter className="rounded-4xl text-black" />
          <GrLinkedin className="rounded-4xl text-black" />
          <FaYoutube className="rounded-4xl text-black" />
          <FaInstagramSquare className="rounded-4xl text-black" />
        </div>

        <div className="text-center text-lg mb-2">
          <p>
            The site is best viewed in Chrome(Latest) , Edge (Latest) , Firefox
            ESR(Latest), Firefox , Safari
          </p>
          <p className="mt-1">
            For more details on browser compatibility,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here
            </a>
          </p>
        </div>

        <div className="text-center text-lg">
          <p>Page Last modified : 23-05-2024</p>
        </div>
      </footer>

      {/* document recurement list */}

      <div className="container mx-auto px-20 mt-20">
        <h2 className="text-3xl font-bold mb-6">
          For funding, providers usually ask for these documents:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-start">
              <div>

              
              <FaCheckCircle
                className="mr-3 mt-1 "
                size={24}
              />
              </div>
              <p className="text-xl">{requirement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Digitalizing Life in Dubai Section */}
      <div className="container mx-auto  mt-20">
        <h1 className="text-5xl font-bold text-center mb-10">
          Digitalizing Life in Dubai
        </h1>

        <p className="text-center text-lg max-w-5xl mx-auto mb-3 ">
          Key initiatives designed by using emerging technologies and the most
          advanced digital solutions to maintain people's wellbeing, conserve
          the natural resources, and boost the city's competitive position in
          the digital transformation journey.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            View Dubai's Strategy for Digital Transformation
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="flex justify-center gap-10">
          {initiatives.map((initiative, index) => (
            <div key={index} className="flex flex-col w-74">
              <div className="w-74 overflow-hidden mb-3">
                <img
                  src={initiative.image}
                  className="h-74 w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold">{initiative.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Crises the world can't ignore */}

      <div className="container mx-auto px-20  mt-15">
        <div className="flex items-center mb-8">
          <div className="w-[6px] h-16 bg-red-600 mr-4"></div>
          <h2 className="text-4xl font-extrabold font-sans tracking-tighter">
            Crises the world can't ignore
          </h2>
        </div>

        <div className="flex items-center justify-center gap-10">
          {crises.map((crisis) => (
            <div
              key={crisis.id}
              className="bg-white relative h-102 overflow-hidden"
            >
              <div className="h-64 overflow-hidden w-112">
                <img
                  src={crisis.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" absolute left-3 bottom-0 z-20 p-6 border-b-6 border-red-600 bg-gray-100 w-102 h-42">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-extrabold">{crisis.region}</h3>
                  <ChevronRight className="" />
                </div>
                <p className="text-xl">{crisis.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* crisis in sudan */}

      <div className="container mx-auto mt-20 flex items-center justify-center gap-10">
       
        <div className="w-152 h-154 relative">
          <div className="w-full h-92 overflow-hidden">
            <img className="w-full h-full" src="images/i12.png" alt="" />
          </div>
          <div className="bg-neutral-100 h-62 w-132 z-20 absolute bottom-14 left-10 flex flex-col p-8 gap-5 ">
            <p className="text-[16px] font-medium">Emergency Watchlist</p>
            <h1 className="text-3xl font-bold font-serif">Crisis in Sudan: What is happening and how to help</h1>
            <a href="">
              <span className="text-xl font-bold border-b-3 border-amber-400"> Learn more</span>
            </a>
          </div>
        </div>
        <div className="w-152 h-154 relative">
          <div className="w-full h-92 overflow-hidden">
            <img className="w-full h-full" src="images/i12.png" alt="" />
          </div>
          <div className="bg-neutral-100 h-62 w-132 z-20 absolute bottom-14 left-10 flex flex-col p-8 gap-5 ">
            <p className="text-[16px] font-medium">What we do</p>
            <h1 className="text-3xl font-bold font-serif">What is humanitarian aid and why is it important?</h1>
            <a href="">
              <span className="text-xl font-bold border-b-3 border-amber-400">Learn more about what we do</span>
            </a>
          </div>
        </div>
       
      </div>

      {/* crisis watch footer */}

      <footer className="container mx-auto mt-10  flex justify-center gap-10 items-start">
        <div className="w-112 ">
          <h3 className="flex items-center text-black font-bold mb-4 ">
            <PiWarningBold className="text-red-500 mr-2" />
            <span className="border-b-2 border-red-500">Crisis Watch</span>
          </h3>
          <div className="flex gap-14 mt-10 ">
            <ul className="text-black font-semibold space-y-2">
              <li>Who We Are</li>
              <li>Where We Work</li>
              <li>What We Do</li>
              <li>How to Help</li>
              <li>Latest</li>
            </ul>
            <ul className="text-black font-semibold space-y-2">
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Code of Conduct</li>
              <li>Ethics Hotline</li>
            </ul>
          </div>
        </div>

        <div className=" w-132 ">
          <h3 className="text-black font-medium text-lg">Our efficiency</h3>
          <div className="flex items-start gap-10 mt-10">
            <div className="relative w-26 h-26">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#fdbf00"
                  strokeWidth="4"
                  strokeDasharray="87 100"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                  strokeDasharray="7 100"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="4"
                  strokeDasharray="6 100"
                />
              </svg>
            </div>
            <ul className="text-lg list-disc">
              <li className="text-yellow-500">
                <span className="  font-bold text-black">87%</span>{" "}
                <span className="text-gray-800">Programme services</span>
              </li>
              <li className="font-bold ">
                7%
                <span className="text-gray-800 font-light">
                  Management and general
                </span>
              </li>

              <li className="text-gray-500">
                <span className="  font-bold text-black">6%</span>{" "}
                <span className="text-gray-800"> Fundraising</span>
              </li>
            </ul>
          </div>
          <button className="mr-58 bg-yellow-500 text-lg text-black font-bold p-4 px-8  rounded float-end">
            Donate ❤️
          </button>
        </div>
        <div className="  w-132">
          <h3 className="text-black font-medium mb-8 text-lg">Join our mailing list</h3>
          <p className="text-[16px] leading-7 mb-2">
            Get the latest news about the IRC's innovative programmes,
            compelling stories about our clients and how you can make a
            difference.{" "}
            <span className="font-bold cursor-pointer text-lg border-b-2 border-yellow-500">
              Subscribe
            </span>
          </p>
          <p className="mb-4 text-lg">Follow us </p>
          <div className="flex gap-8 text-3xl text-black">
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
            <FaLinkedinIn />
          </div>
        </div>
      </footer>

      {/* image slide */}

      <div className="max-w-5xl mx-auto mt-10">
        <div className="relative">
          <div className="w-full h-full">
            <img
              src={currentItem.imageSrc}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full object-cover"
            />
          </div>

          <button
            onClick={goToPrevious}
            className="cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 bg-amber-400 hover:bg-amber-500 text-black p-4 font-bold text-2xl"
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <button
            onClick={goToNext}
            className="cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 bg-amber-400 hover:bg-amber-500 text-black p-4 font-bold text-2xl"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>

        <div className=" py-2 text-gray-700 text-lg">{currentItem.caption}</div>

        <div className=" py-2 text-gray-700 font-semibold">
          {currentIndex + 1} of {galleryItems.length}
        </div>
      </div>
      {/* top storied */}
      <div className="container mx-auto px-4 mt-10">
        <div className="flex items-center mb-8">
          <div className="w-2 bg-yellow-400 h-12 mr-4"></div>
          <h2 className="text-4xl font-bold text-black">Top stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="border-t-2 border-gray-200"></div>
          <div className="border-t-2 border-gray-200"></div>
          {stories.map((story, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-6">
              <a href={story.link} className="block hover:opacity-80">
                <p className="text-gray-700 text-lg mb-1">{story.category}</p>
                <h3 className="text-xl font-extrabold text-black">{story.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlockPage;
