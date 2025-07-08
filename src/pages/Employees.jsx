import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  Filter,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreVertical,
  UserCheck,
  UserX,
  Star,
  Award,
  TrendingUp,
  Building,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "employees", label: "Employees", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white/90 backdrop-blur-md shadow-xl border-r border-white/50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HCMS
              </h2>
              <p className="text-sm text-gray-500 font-medium">Human Capital</p>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === "employees";
              return (
                <button
                  key={item.id}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Quick Stats
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Active Users</span>
                <span className="text-sm font-bold text-blue-600">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Departments</span>
                <span className="text-sm font-bold text-purple-600">5</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function Employees() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 lg:ml-0 p-4 lg:p-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-xl transition-all duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Employee Management
              </h1>
              <p className="text-gray-600">
                Manage your team members and their information
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Employee</span>
          </button>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Employee cards will be here */}
        </section>
      </main>
    </div>
  );
}
