import { User, Settings, ShoppingBag, Heart, LogOut } from "lucide-react";
export const Navigation_Header_Links = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Jackets", path: "/jackets" },
    { label: "T-Shirts", path: "/t-shirts" },
    { label: "Accessories", path: "/accessories" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
];

export const User_Links = [
    { label: "Profile", icon: User },
    { label: "Settings", icon: Settings },
    { label: "Orders", icon: ShoppingBag },
    { label: "Wishlist", icon: Heart },
    { label: "Logout", icon: LogOut },
];

export const Animated_Hero_Cards = [
    {
        image: 'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Custom Mug',
        price: '$12.99',
        style: 'animation-all duration-300 h-40',
    },{
        image: 'https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Premium Hoodies',
        price: '$39.99',
        style: 'animation-all duration-400 h-60',
    },{
        image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Custom T-Shirt',
        price: '$19.99',
        style: 'animation-all delay-800 duration-1000 h-80',
    },
];

export const Users_Images = ['https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=600'];