import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegAddressBook,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdOutlineHome } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiWalletBold } from "react-icons/pi";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Service", url: "/service" },
  { title: "Contact", url: "/contact" },
];

const sideLinks = [
  { title: "Dashboard", url: "dashboard", icon: <MdOutlineHome /> },
  { title: "Profile", url: "profile", icon: <BiUser /> },
  { title: "Messages", url: "messages", icon: <HiOutlineChatAlt2 /> },
  { title: "Works", url: "works", icon: <TbLayoutDashboard /> },
  { title: "Wallet", url: "wallet", icon: <PiWalletBold /> },
];

const footerLinks = {
  categories: [
    { title: "Video & Animation", url: "/" },
    { title: "Digital Marketing", url: "/" },
    { title: "Graphics & Design", url: "/" },
    { title: "Programming & Tech", url: "/" },
    { title: "Business", url: "/" },
  ],
  community: [
    { title: "Video & Animation", url: "/" },
    { title: "Digital Marketing", url: "/" },
    { title: "Graphics & Design", url: "/" },
    { title: "Business", url: "/" },
    { title: "Programming & Tech", url: "/" },
  ],
  support: [
    { title: "Business", url: "/" },
    { title: "Graphics & Design", url: "/" },
    { title: "Digital Marketing", url: "/" },
    { title: "Programming & Tech", url: "/" },
    { title: "Video & Animation", url: "/" },
  ],
};

const loginFields = [
  { label: "email", type: "email", name: "email" },
  { label: "password", type: "password", name: "password" },
];

const registerFields = [
  { label: "name", type: "text", name: "name" },
  { label: "email", type: "email", name: "email" },
  { label: "password", type: "password", name: "password" },
  { label: "confirm password", type: "password", name: "confirmPassword" },
];

const contactFields = [
  { label: "your name", type: "text", name: "name" },
  { label: "your email", type: "email", name: "email" },
  {
    label: "subject",
    type: "select",
    name: "subject",
    options: [
      "Feedback",
      "Sponsorship",
      "Pricing related queries",
      "Payment related issue",
      "Review related queries",
      "Other",
    ],
  },
  { label: "message", type: "textarea", name: "message" },
];

const infoLists = [
  {
    accent: "#9b51e0",
    icon: <FaRegAddressBook />,
    heading: "Address",
    body: "Sunview Park, Asansol, Paschim Bardhaman, West Bengal, 713303, India.",
  },
  {
    accent: "#00d084",
    icon: <FaRegEnvelope />,
    heading: "Email",
    body: "contact@workwise.com, support@workwise.com",
  },
  {
    accent: "#F78F0E",
    icon: <FaPhoneAlt />,
    heading: "Contact",
    body: "+91-202-555-0105, +91-202-555-01",
  },
  {
    accent: "#dc3545",
    icon: <FaMapMarkerAlt />,
    heading: "Location",
    body: "Sunview Park, Asansol, Paschim Bardhaman, West Bengal, 713303, India.",
  },
];

const simpleNavRoutes = ["account"];

export {
  navLinks,
  sideLinks,
  footerLinks,
  loginFields,
  registerFields,
  contactFields,
  infoLists,
  simpleNavRoutes,
};
