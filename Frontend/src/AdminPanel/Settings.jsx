import { 
    Save,
    Globe,
    Mail,
    Lock,
  } from 'lucide-react';
  
  const Settings = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        </div>
  
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button className="whitespace-nowrap py-4 px-6 border-b-2 border-blue-500 font-medium text-sm text-blue-600">
                General
              </button>
              <button className="whitespace-nowrap py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Notifications
              </button>
              <button className="whitespace-nowrap py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Security
              </button>
              <button className="whitespace-nowrap py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Billing
              </button>
            </nav>
          </div>
  
          <div className="p-6">
            <div className="space-y-8">
              {/* General Settings */}
              <div>
                <h2 className="text-lg font-medium mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  General Settings
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="site-name" className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                      <input
                        type="text"
                        id="site-name"
                        defaultValue="KnowledgeTemple"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="site-url" className="block text-sm font-medium text-gray-700 mb-1">Site URL</label>
                      <input
                        type="text"
                        id="site-url"
                        defaultValue="https://knowledgetemple.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="site-description" className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
                    <textarea
                      id="site-description"
                      rows={3}
                      defaultValue="Online learning platform with expert-led courses"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                    <select
                      id="timezone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>(UTC-12:00) International Date Line West</option>
                      <option>(UTC-11:00) Coordinated Universal Time-11</option>
                      <option>(UTC-08:00) Pacific Time (US & Canada)</option>
                      <option selected>(UTC+00:00) Coordinated Universal Time</option>
                      <option>(UTC+05:30) India Standard Time</option>
                    </select>
                  </div>
                </div>
              </div>
  
              {/* Email Settings */}
              <div>
                <h2 className="text-lg font-medium mb-6 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Email Settings
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
                      <input
                        type="email"
                        id="admin-email"
                        defaultValue="admin@knowledgetemple.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                      <input
                        type="email"
                        id="contact-email"
                        defaultValue="contact@knowledgetemple.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email-provider" className="block text-sm font-medium text-gray-700 mb-1">Email Provider</label>
                    <select
                      id="email-provider"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>SMTP</option>
                      <option>Mailgun</option>
                      <option selected>SendGrid</option>
                      <option>Amazon SES</option>
                    </select>
                  </div>
                </div>
              </div>
  
              {/* Security Settings */}
              <div>
                <h2 className="text-lg font-medium mb-6 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-blue-600" />
                  Security Settings
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="force-ssl"
                        name="force-ssl"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="force-ssl" className="font-medium text-gray-700">Force SSL/HTTPS</label>
                      <p className="text-gray-500">Redirect all traffic from HTTP to HTTPS</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="brute-force"
                        name="brute-force"
                        type="checkbox"
                        defaultChecked
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="brute-force" className="font-medium text-gray-700">Brute Force Protection</label>
                      <p className="text-gray-500">Limit login attempts to prevent brute force attacks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="two-factor"
                        name="two-factor"
                        type="checkbox"
                        defaultChecked
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="two-factor" className="font-medium text-gray-700">Two-Factor Authentication</label>
                      <p className="text-gray-500">Require 2FA for admin accounts</p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Save Button */}
              <div className="pt-6 border-t border-gray-200 flex justify-end">
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg">
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Settings;