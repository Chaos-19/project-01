import Navbar from "./components/Navbar";

import { Header, Product, Features } from "./sections";

interface Props {
    // Define your props here
}

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Product />
            <Features />
        </div>
    );
};

export default App;
