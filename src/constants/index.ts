import { image1, image2, image3, image4 } from "../assets/index";

export const navLinks: {}[] = [
    {
        title: "home",
        link: "/"
    },
    {
        title: "pages",
        link: "/pages",
        submenu: true
    },
    {
        title: "shop",
        link: "/shop",
        submenu: true
    },
    {
        title: "icons",
        link: "/icons",
        submenu: true
    },
    {
        title: "megamenu",
        link: "/megamenu",
        submenu: true
    },
    {
        title: "shortcodes",
        link: "/shortcodes"
    }
];

export const headerSlide: Object[] = [
    {
        title: "modern furniture theme",
        body: `modern  & powerfull template .
        clean design & responsive layout .google font integration `,
        btn: { text: "but the template", color: "yellow" },
        bgImage: image1
    },
    {
        title: "very animate.css friend",
        body: "combine with animate.css. Or just use your own!!. banch of typography effect ",
        btn: { text: "but the template", color: "" },
        bgImage: image2
    },
    {
        title: "mobile ready!",
        body: "unlimited choices. unbiteable price free shipping. furniture catagory icon fonts",
        btn: { text: "get inspired", color: "" },
        bgImage: image3
    }
];
