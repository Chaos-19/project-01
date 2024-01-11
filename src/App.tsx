import Navbar from "./components/Navbar";

import {
    Header,
    Product,
    Features,
    Project,
    OurStory,
    Blog,
    Footer
} from "./sections";

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
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
