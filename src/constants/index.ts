import {
    image1,
    image2,
    image3,
    image4,
    sofa,
    armchair,
    chair,
    bookshelf,
    bed,
    bunkBad,
    kitchen,
    nightStand,
    table,
    wardrobe,
    shoecabinet,
    couch,
    greenCorner,
    laura,
    nude,
    aurora,
    diningSet,
    setsChair
} from "../assets/index";

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

export const iconSlider: Object[] = [
    {
        icon: sofa,
        title: "Sofa"
    },
    {
        icon: armchair,
        title: "armchair"
    },
    {
        icon: chair,
        title: "chair"
    },
    {
        icon: bookshelf,
        title: "bookshelf"
    },
    {
        icon: bed,
        title: "bedRoom"
    },
    {
        icon: bunkBad,
        title: "bunkBad"
    },
    {
        icon: table,
        title: "table"
    },
    {
        icon: nightStand,
        title: "night Stand"
    },
    {
        icon: kitchen,
        title: "kitchen"
    },
    {
        icon: wardrobe,
        title: "wardrobe"
    },
    {
        icon: shoecabinet,
        title: "shoe cabinet"
    },
    {
        icon: couch,
        title: "couch"
    }
];

export const productList: {}[] = [
    {
        name: "green Corner",
        price: {
            original: 1499,
            discount: 1099
        },
        image: greenCorner
    },
    {
        name: "Laura",
        price: {
            original: 3999,
            discount: 3499
        },
        image: laura
    },
    {
        name: "Nude",
        price: {
            original: 2999
        },
        image: nude,
        tage: {
            isNew: true
        }
    },
    {
        name: "Aurora",
        price: {
            original: 299
        },
        image: aurora
    },
    {
        name: "dining sets",
        price: {
            original: 1999,
            discount: 1499,
            discountPercent: -50
        },
        image: diningSet
    },
    {
        name: "Seat chair",
        price: {
            original: 895
        },
        image: setsChair
    }
];

export const features: {}[] = [
    {
        title: "bedroom",
        icon: bed,
        prevText: "modern furnishing projects. new furnishing idea",
        bgImage: image1
    },
    {
        title: "living room",
        icon: "",
        prevText:
            "furnishing and complements . discover the design table collection",
        bgImage: image2
    },
    {
        title: "office",
        icon: "",
        prevText:
            "which is the best for your home.wardrobes vs walk-in closets",
        bgImage: image3
    },
    {
        title: "bathroom",
        icon: "",
        prevText: "keeping things minimal .creatin your very own bathroom",
        bgImage: image4
    }
];
