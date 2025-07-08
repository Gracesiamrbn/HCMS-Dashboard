import { Link, useLocation } from "react-router-dom"; // Tambahkan ini

const location = useLocation();

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/" },
  { id: "employees", label: "Employees", icon: Users, path: "/employees" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];
