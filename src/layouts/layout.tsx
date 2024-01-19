import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="2xl:ml-[160px] 2xl:w-[1960px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
