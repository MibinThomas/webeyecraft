import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: "",
  },   
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",
    link: "/service",
    active: "",
  }, 
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "/about",
    active: "",
    sub_menus: [
      // { link: "/portfolio", title: "Portfolio" },
      // { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" },
      { link: "/career", title: "Careers" },  
      // { link: "/team-details", title: "Team Details" },
      // { link: "/404", title: "404" }, 
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blogs",
    link: "/home",
    active: "",
  }, 
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
