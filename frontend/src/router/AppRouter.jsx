// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Prueva from "../pages/prueva.jsx"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/prueva" element={<Prueva />} />

                {/* protegida */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;