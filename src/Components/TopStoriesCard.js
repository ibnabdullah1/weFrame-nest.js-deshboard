import Image from "next/image";
import { RxDotsHorizontal } from "react-icons/rx";
import Link from "next/link";

const TopStoriesCard = ({ image }) => {
  return (
    <>
      <div
        style={{
          background: `url(${image}) `,
        }}
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl "
      >
        <div className="absolute flex items-end inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 p-3">
          <div>
            <h2 className="text-white font-medium text-lg">
              How 7 lines code turned into $36 Billion Empire
            </h2>
            <div className="flex justify-between py-2 w-full ">
              <div className="flex gap-1 items-center text-[#A0A3BD]">
                <h4 className="text-sm font-semibold text-[#ffffff]">
                  BUSINESS
                </h4>
                .<h5 className="text-[#A0A3BD] text-xs">20 Sep 2022</h5>
              </div>
              <div className="bg-[#E3D5FF] h-8 px-2 flex justify-center items-center text-[#7950F2] rounded-md ">
                Created
              </div>
            </div>
            <div className="flex w-full justify-between  items-center gap-2">
              <Link
                href={"/stories"}
                className="text-[#7750F1] rounded-lg flex justify-center items-center bg-[#E8E9FF] w-[80%] py-2 px-4"
              >
                View
              </Link>
              <button className="text-[#7750F1] rounded-lg flex justify-center items-center bg-[#E8E9FF] w-[20%] py-3 px-3">
                <RxDotsHorizontal />
              </button>
            </div>
          </div>
        </div>
        <Image
          width={200}
          height={400}
          src={image}
          className="h-full w-full"
          alt="image4"
        />
      </div>
    </>
  );
};

export default TopStoriesCard;
