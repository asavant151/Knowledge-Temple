import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Mail, 
  Bookmark, 
  CreditCard, 
  Settings, 
  LogOut,
  ChevronRight,
  Eye,
  EyeOff,
  Check,
  X
} from 'lucide-react';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">My Account</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center border-b">
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">john@example.com</p>
              </div>
              <nav className="space-y-1 p-4">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <User className="w-5 h-5 mr-3" />
                  <span>Profile</span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'security' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <Lock className="w-5 h-5 mr-3" />
                  <span>Security</span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'courses' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <Bookmark className="w-5 h-5 mr-3" />
                  <span>My Courses</span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'billing' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>Billing</span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Notifications</span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </button>
                <button className="flex items-center w-full p-3 rounded-lg transition-colors hover:bg-red-50 hover:text-red-600">
                  <LogOut className="w-5 h-5 mr-3" />
                  <span>Sign Out</span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                  <p className="text-gray-500">Update your account's profile information</p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="Frontend developer passionate about creating beautiful user experiences."
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Security Settings</h2>
                  <p className="text-gray-500">Manage your account's security settings</p>
                </div>
                <div className="p-6 space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <div className="relative">
                          <input
                            type={showCurrentPassword ? "text" : "password"}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          >
                            {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? "text" : "password"}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <p className="flex items-center mb-1">
                            <span className="inline-flex items-center justify-center w-4 h-4 mr-1 bg-green-100 text-green-800 rounded-full">
                              <Check className="w-3 h-3" />
                            </span>
                            At least 8 characters
                          </p>
                          <p className="flex items-center">
                            <span className="inline-flex items-center justify-center w-4 h-4 mr-1 bg-green-100 text-green-800 rounded-full">
                              <Check className="w-3 h-3" />
                            </span>
                            Contains a number or special character
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                          <Lock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Add extra security to your account</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
                          </p>
                          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                            Enable two-factor authentication
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">My Courses</h2>
                  <p className="text-gray-500">View and manage your enrolled courses</p>
                </div>
                <div className="divide-y">
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <img
                          src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                          alt="Advanced JavaScript"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/4 md:px-6">
                        <h3 className="font-semibold text-lg mb-1">Advanced JavaScript</h3>
                        <p className="text-gray-600 mb-2">Master modern JavaScript frameworks and build interactive web applications.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>Progress: 65%</span>
                          <div className="w-24 h-1.5 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/4 mt-4 md:mt-0 flex justify-end">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          Continue Learning
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <img
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                          alt="Data Science Fundamentals"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/4 md:px-6">
                        <h3 className="font-semibold text-lg mb-1">Data Science Fundamentals</h3>
                        <p className="text-gray-600 mb-2">Learn data analysis, visualization, and machine learning basics.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>Progress: 30%</span>
                          <div className="w-24 h-1.5 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/4 mt-4 md:mt-0 flex justify-end">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          Continue Learning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Notification Preferences</h2>
                  <p className="text-gray-500">Manage how you receive notifications</p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive important updates via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notifications}
                          onChange={() => setNotifications(!notifications)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Newsletter</h3>
                        <p className="text-sm text-gray-500">Get our weekly newsletter with tips and updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={newsletter}
                          onChange={() => setNewsletter(!newsletter)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;