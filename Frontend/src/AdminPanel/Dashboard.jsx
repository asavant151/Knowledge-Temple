import { 
    Users, 
    BookOpen, 
    DollarSign, 
    BarChart2,
    TrendingUp,
    Clock,
    MessageSquare
  } from 'lucide-react';
  
  const Dashboard = () => {
    const stats = [
      { title: "Total Students", value: "12,458", icon: <Users />, change: "+12%", trend: "up" },
      { title: "Active Courses", value: "143", icon: <BookOpen />, change: "+5%", trend: "up" },
      { title: "Instructors", value: "87", icon: <Users />, change: "+3%", trend: "up" },
      { title: "Revenue", value: "$48,256", icon: <DollarSign />, change: "+18%", trend: "up" },
    ];
  
    const recentActivities = [
      { id: 1, user: "Michael Chen", action: "enrolled in Advanced JavaScript", time: "10 min ago" },
      { id: 2, user: "Emma Rodriguez", action: "completed UX Design course", time: "25 min ago" },
      { id: 3, user: "Sarah Johnson", action: "uploaded new course content", time: "1 hour ago" },
      { id: 4, user: "David Wilson", action: "requested instructor access", time: "2 hours ago" },
    ];
  
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
  
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-gray-500 text-sm ml-2">vs last period</span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Enrollment Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Enrollment Analytics</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-lg">Courses</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg">Users</button>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="w-12 h-12 mx-auto text-gray-300" />
                <p className="text-gray-500 mt-2">Chart will be displayed here</p>
              </div>
            </div>
          </div>
  
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Completion Rate</p>
                    <p className="text-xs text-gray-500">All courses</p>
                  </div>
                </div>
                <span className="font-bold">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Avg. Time</p>
                    <p className="text-xs text-gray-500">Per course</p>
                  </div>
                </div>
                <span className="font-bold">14h 22m</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Engagement</p>
                    <p className="text-xs text-gray-500">Discussions</p>
                  </div>
                </div>
                <span className="font-bold">1,243</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.user} <span className="font-normal text-gray-600">{activity.action}</span></p>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;