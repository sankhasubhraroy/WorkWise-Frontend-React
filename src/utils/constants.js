import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegAddressBook,
  FaRegEnvelope,
} from "react-icons/fa";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Service", url: "/service" },
  { title: "Contact", url: "/contact" },
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

export { navLinks, footerLinks, loginFields, registerFields, infoLists };
