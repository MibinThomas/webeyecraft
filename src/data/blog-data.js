
// home 01
import blog_img_1 from "@assets/img/blog/img-1.jpg";
import blog_img_2 from "@assets/img/blog/img-2.jpg";
import blog_img_3 from "@assets/img/blog/img-3.jpg"; 
// home 03
import blog_img_4 from "@assets/img/blog/img-7.jpg";
import blog_img_5 from "@assets/img/blog/img-8.jpg";
import blog_img_6 from "@assets/img/blog/img-9.jpg";
// user
import blog_user_4 from "@assets/img/blog/user.png";
import blog_user_5 from "@assets/img/blog/user.png";
import blog_user_6 from "@assets/img/blog/user.png";

const blog_data = [
    // for home 01 
    {
        id: 1, 
        img: blog_img_1,
        category: "Digital Marketing",
        date: "25 Jun 2024",
        comments: "Comments (03)",
        title: <>Top Digital Marketing Trends in 2024</>,
    },
    {
        id: 2, 
        img: blog_img_2,
        category: "Online Marketing",
        date: "02 Apr 2023",
        comments: "Comments (23)",
        title: <>How to Choose the Best Digital Marketing Agency in Kerala</>,
    },
    {
        id: 3, 
        img: blog_img_3,
        category: "Search Engine Optimization",
        date: "02 Apr 2023",
        comments: "Comments (15)",
        title: <>Boost Your Online Presence with SEO</>,
    },
    // for home 03 
    {
        id: 4, 
        cls: "",
        img: blog_img_4,
        user: blog_user_4,
        user_name: "Mibin",
        category: "Business",
        date: "02 Apr 2023",
        comments: "Comments (03)",
        title: <>Providing solutions for Industrial <br /> men, and restoration.</>,
    },
    {
        id: 5, 
        cls: "active",
        img: blog_img_5,
        user: blog_user_5,
        user_name: "Rasalina",
        category: "Business",
        date: "02 Apr 2023",
        comments: "Comments (23)",
        title: <>Everything melancholy uncommonly but solicitude.</>,
    },
    {
        id: 6, 
        cls: "",
        img: blog_img_6,
        user: blog_user_6,
        user_name: "Hamim",
        category: "Business",
        date: "02 Apr 2023",
        comments: "Comments (15)",
        title: <>Discovery incommode earnestly commanded mentions.</>,
    },
]
export default blog_data
