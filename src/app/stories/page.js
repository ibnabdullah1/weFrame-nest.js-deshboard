"use client";
import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import avatar from "../../../public/image/avater.jpeg";
import { RxDotsHorizontal } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";

// import "./page.css";
const Page = () => {
  const stories = [
    {
      image: "https://i.ibb.co/R4Thhv6/image4.jpg",
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri Partner",
    },

    {
      image: "https://i.ibb.co/z6G5ZNg/image10.jpg",
      title: "Chez pierre o by Vuidafieri Partner",
    },
    {
      image: "https://i.ibb.co/0cn7fYf/image6.jpg",
      title: "Chez pierre ",
    },
  ];

  let itemsPerPage = 1;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, stories.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-3">
        <div className="flex gap-1 items-center">
          <Image
            width={30}
            height={30}
            src={avatar}
            alt="avatar"
            className="rounded-full"
          />
          <h3>
            James Robert
            <span className="font-medium ml-1 text-violet-700">
              Created on 13 January 2022
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="border py-2 px-3 rounded-md flex justify-between items-center">
            <h3>Accessibility</h3>
            <TiArrowSortedDown />
          </div>
          <button className="text-[#7750F1] rounded-lg flex justify-center items-center bg-[#E8E9FF] w-[40px] py-3 px-3">
            <RxDotsHorizontal />
          </button>
        </div>
      </div>
      {stories.length > 0 &&
        stories
          ?.slice(startIndex, startIndex + itemsPerPage)
          .map((story, index) => (
            <div
              key={index}
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${story.image}) lightgray 50% / cover no-repeat`,
              }}
              className="w-full h-[80vh] bg-cover bg-center"
            >
              <div class="w-full h-full flex overflow-hidden  justify-center items-center backdrop-blur-sm">
                {/* {stories.length > 0 && ( */}
                <div className="flex justify-around gap-2  max-w-6xl mx-auto items-center">
                  <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className=" text-xl bg-[#212121] hover:bg-[rgb(0,0,0)] h-8 w-8 text-white p-1 rounded"
                  >
                    <IoIosArrowRoundBack />
                  </button>
                  <div className="grid grid-cols-1">
                    <div
                      key={index}
                      className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl h-[450px]  w-[300px]"
                    >
                      <div className="absolute flex items-end inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 p-3">
                        {" "}
                        <div>
                          <h2 className="text-white font-medium text-xl">
                            {story.title}
                          </h2>

                          <div className="bg-[#E3D5FF] h-10 mt-2 w-[130px] px-2 flex justify-center items-center text-[#7950F2] rounded-md ">
                            Created
                          </div>
                        </div>
                      </div>
                      <Image
                        width={200}
                        height={400}
                        src={story.image}
                        className="h-full w-full object-cover"
                        alt="image4"
                      />
                    </div>
                  </div>
                  <button
                    className=" text-xl  bg-[#212121] hover:bg-[rgb(0,0,0)] h-8 w-8 text-white p-1 rounded"
                    onClick={handleNext}
                    disabled={startIndex + itemsPerPage >= stories.length}
                  >
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
                  
            </div>
          ))}
    </div>
  );
};

export default Page;
