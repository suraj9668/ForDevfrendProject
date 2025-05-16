import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import image from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/about(1).jpg'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import i1 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/gallery1.jpg'
import i2 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/gallery3.jpg'
import i3 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/image.png'
import staf1 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/staff1.jpg'
import staf2 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/staff2.jpg'
import svg1 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/hair-styling-icon.svg'
import svg2 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/makeup-icon.svg'
import svg3 from '../assets/PMC Barbershop _ Premium Barber Services in Denton, TX_files/skincare-icon.svg'
import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";




function FirstShow() {

      const [isModalOpen, setIsModalOpen] = useState(false);

    const testimonials = [
        {
            quote: `I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!`,
            name: 'Mike Johnson',
            stars: 5,
        },
        {
            quote: `As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!`,
            name: 'David Martinez',
            stars: 5,
        },
        {
            quote: `The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.`,
            name: 'Chris Taylor',
            stars: 5,
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["All Questions", "General", "Services", "Pricing", "Support"];

  const questions = [
    {
      category: "General",
      text: "Do I need an appointment or can I walk in?",
      answer: "You can walk in, but we recommend appointments for faster service.",
    },
    {
      category: "General",
      text: "How long does a typical haircut take?",
      answer: "A typical haircut takes around 30 minutes.",
    },
    {
      category: "Pricing",
      text: "What form of payment do you accept?",
      answer: "We accept cash, credit/debit cards, and UPI.",
    },
    {
      category: "Support",
      text: "Do you offer any loyalty programs or discounts?",
      answer: "Yes, we offer a loyalty card and seasonal discounts.",
    },
    {
      category: "Services",
      text: "What hair products do you use and sell?",
      answer: "We use high-quality branded products available for purchase too.",
    },
  ];

  const filteredQuestions =
    selectedCategory === "All Questions"
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
        <>
            <div className=' bg-[#1F2937] w-full pt-20' id='home'>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 pt-9 '>
                    <div className='pb-9 px-2'>
                        <p className='text-gray-700 text-2xl mt-4'>Premium Barber Services in Denton</p>

                        <h1 className='font-bold text-7xl text-white mt-4'>Classic Cuts, Modern Style</h1>

                        <h1 className='font-bold text-7xl text-blue-500 mt-4 relative'>
                            Premium Barber Shop
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-900 via-green-600 to-green-300 animate-pulse"></span>
                        </h1>

                        <p className='text-gray-400 text-2xl mt-6'>
                            At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look.
                            Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
                        </p>

                        {/* Denton, TX Button */}
                        <button className='py-3 px-4 text-2xl text-white rounded-3xl bg-gray-900 border-2 border-transparent hover:border-gray-400 mt-6 transition-all duration-300'>
                            <CiLocationOn className='inline' /> Denton, TX
                        </button>

                        {/* Our Services Button */}
                        <button className='mt-5 w-full bg-gray-900 h-13 border-2 border-gray-500 text-white items-center rounded-2xl font-bold flex justify-center transition-all duration-300 hover:bg-green-400 hover:text-black'>
                            <CiPhone className='font-bold text-2xl mr-3' /> Our Services
                        </button>

                        {/* Book Now Button */}
                        <button className='mt-5 w-full mb-9 bg-blue-600 h-13 border-2 border-gray-500 text-white items-center rounded-2xl font-bold flex justify-center transform transition-transform duration-300 hover:-translate-y-1'>
                            <CiPhone className='font-bold text-2xl mr-3' /> Book Now
                        </button>

                        <div className='w-full mt-5 flex justify-center'>
                            <FaArrowDown className='text-2xl text-blue-400' />
                        </div>

                    </div>
                    <div className='flex justify-center items-center px-4 pb-45 group'>
                        <img
                            src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
                            alt=""
                            className='w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl rounded-xl'
                        />
                    </div>
                </div>
            </div>
            <div className='bg-[#111827] w-full pt-20' id='about'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Our Story
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            About PMC Barbershop
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto px-6 py-12 bg-[#0f172a]'>
                    {/* Left Side - Image with Badge */}
                    <div className='p-9 flex justify-center items-center'>
                        <div className='relative group w-full max-w-xl overflow-hidden rounded-2xl shadow-lg'>

                            {/* Image with zoom-out on hover */}
                            <img
                                src={image}
                                alt="PMC Barbershop"
                                className='w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-95'
                            />

                            {/* 5+ Years Badge - rotates on hover */}
                            <span
                                className='absolute bottom-4 right-4 bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md transform transition-transform duration-500 group-hover:rotate-6'
                            >
                                5+ years
                            </span>

                        </div>
                    </div>


                    {/* Right Side - Text content */}
                    <div className='p-9 flex flex-col justify-center'>
                        <div className='border-l-4 border-blue-600 pl-6 text-white text-lg md:text-xl leading-relaxed'>
                            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX.
                            Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
                        </div>

                        <div className='bg-gray-700 text-gray-300 text-base md:text-lg p-6 rounded-xl mt-6 leading-relaxed'>
                            <p className="text-4xl text-blue-300 mb-4">“</p>
                            We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best.
                            Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
                        </div>
                    </div>
                </div>

            </div>


            <div className='bg-[#111827] w-full pt-20' id='service'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Premium Grooming
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            Our Barber Services
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto '>
                    <div className="relative group mt-9 rounded-2xl transition-transform hover:-translate-y-3 duration-500 ">
                        {/* Top gradient border */}
                        <div className="absolute top-0 left-0 w-0 h-1 rounded-t-2xl bg-gradient-to-r from-yellow-200 via-yellow-600 to-yellow-100 transition-all duration-500 group-hover:w-full"></div>

                        <div className='bg-[#242935] rounded-2xl p-7 transition-all duration-500'>
                            <div className='w-30 h-30 rounded-2xl flex justify-center items-center group-hover:bg-[#7089ac63] bg-[#4c4e50] mt-12 ml-4'><img src={svg1} alt="" /></div>
                            <p className='text-2xl font-bold ml-4 mt-17 text-white group-hover:text-blue-400 transition-colors duration-300'>HairCut</p>
                            <p className='text-xl text-gray-500 mt-12'>Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.</p>
                            <div className='text-gray-500 text-xl mt-7 space-y-2'>
                                <li>Classic Cuts</li>
                                <li>Modern Styles</li>
                            </div>
                        </div>
                    </div>

                    <div className="relative group mt-9 rounded-2xl transition-transform hover:-translate-y-3 duration-500 ">
                        {/* Top gradient border */}
                        <div className="absolute top-0 left-0 w-0 h-1 rounded-t-2xl bg-gradient-to-r from-yellow-200 via-yellow-600 to-yellow-100 transition-all duration-500 group-hover:w-full"></div>

                        <div className='bg-[#242935] rounded-2xl p-7 transition-all duration-500'>
                            <div className='w-30 h-30 rounded-2xl flex justify-center items-center group-hover:bg-[#7089ac63] bg-[#4c4e50] mt-12 ml-4'><img src={svg2} alt="" /></div>
                            <p className='text-2xl font-bold ml-4 mt-17 text-white group-hover:text-blue-400 transition-colors duration-300'>Beard Services </p>
                            <p className='text-xl text-gray-500 mt-12'>Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.</p>
                            <div className='text-gray-500 text-xl mt-7 space-y-2'>
                                <li>Beard Trims</li>
                                <li>Beard Shaping</li>
                            </div>
                        </div>
                    </div>
                    <div className="relative group mt-9 rounded-2xl transition-transform hover:-translate-y-3 duration-500 ">
                        {/* Top gradient border */}
                        <div className="absolute top-0 left-0 w-0 h-1 rounded-t-2xl bg-gradient-to-r from-yellow-200 via-yellow-600 to-yellow-100 transition-all duration-500 group-hover:w-full"></div>

                        <div className='bg-[#242935] rounded-2xl p-7 transition-all duration-500'>
                            <div className='w-30 h-30 rounded-2xl flex justify-center items-center group-hover:bg-[#7089ac63] bg-[#4c4e50] mt-12 ml-4'><img src={svg3} alt="" /></div>
                            <p className='text-2xl font-bold ml-4 mt-17 text-white group-hover:text-blue-400 transition-colors duration-300'>Premium Services</p>
                            <p className='text-xl text-gray-500 mt-12'>Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.</p>
                            <div className='text-gray-500 text-xl mt-7 space-y-2'>
                                <li>Hair Coloring</li>
                                <li>Scalp Treatments</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#111827] w-full pt-20 pb-20'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Our Commitment
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            Why Choose PMC Barbershop?
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            What makes us the premier barbershop in Denton, TX.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto '>
                    <div className="relative group mt-9 rounded-2xl bg-[#242935] transition-all duration-500 hover:border hover:border-blue-500">
                        {/* Left to Top Border Transition */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl group-hover:h-1 group-hover:w-full group-hover:rounded-t-2xl group-hover:rounded-l-none transition-all duration-500"></div>

                        <div className='bg-[#242935] rounded-2xl p-7 pl-9 transition-all duration-500'>
                            {/* Icon / Title Box */}
                            <div className='w-24 h-24 rounded-2xl flex justify-center items-center text-blue-500 text-3xl bg-[#06101aa8] mt-5 ml-0'>
                                Home
                            </div>

                            {/* Title */}
                            <p className='text-2xl font-bold ml-1 mt-6 text-white'>HairCut</p>

                            {/* Description */}
                            <p className='text-xl text-gray-500 mt-6 leading-relaxed'>
                                Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.
                            </p>
                        </div>
                    </div>
                    <div className="relative group mt-9 rounded-2xl bg-[#242935] transition-all duration-500 hover:border hover:border-blue-500">
                        {/* Left to Top Border Transition */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl group-hover:h-1 group-hover:w-full group-hover:rounded-t-2xl group-hover:rounded-l-none transition-all duration-500"></div>

                        <div className='bg-[#242935] rounded-2xl p-7 pl-9 transition-all duration-500'>
                            {/* Icon / Title Box */}
                            <div className='w-24 h-24 rounded-2xl flex justify-center items-center text-blue-500 text-3xl bg-[#06101aa8] mt-5 ml-0'>
                                Home
                            </div>

                            {/* Title */}
                            <p className='text-2xl font-bold ml-1 mt-6 text-white'>HairCut</p>

                            {/* Description */}
                            <p className='text-xl text-gray-500 mt-6 leading-relaxed'>
                                Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.
                            </p>
                        </div>
                    </div>
                    <div className="relative group mt-9 rounded-2xl bg-[#242935] transition-all duration-500 hover:border hover:border-blue-500">
                        {/* Left to Top Border Transition */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl group-hover:h-1 group-hover:w-full group-hover:rounded-t-2xl group-hover:rounded-l-none transition-all duration-500"></div>

                        <div className='bg-[#242935] rounded-2xl p-7 pl-9 transition-all duration-500'>
                            {/* Icon / Title Box */}
                            <div className='w-24 h-24 rounded-2xl flex justify-center items-center text-blue-500 text-3xl bg-[#06101aa8] mt-5 ml-0'>
                                Home
                            </div>

                            {/* Title */}
                            <p className='text-2xl font-bold ml-1 mt-6 text-white'>HairCut</p>

                            {/* Description */}
                            <p className='text-xl text-gray-500 mt-6 leading-relaxed'>
                                Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='bg-[#1F2937] w-full pt-20 pb-20'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Testimonials
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            What Our Clients Say
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                    </div>

                </div>
                <section className="bg-[#1F2937] py-16 px-4">

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-[#1c2433] text-white rounded-xl p-6 relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:border hover:border-cyan-400"
                            >
                                <span className="text-5xl text-blue-400">“</span>
                                <p className="mt-5 italic">{testimonial.quote}</p>
                                <span className="text-5xl text-blue-400 float-right mt-6">”</span>

                                {/* Star + Name */}
                                <div className="mt-6 flex items-center space-x-4">
                                    <div className="flex text-yellow-400 text-sm">
                                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                    <span className="border-l-2 border-blue-500 h-7 mx-2"></span>
                                    <p className="font-semibold">{testimonial.name}</p>
                                </div>

                                {/* Corner Design */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-900 opacity-20 rounded-tl-full"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className='bg-[#0f172a] w-full pt-20 pb-2'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Quality Barbering at Fair Prices
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            Our Service Prices
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Choose from our range of professional barbering services.
                        </p>
                    </div>
                </div>
                <div className="min-h-screen  flex items-center justify-center p-6">
                    <div className="max-w-7xl w-full grid gap-8 md:grid-cols-3">
                        {/* Box 1 */}
                        <div className="bg-[#1e293b] rounded-xl p-8 border border-blue-700 relative shadow-lg">
                            <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                                Most Popular
                            </span>
                            <h2 className="text-white text-2xl font-bold mb-3 border-b border-blue-600  inline-block">
                                Classic Services
                            </h2>
                            <div className="flex items-baseline space-x-2 my-6">
                                <span className="text-gray-400 text-2xl">$</span>
                                <span
                                    className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                >
                                    25
                                </span>
                                <span className="text-gray-400 text-2xl">/mo</span>
                            </div>
                            <ul className="space-y-3 text-gray-300 mb-8">
                                <li className="flex items-center gap-3 my-6 font-bold mt-12">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Men's Haircut
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Kids Haircut (12 & under)
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Senior Haircut (65+)
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Military/First Responder Cut
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Basic Beard Trim
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Neck & Line Cleanup (between cuts)
                                </li>
                            </ul>
                            <button className="bg-blue-500 w-full py-3 rounded-lg font-semibold text-white hover:bg-blue-600 transition">
                                Book Now
                            </button>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-[#1e293b] rounded-xl p-8 border border-transparent hover:border-blue-600 transition-all duration-300 shadow-lg">
                            <h2 className="text-white   text-2xl font-bold mb-3 border-b border-blue-600  inline-block">
                                Premium Services
                            </h2>
                            <div className="flex items-baseline space-x-2 my-6">
                                <span className="text-gray-400 text-2xl">$</span>
                                <span
                                    className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                >
                                    $ 35
                                </span>
                                <span className="text-gray-400 text-2xl">/mo</span>
                            </div>
                            <ul className="space-y-3 text-gray-300 mb-8">
                                <li className="flex items-center gap-3 my-6 font-bold mt-12">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Haircut & Beard Combo
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Hot Towel Shave
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Full Beard Shaping & Design
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Color Camo (Gray Blending)
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Hair & Scalp Treatment
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Head Shave with Hot Towel
                                </li>
                            </ul>
                            <button
                                disabled
                                className="bg-gray-600 w-full py-3 rounded-lg font-semibold text-gray-900 hover:bg-green-700 hover:text-black cursor-not-allowed"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-[#1e293b] rounded-xl p-8 border border-transparent hover:border-blue-600 transition-all duration-300 shadow-lg">
                            <h2 className="text-white  text-2xl font-bold mb-3 border-b border-blue-600  inline-block">
                                Packages
                            </h2>
                            <div className="flex items-baseline space-x-2 my-6">
                                <span className="text-gray-400 text-2xl">$</span>
                                <span
                                    className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                >
                                    $ 45
                                </span>
                                <span className="text-gray-400 text-2xl">/mo</span>
                            </div>
                            <ul className="space-y-3 text-gray-300 mb-8">
                                <li className="flex items-center gap-3 my-6 font-bold mt-12">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    The Works (Cut, Shave, Treatment)
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Father & Son Combo
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Groom's Package
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Monthly Membership (2 cuts/mo)
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    First-Time Client Special
                                </li>
                                <li className="flex items-center gap-3 my-6 font-bold">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                    </svg>
                                    Loyalty Program
                                </li>
                            </ul>
                            <button
                                disabled
                                className="bg-gray-600 w-full py-3 rounded-lg font-semibold text-gray-900 hover:bg-green-700 hover:text-black cursor-not-allowed"
                            >
                                Inquire
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#111827] w-full pt-20 pb-20' id='gallery'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Our Work & Shop
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            Our Barbershop Gallery
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0   container mx-auto'>
                     
                      {/* Main Box */}
      <div className="relative rounded-2xl p-7 mt-9 group">
        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <img src={i1} alt="" className="w-full h-full object-cover" />
        </div>

        {/* View Button - Visible on Hover */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-5 right-5 bg-white text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          View
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={i1}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      )}

                             {/* Main Box */}
      <div className="relative rounded-2xl p-7 mt-9 group">
        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>

        {/* View Button - Visible on Hover */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-5 right-5 bg-white text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          View
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={image}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      )}

                              {/* Main Box */}
      <div className="relative rounded-2xl p-7 mt-9 group">
        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <img src={i2} alt="" className="w-full h-full object-cover" />
        </div>

        {/* View Button - Visible on Hover */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-5 right-5 bg-white text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          View
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={i2}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      )}
                </div>

            </div>


            <div className='bg-[#111827] w-full pt-20 pb-20'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Expert Stylists
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            Meet Our Barbers
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto'>
                    <div className='bg-[#242935] rounded-2xl py-7 mt-9 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 border border-transparent group'>

                        {/* Image Section */}
                        <div className="w-full h-[300px] relative rounded-none overflow-hidden">
                            <img src={staf1} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        {/* Content Section */}
                        <div className='mt-5 p-6'>

                            {/* Gradient Underline */}
                            <div className="flex justify-center">
                                <div className="h-1 w-1/6 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-1/3 rounded-full"></div>
                            </div>

                            {/* Name */}
                            <p className='text-2xl text-white text-center mt-4 transition-colors duration-500 group-hover:text-blue-400'>
                                Jason Rodriguez
                            </p>

                            {/* Title with permanent gradient */}
                            <p className='mt-4 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text font-medium'>
                                Owner & Master Barber
                            </p>

                            {/* Description (normal gray text now) */}
                            <p className='mt-6 text-xl text-gray-400 text-center'>
                                With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and
                            </p>

                            {/* Social Icons with smooth transition */}
                            <div className='flex justify-center gap-4 mt-6 transition-transform duration-500 group-hover:-translate-y-1'>
                                <div className='flex justify-center items-center h-10 w-10 rounded-full bg-[#142f6d60]'>
                                    <IoLogoInstagram className='text-white text-2xl text-center inline' />
                                </div>
                                <div className='flex justify-center items-center h-10 w-10 rounded-full bg-[#142f6d62]'>
                                    <IoLogoInstagram className='text-white text-2xl text-center inline' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#242935] rounded-2xl py-7 mt-9 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 border border-transparent group'>

                        {/* Image Section */}
                        <div className="w-full h-[300px] relative rounded-none overflow-hidden">
                            <img src={staf2} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        {/* Content Section */}
                        <div className='mt-5 p-6'>

                            {/* Gradient Underline */}
                            <div className="flex justify-center">
                                <div className="h-1 w-1/6 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-1/3 rounded-full"></div>
                            </div>

                            {/* Name */}
                            <p className='text-2xl text-white text-center mt-4 transition-colors duration-500 group-hover:text-blue-400'>
                                Jason Rodriguez
                            </p>

                            {/* Title with permanent gradient */}
                            <p className='mt-4 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text font-medium'>
                                Owner & Master Barber
                            </p>

                            {/* Description (normal gray text now) */}
                            <p className='mt-6 text-xl text-gray-400 text-center'>
                                With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and
                            </p>

                            {/* Social Icons with smooth transition */}
                            <div className='flex justify-center gap-4 mt-6 transition-transform duration-500 group-hover:-translate-y-1'>
                                <div className='flex justify-center items-center h-10 w-10 rounded-full bg-[#142f6d60]'>
                                    <IoLogoInstagram className='text-white text-2xl text-center inline' />
                                </div>
                                <div className='flex justify-center items-center h-10 w-10 rounded-full bg-[#142f6d62]'>
                                    <IoLogoInstagram className='text-white text-2xl text-center inline' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#242935] rounded-2xl py-7 mt-9 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 border border-transparent group'>

                        {/* Image Section */}
                        <div className="w-full h-[300px] relative rounded-none overflow-hidden">
                            <img src={i1} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        {/* Content Section */}
                        <div className='mt-5 p-6'>

                            {/* Gradient Underline */}
                            <div className="flex justify-center">
                                <div className="h-1 w-1/6 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-1/3 rounded-full"></div>
                            </div>

                            {/* Name */}
                            <p className='text-2xl text-white text-center mt-4 transition-colors duration-500 group-hover:text-blue-400'>
                                Jason Rodriguez
                            </p>

                            {/* Title with permanent gradient */}
                            <p className='mt-4 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text font-medium'>
                                Owner & Master Barber
                            </p>

                            {/* Description (normal gray text now) */}
                            <p className='mt-6 text-xl text-gray-400 text-center'>
                                With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and
                            </p>

                            {/* Social Icons with smooth transition */}
                            <div className='flex justify-center gap-4 mt-6 transition-transform duration-500 group-hover:-translate-y-1'>
                                <div className='flex justify-center items-center h-10 w-10 rounded-full bg-[#142f6d60]'>
                                    <IoLogoInstagram className='text-white text-2xl text-center inline' />
                                </div>
                                <div className='flex justify-center items-center h-10 w-10 rounded-full bg-[#142f6d62]'>
                                    <IoLogoInstagram className='text-white text-2xl text-center inline' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            <div className='bg-[#111827] w-full pt-20 pb-20'>
                <div className='col-span-2 container mx-auto pt-9'>
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Visit Our Shop
                        </h3>
                        <h1 className="text-5xl font-bold text-white relative inline-block group">
                            Our Location
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Conveniently located in Denton, TX:
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
                    <div className='p-5 flex justify-center items-center transition-all hover:-translate-y-4' onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=518+Acme+St+unit+101,+Denton,+TX+76205,+United+States', '_blank')}>
                        <img src={i3} alt="" className='rounded-2xl' />
                    </div>
                    <div className='p-9 block bg-[#3f424780] mt-3 rounded-2xl'>
                        <p className='text-4xl font-bold text-white ml-3 mt-3'>Contact Information</p>
                        <div className='flex  items-center mt-3'>
                            <div className='w-15 h-15 rounded-full bg-blue-500 flex justify-center mt-2 items-center'><IoLocationOutline className='text-white text-2xl' /></div>
                            <div className=' mt-6'>
                                <div className='text-xl ml-2 text-white font-bold'>Address</div>
                                <div className='text-md ml-2 text-gray-600'>518 Acme St unit 101, Denton, TX 76205, United States</div>
                            </div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div className='w-15 h-15 rounded-full bg-blue-500 flex justify-center mt-2 items-center'><CiPhone className='inline text-white text-2xl' /> </div>
                            <div className='mt-6'>
                                <div className='text-xl ml-2  text-white font-bold'>Phone</div>
                                <div className='text-md ml-2 text-gray-600'>+19408081569</div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button
                                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=518+Acme+St+unit+101,+Denton,+TX+76205,+United+States', '_blank')}
                                className="h-10 bg-blue-400 px-5 rounded-xl text-white text-xl font-bold hover:bg-blue-800 transition"
                            >
                                <IoLocationOutline className="text-white text-2xl inline mr-2" />
                                Get Direction
                            </button> <button
                                onClick={() => window.location.href = 'tel:+19408081569'}
                                className="h-10 bg-blue-900 text-white px-5 rounded-xl ml-4 hover:bg-blue-700 transition duration-300 ease-in-out"
                            >
                                <CiPhone className="inline mr-2 text-lg" />
                                Call Us
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-gray-900 w-full pt-20 pb-20'>
                <div className="container mx-auto px-4 py-10 text-white bg-gray-900 min-h-screen">
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Common Questions
                        </h3>
                        <h1 className="text-4xl font-bold relative inline-block group">
                            Frequently Asked Questions
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Answers to common questions about our barbershop services.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto mt-5">
                        <input
                            type="text"
                            placeholder="Search for questions..."
                            className="w-full px-4 py-5 rounded-4xl pl-20 bg-gray-800 text-white mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 mt-5 focus:ring-green-500"
                        />


                        <div>
                            <div className="flex flex-wrap gap-2 justify-center mb-6 mt-5">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setOpenIndex(null); // reset open question on tab switch
                                        }}
                                        className={`px-4 py-3 rounded-full transition text-white ${selectedCategory === category
                                                ? "bg-blue-500"
                                                : "bg-gray-800 hover:bg-green-500"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 mt-5">
                                {filteredQuestions.map((q, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 rounded-lg px-4 py-5 text-white"
                                    >
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <h3 className="font-medium hover:text-blue-400">
                                                {q.text}
                                            </h3>
                                            <button onClick={() => toggleAnswer(index)}>
                                                <span className="text-black text-xl">{openIndex === index ? "▲" : "▼"}</span>
                                            </button>
                                        </div>
                                        {openIndex === index && (
                                            <p className="mt-3 text-gray-300 text-sm">{q.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-gray-900 w-full pt-20 pb-20' id='contact'>
                <div className="container mx-auto text-white py-16 px-4 md:px-20">

                    {/* Heading */}
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-xl text-blue-500 font-medium transition-transform duration-300 hover:-translate-y-1">
                            Book Your Appointment
                        </h3>
                        <h1 className="text-4xl font-bold relative inline-block group">
                            Contact Us
                            <span className="absolute left-1/2 -translate-x-1/2 top-13 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-xl max-w-xl mx-auto">
                            Ready for a fresh look? Book your appointment today or contact us for any questions.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                        {/* Left Info Box - smaller (2/5) */}
                        <div className="col-span-2 bg-[#1a1f2e] p-6 rounded-lg shadow-md border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 space-y-10">
                            {/* Address */}
                            <div className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-2 hover:bg-gray-700 p-7 rounded-3xl">
                                <div className="text-2xl">📍</div>
                                <div>
                                    <h3 className="font-semibold text-white">Address</h3>
                                    <p className="text-sm text-gray-300">518 Acme St unit 101, Denton, TX 76205, United States</p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-2 hover:bg-gray-700 p-7 rounded-3xl">
                                <div className="text-2xl">📞</div>
                                <div>
                                    <h3 className="font-semibold text-white">Phone</h3>
                                    <p className="text-sm text-gray-300">+1 940 808 1569</p>
                                </div>
                            </div>
                            {/* Hours */}
                            <div className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-2 hover:bg-gray-700 p-7 rounded-3xl">
                                <div className="text-2xl">⏰</div>
                                <div>
                                    <h3 className="font-semibold text-white">Business Hours</h3>
                                    <p className="text-sm text-gray-300">
                                        Mon–Fri: 9:00 AM – 7:00 PM<br />
                                        Sat: 9:00 AM – 5:00 PM<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Box - larger (3/5) */}
                        <div className="col-span-3 bg-[#1a1f2e] p-6 rounded-lg shadow-md border border-transparent hover:border-blue-500 transition-transform duration-300 hover:-translate-y-2">
                            <form className="space-y-6">
                                {/* Inputs */}
                                {[
                                    { label: "Your Name", type: "text", placeholder: "Enter your full name" },
                                    { label: "Phone Number", type: "text", placeholder: "Enter your phone number" },
                                    { label: "Preferred Date", type: "date", placeholder: "" }
                                ].map((field, index) => (
                                    <div key={index} className="flex flex-col space-y-1 group transition-all duration-300">
                                        <label className="text-black group-hover:text-blue-500 transition-all duration-300 transform group-hover:-translate-y-1">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="p-3 rounded-2xl bg-transparent border border-gray-500 text-white focus:border-blue-500 group-hover:border-blue-500 focus:outline-none transition-all duration-300 transform group-hover:-translate-y-1"
                                        />
                                    </div>
                                ))}

                                {/* Select Box */}
                                <div className="flex flex-col space-y-1 group">
                                    <label className="text-black group-hover:text-blue-500 transition-all duration-300 transform group-hover:-translate-y-1">
                                        Service Interested In
                                    </label>
                                    <select
                                        className="w-fit p-3 rounded-2xl bg-transparent border border-gray-500 text-black focus:border-blue-500 group-hover:border-blue-500 focus:outline-none transition-all duration-300 transform group-hover:-translate-y-1"
                                    >
                                        <option className="text-black">Select an option</option>
                                        <option className="text-black hover:bg-green-500 hover:text-black">Haircut</option>
                                        <option className="text-black hover:bg-green-500 hover:text-black">Beard Trim</option>
                                        <option className="text-black hover:bg-green-500 hover:text-black">Coloring</option>
                                        <option className="text-black hover:bg-green-500 hover:text-black">Hair Spa</option>
                                        <option className="text-black hover:bg-green-500 hover:text-black">Facial</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col space-y-1 group">
                                    <label className="text-black group-hover:text-blue-500 transition-all duration-300 transform group-hover:-translate-y-1">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your style preferences or any questions you have"
                                        className="p-3 h-32 rounded-2xl bg-transparent border border-gray-500 text-white focus:border-blue-500 group-hover:border-blue-500 focus:outline-none transition-all duration-300 transform group-hover:-translate-y-1"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-all duration-300 hover:-translate-y-1 shadow-md"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-gray-900 w-full pt-20 pb-20'>
                <div className="bg-[#3b82f6]">

                    {/* CTA Section */}
                    <div className=" container mx-auto px-4 py-20 text-center relative rounded-lg">

                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready for a Fresh Cut?</h2>
                        <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                            Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                <a href="#contact" >Book Apointment</a>
                            </button>
                            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
                                <a href="#service">View Our Services</a>
                            </button>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <footer className="bg-[#1f2937]  text-white mt-20 py-14">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                            {/* Company Info */}
                            <div>
                                <img src="/logo.png" alt="Company Logo" className="h-12 mb-3" />
                                <p className="text-gray-400">Classic cuts with modern style</p>
                                <div className="flex gap-4 mt-4">
                                    <button className="bg-[#374151] p-2 rounded-full">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                    <button className="bg-[#374151] p-2 rounded-full">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul className="text-gray-400 space-y-2">
                                    <li className="hover:text-blue-400 font-bold"><a href="#home" >Home</a></li>
                                    <li className="hover:text-blue-400 font-bold"><a href="#about" >About</a></li>
                                    <li className="hover:text-blue-400 font-bold"><a href="#service" >Serveic</a></li>
                                    <li className="hover:text-blue-400 font-bold"><a href="#gallery" >Gallery</a></li>
                                    <li className="hover:text-blue-400 font-bold"><a href="#contact" >Contact</a></li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="font-semibold mb-4">Contact Us</h4>
                                <p className="text-gray-400">518 Acme St unit 101, Denton, TX 76205, United States</p>
                                <p className="mt-2 text-gray-400">+1 940 808 1569</p>
                            </div>

                            {/* Newsletter */}
                            <div>
                                <h4 className="font-semibold mb-4">Newsletter</h4>
                                <p className="text-gray-400 mb-3">Subscribe to our newsletter to receive updates and news.</p>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full p-2 rounded border border-gray-400 text-black mb-3"
                                />
                                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-10 border-t container mx-auto border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
                            <p>© 2023 PMC Barbershop. All rights reserved.</p>
                            <div className="flex gap-4 mt-2 md:mt-0">
                                <span>Home</span>
                                <span>About</span>
                                <span>Services</span>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>




        </>
    )
}

export default FirstShow