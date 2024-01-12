import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { RootLayout, Layouts, Main } from "./pages/index";
import { Contact } from "./sections/index";
interface Props {
    // Define your props here
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route
                        index
                        element={<Main />}
                    />
                    <Route element={<Layouts />}>
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
