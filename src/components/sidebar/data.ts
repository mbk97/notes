import { TfiWrite } from "react-icons/tfi";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export const sideBarData = [
  {
    id: 1,
    linkTo: "/",
    name: "Notes",
    Icon: TfiWrite,
    active: true,
  },
  {
    id: 2,
    linkTo: "/reminders",
    name: "Reminders",
    Icon: AiOutlineBell,
    active: false,
  },
  {
    id: 3,
    linkTo: "/archive",
    name: "Archive",
    Icon: MdOutlineArchive,
    active: false,
  },
  {
    id: 4,
    linkTo: "/trash",
    name: "Trash",
    Icon: FaRegTrashAlt,
    active: false,
  },
];
