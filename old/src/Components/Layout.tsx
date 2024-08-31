import { Outlet } from "react-router-dom";
import HeaderContent from "./HeaderContent";

export default function Layout() {
  return (
    <div>
      <HeaderContent />
      <Outlet />
    </div>
  );
}
