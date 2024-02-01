import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ label, address, icon: Icon, num }) => {
  const path = usePathname();
  const isActive = path == address;
  return (
    <div className="px-6 mb-2 flex items-center ">
      <Link
        href={address}
        className={`flex items-center w-[300px] gap-2 px-4 py-3 rounded-md transition-colors duration-300 transform  ${
          isActive
            ? "bg-[#7950F2] text-[#f2f2f2] "
            : " hover:bg-[#E3D5FF] hover:text-[#7950F2] "
        }`}
      >
        <Icon className="w-6 h-6 " a />
        <span className="font-medium text-sm uppercase">{label}</span>
        {num > 0 && (
          <p className="w-[30px] text-[#7950F2] h-[30px] flex justify-center items-center bg-purple-100 rounded-full p-2">
            {num}
          </p>
        )}
      </Link>
    </div>
  );
};

export default MenuItem;
