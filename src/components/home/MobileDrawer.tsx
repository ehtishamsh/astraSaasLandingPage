import { IoChevronDownCircleOutline, IoDiamondOutline } from "react-icons/io5";
import { FaRegQuestionCircle, FaBlog } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const components: { title: string; href: string; icon: JSX.Element }[] = [
  {
    title: "Features",
    href: "/features",
    icon: <IoMdCheckmarkCircleOutline size={17} />,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: <IoDiamondOutline size={17} />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <BsPersonGear size={17} />,
  },
  {
    title: "Demo",
    href: "/demo",
    icon: <FaRegQuestionCircle size={17} />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <FaBlog size={17} />,
  },
];

function MobileDrawer({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2 px-4 w-full">
        <span>
          <IoDiamondOutline size={17} />
        </span>
        <span>Pages</span>
        <span>
          <IoChevronDownCircleOutline
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-all duration-200`}
          />
        </span>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="flex flex-col text-gray-400 mt-2 overflow-hidden gap-1 w-full"
      >
        {components.map((component) => (
          <Link
            key={component.title}
            reloadDocument
            to={component.href}
            className="hover:bg-mainColor-700 text-sm font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
          >
            <span>{component.icon}</span>
            <span>{component.title}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default MobileDrawer;
