import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";

const Account = () => {
  return (
    <main className="bg-light">
      <section className="container py-28 lg:flex">
        <Sidebar />
        <Outlet />
      </section>
    </main>
  );
};

export default Account;
