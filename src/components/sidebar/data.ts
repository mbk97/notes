import { AiOutlineBulb } from "react-icons/ai";
import { CgBell } from "react-icons/cg";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export const sideBarData = [
  {
    id: 1,
    linkTo: "/dashboard/home",
    name: "Notes",
    Icon: AiOutlineBulb,
    active: true,
  },
  {
    id: 2,
    linkTo: "/dashboard/reminders",
    name: "Reminders",
    Icon: CgBell,
    active: false,
  },
  {
    id: 3,
    linkTo: "/dashboard/archive",
    name: "Archive",
    Icon: MdOutlineArchive,
    active: false,
  },
  {
    id: 4,
    linkTo: "/dashboard/trash",
    name: "Trash",
    Icon: FaRegTrashAlt,
    active: false,
  },
];
