import Navbar from "./components/Navbar";

import { Header, Product, Features, Project ,OurStory} from "./sections";

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
            <OurStory />
        </div>
    );
};

export default App;
