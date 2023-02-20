import { AiOutlineBulb } from "react-icons/ai";
import { CgBell } from "react-icons/cg";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export const sideBarData = [
  {
    id: 1,
    linkTo: "/dashboard/home",
    name: "Home",
    Icon: AiOutlineBulb,
  },
  {
    id: 2,
    linkTo: "/dashboard/reminders",
    name: "Reminders",
    Icon: CgBell,
  },
  {
    id: 3,
    linkTo: "/dashboard/archive",
    name: "Archive",
    Icon: MdOutlineArchive,
  },
  {
    id: 4,
    linkTo: "/dashboard/trash",
    name: "Trash",
    Icon: FaRegTrashAlt,
  },
];
