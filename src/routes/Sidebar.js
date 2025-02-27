import { FaUsers } from "react-icons/fa6";
import { FaCodePullRequest } from "react-icons/fa6";

const SideBarRoute = [
  {
    path: "/app/users",
    img: <FaUsers />,
    name: "Users",
    heading: "",
  },
  {
    path: "/app/request",
    img: <FaCodePullRequest />,
    name: "Request",
    heading: "",
  },
];

export default SideBarRoute;
