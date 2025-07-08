import React, { useState, useEffect } from "react";

import {
  Users,
  UserCheck,
  Calendar,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  AlertCircle,
  Menu,
  X,
  Home,
  Settings,
  Bell,
  Search,
  User,
  Building,
  FileText,
  BarChart3,
  TrendingDown,
} from "lucide-react";

// Header Component
function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
        </div>
      </div>

      {/* Notifications dropdown */}
      {showNotifications && (
        <div className="absolute right-6 top-16 bg-white rounded-lg shadow-lg border border-gray-200 w-80 z-50">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Notifications</h3>
          </div>
          <div className="max-h-64 overflow-y-auto">
            <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
              <p className="text-sm font-medium text-gray-800">
                New employee joined
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sarah Johnson joined the Engineering team
              </p>
            </div>
            <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
              <p className="text-sm font-medium text-gray-800">
                Leave request pending
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Mike Chen submitted a leave request
              </p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <p className="text-sm font-medium text-gray-800">
                Performance review due
              </p>
              <p className="text-xs text-gray-500 mt-1">
                5 employees need performance reviews
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Sidebar Component
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "employees", label: "Employees", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`bg-gray-900 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          {!isCollapsed && <h1 className="text-xl font-bold">HCMS</h1>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800 transition-colors ${
              activeMenu === item.id
                ? "bg-gray-800 border-r-2 border-blue-500"
                : ""
            }`}
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {!isCollapsed && <div className="absolute bottom-4 left-4 right-4"></div>}
    </div>
  );
}

// Dashboard Statistics Cards
function StatCard({ title, value, icon: Icon, change, changeType, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          <div className="flex items-center">
            {changeType === "up" ? (
              <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                changeType === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color} shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}

// Recent Activity Component
function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "Sarah Johnson",
      action: "Checked in",
      time: "9:00 AM",
      type: "checkin",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      user: "Mike Chen",
      action: "Submitted leave request",
      time: "8:45 AM",
      type: "leave",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 3,
      user: "Emily Davis",
      action: "Completed performance review",
      time: "8:30 AM",
      type: "review",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 4,
      user: "John Smith",
      action: "Updated profile",
      time: "8:15 AM",
      type: "profile",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 5,
      user: "Lisa Wang",
      action: "Checked out",
      time: "8:00 AM",
      type: "checkout",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-8 h-8 rounded-full"
            />
            <div
              className={`w-2 h-2 rounded-full ${
                activity.type === "checkin"
                  ? "bg-green-500"
                  : activity.type === "leave"
                  ? "bg-yellow-500"
                  : activity.type === "review"
                  ? "bg-blue-500"
                  : activity.type === "profile"
                  ? "bg-purple-500"
                  : "bg-red-500"
              }`}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                {activity.user}
              </p>
              <p className="text-xs text-gray-500">{activity.action}</p>
            </div>
            <span className="text-xs text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Department Overview Component
function DepartmentOverview() {
  const departments = [
    {
      name: "Engineering",
      employees: 45,
      present: 42,
      absent: 3,
      color: "bg-blue-500",
      percentage: 93.3,
    },
    {
      name: "Marketing",
      employees: 28,
      present: 26,
      absent: 2,
      color: "bg-purple-500",
      percentage: 92.9,
    },
    {
      name: "Sales",
      employees: 35,
      present: 33,
      absent: 2,
      color: "bg-green-500",
      percentage: 94.3,
    },
    {
      name: "HR",
      employees: 12,
      present: 12,
      absent: 0,
      color: "bg-yellow-500",
      percentage: 100,
    },
    {
      name: "Finance",
      employees: 18,
      present: 17,
      absent: 1,
      color: "bg-red-500",
      percentage: 94.4,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Department Overview
        </h3>
        <Building className="w-5 h-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${dept.color}`} />
                <span className="font-medium text-gray-800">{dept.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {dept.percentage}%
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Total: {dept.employees}</span>
                <span className="text-green-600">Present: {dept.present}</span>
                <span className="text-red-600">Absent: {dept.absent}</span>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${dept.color}`}
                style={{ width: `${dept.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Header />

        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Welcome to HCMS Dashboard
                </h1>
                <p className="text-blue-100 mb-4">
                  Selamat datang di sistem manajemen SDM. Kelola karyawan,
                  absensi, dan performa dengan mudah.
                </p>
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {currentTime.toLocaleTimeString("id-ID")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {currentTime.toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-sm text-blue-100">Today's Attendance</p>
                    <p className="text-2xl font-bold">96%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Employees"
              value="142"
              icon={Users}
              change="+12%"
              changeType="up"
              color="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <StatCard
              title="Present Today"
              value="136"
              icon={UserCheck}
              change="+5%"
              changeType="up"
              color="bg-gradient-to-r from-green-500 to-green-600"
            />
            <StatCard
              title="On Leave"
              value="8"
              icon={Calendar}
              change="-2%"
              changeType="down"
              color="bg-gradient-to-r from-yellow-500 to-yellow-600"
            />
            <StatCard
              title="Performance Score"
              value="92%"
              icon={Award}
              change="+3%"
              changeType="up"
              color="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DepartmentOverview />
            </div>
            <div>
              <RecentActivity />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-200 hover:scale-105 hover:shadow-md">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-800">Add Employee</span>
              </button>
              <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-200 hover:scale-105 hover:shadow-md">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">
                  View Attendance
                </span>
              </button>
              <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all duration-200 hover:scale-105 hover:shadow-md">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-purple-800">
                  Process Payroll
                </span>
              </button>
              <button className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-200 hover:scale-105 hover:shadow-md">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-800">View Reports</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
