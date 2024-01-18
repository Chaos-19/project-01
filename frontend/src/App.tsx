import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { RootLayout, Layouts, Main } from "./pages/index";
import { Contact, Order } from "./sections/index";

import {
    AddProductForm,
    Notification,
    ProductList
} from "./components/admin/index";

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
                        <Route
                            path="/product/list"
                            element={<ProductList />}
                        />
                        <Route
                            path="/product/add"
                            element={<AddProductForm />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
