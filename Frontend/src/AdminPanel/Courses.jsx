import {
  BookOpen,
  Search,
  Filter,
  ChevronDown,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Masterclass",
      category: "Web Development",
      students: 1250,
      status: "Published",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      category: "Data Science",
      students: 890,
      status: "Published",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      category: "Design",
      students: 2100,
      status: "Draft",
      price: "$179",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Python for Automation",
      category: "Programming",
      students: 750,
      status: "Published",
      price: "$119",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Courses Management</h1>
        <button
          onClick={() => navigate("/admin/add-course")}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Course</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
              <span>Category: All</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
              <span>Status: All</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    course.status === "Published"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {course.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {course.category}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-500">Students</p>
                  <p className="font-medium">
                    {course.students.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">{course.price}</p>
                </div>
              </div>

              <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </button>
                <div className="flex space-x-3">
                  <button className="text-gray-400 hover:text-yellow-600">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Courses;
