import { useState } from "react";
import { ArtisanLayout } from "./layout/ArtisanLayout";
import { DashboardView } from "./components/artisan/DashboardView";
import { CatalogView } from "./components/artisan/CatalogView";
import { OrdersView } from "./components/artisan/OrdersView";
import { BillingView } from "./components/artisan/BillingView";
import { ArtisanSettingsView } from "./components/artisan/ArtisanSettingsView";

export const SellerDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <ArtisanLayout activePage={activePage} setActivePage={setActivePage}>
      {activePage === "dashboard" && <DashboardView />}
      {activePage === "catalog" && <CatalogView />}
      {activePage === "orders" && <OrdersView />}
      {activePage === "billing" && <BillingView />}
      {activePage === "settings" && <ArtisanSettingsView />}
    </ArtisanLayout>
  );
};