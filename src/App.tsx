import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { RootLayout, Main } from "./pages";
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
