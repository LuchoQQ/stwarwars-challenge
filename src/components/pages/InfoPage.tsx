import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "../SidebarLayout";
import NavbarInfo from "../sections/NavbarInfo";

const InfoPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { title: "Personas", path: "/info/people" },
    { title: "Planetas", path: "/info/planets" },
    { title: "Naves", path: "/info/starships" },
  ];

  return (
    <div className="flex h-screen flex-col bg-zinc-100">
      {/* Pasamos el estado y función de toggle a NavbarInfo */}
      <NavbarInfo toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <SidebarLayout items={menuItems} isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InfoPage;