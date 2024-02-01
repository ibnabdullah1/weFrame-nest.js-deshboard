import Image from "next/image";
import image1 from "../../public/image/image1.jpeg";
import avater from "../../public/image/avater.jpeg";
import Link from "next/link";
import { RxDotsHorizontal } from "react-icons/rx";
const ContentCard = ({ image }) => {
  return (
    <div className=" flex flex-col items-center bg-white p-3 rounded-md">
      <Image
        width={300}
        height={200}
        src={image}
        alt="Description of the image"
        className="shadow h-[230px] object-cover w-full rounded-lg overflow-hidden border"
      />
      <div className="flex justify-between py-2 w-full ">
        <div className="flex gap-1 items-center text-[#A0A3BD]">
          <h4 className="text-sm font-semibold text-[#7950F2]">BUSINESS</h4>.
          <h5 className="text-[#A0A3BD] text-xs">20 Sep 2022</h5>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            width={20}
            height={20}
            src={avater}
            className="rounded-full object-cover"
            alt="Description of the image"
          />
          <h4 className="text-sm font-medium">Maria Doe</h4>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <h3 className="font-semibold   "> 7 Rules of Effective Branding</h3>
        <div className="bg-[#E3D5FF] h-8 px-2 flex justify-center items-center text-[#7950F2] rounded-md ">
          Created
        </div>
      </div>
      <p className="text-gray-400 text-left">
        Why Branding matters for your Business
      </p>
      <div className="flex justify-between items-center gap-3 py-2">
        <p className="px-3 py-2 rounded-lg text-[#A0A3BD] bg-gray-100">
          Branding
        </p>
        <p className="px-3 py-2 rounded-lg text-[#A0A3BD] bg-gray-100">
          Communication
        </p>
        <p className="px-3 py-2 rounded-lg text-[#A0A3BD] bg-gray-100">
          Branding
        </p>
      </div>
      <div className="flex justify-between  w-full  items-center gap-2">
        <button className="text-[#7750F1] rounded-lg flex justify-center items-center bg-[#E8E9FF] w-[80%] py-2 px-4">
          View
        </button>
        <button className="text-[#7750F1] rounded-lg flex justify-center items-center bg-[#E8E9FF] w-[20%] py-3 px-3">
          <RxDotsHorizontal />
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
