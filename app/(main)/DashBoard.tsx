"use client";
import { AppSidebar } from "@/components/app-sidebar";
import DarkMode from "@/components/dark-mode";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import { Chart } from "@/components/Bar-chart";
import { TopChart } from "@/components/TopChart";
import { TotalVisitor } from "@/components/Total-visiot";
import { PieCharts } from "@/components/Pie-chart";
export default function DashBooard() {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  console.log(selectedMenu);
  return (
    <div className="flex w-full h-screen">
      <div>
        <SidebarProvider>
          <AppSidebar onMenuClick={setSelectedMenu} />
          <SidebarTrigger />
        </SidebarProvider>
      </div>

      <div className="flex-1 relative">
        <div className="absolute top-4 right-4 z-50">
          <DarkMode />
        </div>

        <div className="w-full h-full flex justify-center pt-20">
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {/* <h2 className="text-2xl font-bold text-center">{selectedMenu}</h2> */}

            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50">
                <Chart />
              </div>
              <div className="aspect-video rounded-xl bg-muted/50">
                <TotalVisitor />
              </div>
              <div className="aspect-video rounded-xl bg-muted/50">
                <PieCharts />
              </div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <TopChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
