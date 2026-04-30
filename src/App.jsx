import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

// Lazy load semua halaman
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders     = React.lazy(() => import("./pages/Order"));
const Customers  = React.lazy(() => import("./pages/Customers"));
const NotFound   = React.lazy(() => import("./pages/NotFound"));
const Login      = React.lazy(() => import("./pages/auth/Login"));
const Register   = React.lazy(() => import("./pages/auth/Register"));
const Forgot     = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>

                {/* Halaman yang pakai Sidebar + Header */}
                <Route element={<MainLayout />}>
                    <Route path="/"          element={<Dashboard />} />
                    <Route path="/orders"    element={<Orders />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/error/400" element={<NotFound errorCode="400" errorTitle="Bad Request"  errorDescription="Server tidak dapat memahami permintaan Anda." />} />
                    <Route path="/error/401" element={<NotFound errorCode="401" errorTitle="Unauthorized" errorDescription="Anda harus login terlebih dahulu." />} />
                    <Route path="/error/403" element={<NotFound errorCode="403" errorTitle="Forbidden"    errorDescription="Anda tidak memiliki izin untuk mengakses fitur ini." />} />
                </Route>

                {/* Halaman yang pakai card putih (tanpa Sidebar) */}
                <Route element={<AuthLayout />}>
                    <Route path="/login"    element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot"   element={<Forgot />} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Suspense>
    );
}

export default App;