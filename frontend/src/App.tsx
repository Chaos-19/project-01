import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout, Layouts, Main, PageNotFound } from "./pages/index";
import { Contact, Order, Product } from "./sections/index";
import Login from "./features/auth/Login";

import {
    AddProductForm,
    ProductList,
    EditeProduct,
    Orders
} from "./components/admin/index";

import RequireAuth from "./features/auth/RequireAuth";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    {/*public Route*/}
                    <Route
                        path="/login"
                        element={<Login />}
                    />
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
                        <Route
                            path="/products"
                            element={<Product />}
                        />

                        {/*private route*/}

                        <Route element={<RequireAuth />}>
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
                    <Route
                        path="*"
                        element={<PageNotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
