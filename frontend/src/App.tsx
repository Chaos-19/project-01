import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { RootLayout, Layouts, Main } from "./pages/index";
import { Contact, Order } from "./sections/index";

import {
    AddProductForm,
    Notification,
    ProductList,
    EditeProduct,
    Orders
} from "./components/admin/index";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    {/*public Route*/}
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
                            path="/product/order/:productId"
                            element={<Order />}
                        />

                        {/*private route*/}
                        <Route
                            path="/product/list"
                            element={<ProductList />}
                        />
                        <Route
                            path="/product/add"
                            element={<AddProductForm />}
                        />
                        <Route
                            path="/product/edite/:id"
                            element={<EditeProduct />}
                        />
                        <Route
                            path="/order/list"
                            element={<Orders />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
