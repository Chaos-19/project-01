import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { RootLayout, Layouts, Main } from "./pages/index";
import { Contact, Order } from "./sections/index";
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
                        <Route
                            path="/order"
                            element={<Order />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
