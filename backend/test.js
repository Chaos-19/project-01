const img1 = "../src/assets/04_product-1.png";
const img2 = "../src/assets/01_product-2.png";
const img3 = "../src/assets/06_product-3.png";
const img4 = "../src/assets/02_product-4.png";
const img5 = "../src/assets/03_product-5.png";
const img6 = "../src/assets/05_product-6.png";

const productList = [
    {
        name: "green Corner",
        price: {
            original: 1499,
            discount: 1099
        },
        image: img1
    },
    {
        name: "Laura",
        price: {
            original: 3999,
            discount: 3499
        },
        image: img2
    },
    {
        name: "Nude",
        price: {
            original: 2999
        },
        image: img3,
        tage: {
            isNew: true
        }
    },
    {
        name: "Aurora",
        price: {
            original: 299
        },
        image: img4
    },
    {
        name: "dining sets",
        price: {
            original: 1999,
            discount: 1499,
            discountPercent: -50
        },
        image: img5
    },
    {
        name: "Seat chair",
        price: {
            original: 895
        },
        image: img6
    }
];
module.exports = productList;
