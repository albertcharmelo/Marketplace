import React, { ReactNode } from "react";
import Menu from "@/components/panel/Menu";

interface PanelLayoutProps {
  children: ReactNode;
  menuSelection?: string;
}

const PanelLayout = ({ children, menuSelection }: PanelLayoutProps) => {
  return (
    <div>
      <Menu menuSelection={menuSelection ? menuSelection : "inicio"} />
      <main
        className="
        flex flex-col
        gap-4
        p-4
        w-screen
        h-screen
        overflow-y-auto
        overflow-x-hidden
        bg-slate-100
      ">
        {children}
      </main>
    </div>
  );
};

export default PanelLayout;
