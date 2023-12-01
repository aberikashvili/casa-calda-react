import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    )
}