import { Outlet } from "react-router";
import { AddressDetailProvider } from "~/lib/detail-context";

export default function AppLayout() {
  return (
    <AddressDetailProvider>
      <Outlet />
    </AddressDetailProvider>
  );
}
