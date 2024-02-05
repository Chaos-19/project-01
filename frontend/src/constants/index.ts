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
    setsChair,
    design1,
    design2,
    design3,
    blog1,
    blog2,
    blog3,
    MapPin,
    phoneold,
    AlarmClock
} from "../assets/index";

export const navLinks: {}[] = [
    {
        title: "home",
        link: "/"
    },
    {
        title: "products",
        link: "/products",
       
    },
    {
        title: "contact",
        link: "/contact",
       
    },
    {
        title: "about",
        link: "/contact",
        
    },
   
];

export const navLinksAdmin: {}[] = [
    {
        title: "home",
        link: "/"
    },
    {
        title: "products",
        link: "/products",
       
    },
    {
        title: "product List",
        link: "/product/list",
       
    },
    {
        title: "Add product",
        link: "/product/add",
        
    },
        {
            title: "Orders",
            link: "/order/list",
           
        },
   
];


export const headerSlide: Object[] = [
    {
        title: "Elfegne Furniture",
        body: `Elevate Your Living Space with Timeless Elegance`,
        btn: { text: "Home", color: "yellow", link: "/" },
        bgImage: image1
        
    },
    {
        title: "Unparalleled Craftsmanship",
        body: "Discover Unmatched Comfort and Style in Every Details",
        btn: { text: "product", color: "yellow", link: "https://maps.app.goo.gl/PQBcymAGskJEwAx56" },
        bgImage: image2
    },
    {
        title: "Luxurious Comfort!",
        body: "unlimited choices. unbiteable price free shipping.",
        btn: { text: "Contact us", color: "black", link: "/products" },
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
        icon: sofa,
        prevText:
            "furnishing and complements . discover the design table collection",
        bgImage: image2
    },
    {
        title: "office",
        icon: armchair,
        prevText:
            "which is the best for your home.wardrobes vs walk-in closets",
        bgImage: image3
    },
    {
        title: "bathroom",
        icon: kitchen,
        prevText: "keeping things minimal .creatin your very own bathroom",
        bgImage: image4
    }
];

export const projectsIdea: {}[] = [
    {
        img: design1,
        title: "Creating the Perfect Gallery Wall",
        body: "You’ve finally reached this point in your life- you’ve bought your first home, moved into your very own apartment, moved out of the dorm room or you’re finally downsizing after all of your kids have left the nest.",
        date: "25 mart 2021"
    },
    {
        img: design2,
        title: "Making the Most Out of Your Kids Old Bedroom",
        body: "Immerse yourself in the artistry of our furniture. Meticulously crafted with precision, our pieces showcase the highest level of craftsmanship, ensuring durability and timeless appeal",
        date: "25 mart 2021"
    },
    {
        img: design3,
        title: "Have a look at our new projects!",
        body: "Quality is the cornerstone of our furniture. We source only the finest materials to create pieces that not only look exquisite but also withstand the test of time. Invest in furniture that lasts for generations.",
        date: "25 mart 2021"
    }
];

export const blogPost: {}[] = [
    {
        title: "The 3 Tricks that Quickly Became Rules",
        img: blog1,
        date: "mar 8 2021"
    },
    {
        title: "Decorating When You're Starting Out or Starting Over",
        img: blog2,
        date: "mar 8 2021"
    },
    {
        title: "What does your favorite dining chair say about you?",
        img: blog3,
        date: "mar 8 2021"
    }
];

export const links: {}[] = [
    {
        title: "BROWSE BY",
        links: ["brand", "product", "catagory"]
    },
    {
        title: "Resource",
        links: ["Design", "Project", "sales"]
    },
    {
        title: "our company",
        links: ["About", "news", "contact"]
    }
];
export const contacts: {}[] = [
    {
        Icon: MapPin,
        title: "Where are we?",
        text: "Kirkose Condiminium Ground floor,Addis Abeba,ETHIOPIA"
    },
    {
        Icon: phoneold,
        title: "Call us",
        text: "902066660.954839444"
    },
    {
        Icon: AlarmClock,
        title: "Working hours",
        text: "Monday to saturday From 8am-1pm"
    }
];
