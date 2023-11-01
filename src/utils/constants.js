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

export { navLinks, footerLinks, loginFields, registerFields };
