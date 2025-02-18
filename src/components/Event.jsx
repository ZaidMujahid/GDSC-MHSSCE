import React from 'react';
import EventImage from '../assets/post.jpg';
import PropImage from '../assets/profile-pic.png';
import Logo from '../assets/left-align-logo.png';

const Event = () => {
  return (
    <section className="h-full lg:h-[90vh] items-center mb-12 scroll-mt-[80px]" id="event">
      <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-center ">Events</h2>
      <h5 className="-mt-2 font-medium text-md mb-4 md:text-lg lg:text-xl text-[#777777] text-center ">
        Upcoming Event
      </h5>
      
        <div class="animate-pulse flex space-x-4 mt-40">
          <div class="flex-1 space-y-6 py-1">
            <div>
              <h2 className="mt-30 font-semibold text-lg md:text-4xl lg:text-5xl text-center">
                Coming Soon
              </h2>
              <h5 className="font-medium text-md mb-4 md:text-1xl lg:text-3xl text-[#777777] text-center">
                Stay Tuned!
              </h5>
            </div>
          </div>
        </div>

      {/* <div className="flex flex-col md:flex-row justify-end mx-auto items-center py-2 sm:px-2 md:py-4 md:px-8 lg:py-6 lg:px-12">
        <div className="md:basis-[50%] lg:basis-[60%] text-start py-4 order-2 md:order-1 ">
          <h3 className="font-medium text-md lg:text-xl mb-1">Learn Web3 the easy way</h3>
          <p className="text-start text-[0.8rem] sm:text-sm md:text-sm lg:text-md mb-4">
            Ever wondered how web3 apps are made using Flutter ? Our Android Co-lead is here to
            teach you from the basic and make you a confident web3 Dapp developer in just 1 workshop
          </p>
          <h6 className="text-[0.8rem] sm:text-sm md:text-sm lg:text-md font-regular text-[#777777] mb-1">
            What will be taught in this session ?
          </h6>
          <ul className="list-disc text-xs sm:text-sm md:text-sm lg:text-md text-regular px-4 mb-5">
            <li>Intro to flutter for Web3 </li>
            <li>What is Web3 and how does it work ?</li>
            <li>Simple Crypto transaction app</li>
            <li>Integerate the above app with native flutter pub package</li>
          </ul>
          <div className="grid grid-cols-2 gap-y-4  mt-8 mx-auto justify-items-around justify-around">
            <div>
              <h6 className=" text-[0.8rem] lg:text-sm  font-semibold mb-2 ">Schedule</h6>
              <p className=" text-xs lg:text-sm">17th September, 2022 </p>
              <p className=" text-xs lg:text-sm">11:00 am - 1:00 pm</p>
            </div>
            <div>
              <h6 className=" text-[0.8rem] lg:text-sm font-semibold mb-2  ">Mode of Lecture</h6>
              <p className=" text-xs lg:text-sm">Online</p>
            </div>
            <div>
              <h6 className=" text-[0.8rem] w-max md:w-full lg:text-sm font-semibold mb-2">
                G-meet Link
              </h6>
              <a href={'/'} className=" text-xs lg:text-sm text-dark-blue ">
                https://g-meet/pqyt77m
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src={Logo}
                alt="GDSC MHSSCE"
                className=" w-24 h-8 sm:w-40 sm:h-10 md:w-60 md:h-12"
              />
            </div>
          </div>
          <p className="text-xl font-medium">Stay tuned</p>
          <p>coming soon !!</p>
        </div>
        <div className="w-64 max-w-[14rem] sm:max-w-[15rem] md:max-w-full order-1 md:order-2 flex flex-col justify-end shadow-md h-full rounded-lg overflow-hidden md:basis-[40%] lg:basis-[30%] mx-auto mb-6 md:mb-0 text-start ">
          <div className="bg-[#adadad] h-40 md:h-44 lg:h-52">
            {/* <img src={EventImage} alt="Event" className="" />
          </div>
          <div className="bg-[#ffd3d7]  px-2 md:px-1 py-4 lg:px-6 flex flex-col space-y-6 h-40 md:h-44 lg:h-52 ">
            <div className="flex justify-around space-x-2 items-center ">
              <div className=" bg-[#ffddff] h-12 w-12 rounded-full">
                {/* <img
                  src={PropImage}
                  alt="Event Speaker"
                  className="rounded-full h-16 w-16 mx-auto "
                />
              </div>
              <div className="w-2 flex-stretch  text-[#777777]"></div>
              <div className="items-center bg-[#cecece] h-12 mx-auto basis-[60%] ">
                {/* <h4 className=" text-sm md:text-md font-semibold">Nabeel Mirza</h4>
                <h6 className="text-xs md:text-sm -mt-2 font-regular">Android Co-lead</h6>
              </div>
            </div>
            <div className="items-center mx-auto text-start space-y-1 font-regular text-xxs sm:text-xs md:text-xs lg:text-sm md:px-1 ">
              <p className="w-40 md:w-48 lg:w-52 h-4 bg-[#ddd]"> </p>
              {/* 2 years+ experience in Java/Kotlin
              <p className=" w-40 md:w-48 lg:w-52 h-4 basis-[90%] bg-[#ddd]"> </p>
              {/* Firebase master with 3 start rating
              <p className=" w-40 md:w-48 lg:w-52 h-4 basis-[90%] bg-[#ddd]"> </p>
              {/* ex-Google SDE-2 at San Francisco
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Event;
