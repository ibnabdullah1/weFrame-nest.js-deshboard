import React from "react";
import image1 from "../../../public/image/newspaper-_1_ 1.svg";
import image2 from "../../../public/image/application 1.svg";
import image3 from "../../../public/image/storytelling 1.svg";
import image4 from "../../../public/image/advertisement 1.svg";
import Image from "next/image";
import ContentCard from "@/components/ContentCard";
import TopStories from "@/components/TopStories";
const page = () => {
  return (
    <div className="bg-[#f8fafb] min-h-[80vh] px-4 py-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold">Hello Admin</h2>
      <p className="text-[#A0A3BD]">This is what we got you for today.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        <div className=" bg-white rounded-md px-4 flex items-center gap-2 py-3">
          <div className="bg-[#E8E9FF] w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <Image
              height={30}
              width={30}
              src={image1}
              alt="Description of the image"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Articles</h4>
            <p className="text-xs">4,950 New Updates</p>
          </div>
        </div>
        <div className=" bg-white rounded-md px-4 flex items-center gap-2 py-3">
          <div className="bg-[#E8E9FF] w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <Image
              height={30}
              width={30}
              src={image2}
              alt="Description of the image"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Categories</h4>
            <p className="text-xs">10,275 New Updates</p>
          </div>
        </div>
        <div className=" bg-white rounded-md px-4 flex items-center gap-2 py-3">
          <div className="bg-[#E8E9FF] w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <Image
              height={30}
              width={30}
              src={image3}
              alt="Description of the image"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Stories</h4>
            <p className="text-xs">10,275 New Updates</p>
          </div>
        </div>
        <div className=" bg-white rounded-md px-4 flex items-center gap-2 py-3">
          <div className="bg-[#E8E9FF] w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <Image
              height={30}
              width={30}
              src={image4}
              alt="Description of the image"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Stories</h4>
            <p className="text-xs">4,193 New Updates</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-3">
        <h2 className="text-lg font-semibold">Top Articles</h2>
        <a className="text-[#7950F2] font-semibold" href="">
          See All
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ContentCard image={"https://i.ibb.co/VTG4KH6/image1.jpg"} />
        <ContentCard image={"https://i.ibb.co/Q6cyjc0/image2.jpg"} />
        <ContentCard image={"https://i.ibb.co/W2yYn8M/image3.jpg"} />
      </div>
      <TopStories />
    </div>
  );
};

export default page;
