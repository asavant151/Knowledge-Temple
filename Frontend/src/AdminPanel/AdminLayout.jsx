import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  FileText,
  Settings,
  BarChart2,
  Mail,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: "/admin/dashboard", icon: <LayoutDashboard />, label: "Dashboard" },
    { path: "/admin/users", icon: <Users />, label: "Users" },
    { path: "/admin/courses", icon: <BookOpen />, label: "Courses" },
    // { path: '/admin/instructors', icon: <GraduationCap />, label: 'Instructors' },
    // { path: '/admin/content', icon: <FileText />, label: 'Content' },
    // { path: '/admin/analytics', icon: <BarChart2 />, label: 'Analytics' },
    // { path: '/admin/messages', icon: <MessageSquare />, label: 'Messages' },
    { path: "/admin/settings", icon: <Settings />, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <a href="/admin/dashboard" className="flex items-center space-x-3 group">
              <img
                src="../assets/images/logoweb.jpeg"
                alt="logo"
                className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-md font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Knowledge Temple
              </span>
            </a>
          </div>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <span className="w-5 h-5">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <button className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <Mail className="w-5 h-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              <div className="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
