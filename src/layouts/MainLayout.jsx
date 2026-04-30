import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
    return (
        <div className="bg-gray-100 min-h-screen flex w-full">
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex-1 p-4 overflow-y-auto">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}