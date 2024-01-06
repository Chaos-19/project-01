import Navbar from "./components/Navbar";
import Header from "./sections/Header";
import Product from "./sections/Product";

interface Props {
    // Define your props here
}

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Product />
        </div>
    );
};

export default App;
