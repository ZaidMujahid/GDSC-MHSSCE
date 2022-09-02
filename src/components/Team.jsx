import React from 'react';
import MemImage from '../assets/nabeel.jpg';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Socials from './Socials';

const Team = () => {
  return (
    <section className="h-full items-center justify-around mx-auto md:px-6 md:py-8 lg:px-8 lg:py-12 mb-12">
      <h2 className="text-center font-semibold text-2xl">Team</h2>
      <h5 className="text-xl text-[#777777] font-medium -mt-2 font-regular text-center">
        Meet Our Wonderful Team Members
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 items-center ">
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-sm lg:max-w-md flex flex-col space-y-4 rounded-lg bg-[#cce8ff] py-4 px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full rounded-br-none border-4  w-20 md:w-40 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-xxs md:text-sm lg:text-md">Android Co-Lead</p>
          <div className="flex space-x-6">
            <FaLinkedinIn className="w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5  md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5  md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Team;
