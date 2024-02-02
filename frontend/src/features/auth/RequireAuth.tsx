import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hook";
import { selectCurrentToken } from "./authSlice";

const RequireAuth = () => {
    const token = useAppSelector(selectCurrentToken);

    const location = useLocation();

    return token ? (
        <Outlet />
    ) : (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
};

export default RequireAuth;
