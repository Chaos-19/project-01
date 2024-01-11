import Navbar from "./components/Navbar";

import { Header, Product, Features, Project } from "./sections";

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
            <Project />
        </div>
    );
};

export default App;
