import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Upload,
  X,
  BookOpen,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Users,
  ChevronDown,
  Check
} from 'lucide-react';

const AddCourse = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    category: '',
    description: '',
    duration: '',
    price: '',
    language: '',
    level: '',
    thumbnail: null,
    previewVideo: null,
    objectives: [''],
    requirements: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...courseData[field]];
    newArray[index] = value;
    setCourseData(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const addArrayItem = (field) => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    const newArray = courseData[field].filter((_, i) => i !== index);
    setCourseData(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setCourseData(prev => ({
        ...prev,
        [field]: file
      }));
    }
  };

  const removeFile = (field) => {
    setCourseData(prev => ({
      ...prev,
      [field]: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Course Data:', courseData);
    navigate('/courses');
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate('/admin/courses')}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Courses
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Add New Course</h1>
        <div className="w-24"></div> {/* Spacer for alignment */}
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
          
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                {step > stepNumber ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <span className={`mt-2 text-sm ${step >= stepNumber ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
                {stepNumber === 1 && 'Basic Info'}
                {stepNumber === 2 && 'Course Content'}
                {stepNumber === 3 && 'Pricing'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
              Course Information
            </h2>
            
            {/* Course Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Title*</label>
              <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleChange}
                placeholder="e.g. Advanced JavaScript Masterclass"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Category and Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                <div className="relative">
                  <select
                    name="category"
                    value={courseData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Design">Design</option>
                    <option value="Programming">Programming</option>
                    <option value="Business">Business</option>
                  </select>
                  <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Level*</label>
                <div className="relative">
                  <select
                    name="level"
                    value={courseData.level}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select difficulty level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe what students will learn in this course..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Thumbnail*</label>
              {courseData.thumbnail ? (
                <div className="mt-1 flex items-center">
                  <img 
                    src={URL.createObjectURL(courseData.thumbnail)} 
                    alt="Thumbnail preview" 
                    className="h-32 w-auto rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeFile('thumbnail')}
                    className="ml-4 p-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              ) : (
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <div className="flex justify-center">
                      <Upload className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input 
                          type="file" 
                          className="sr-only" 
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'thumbnail')}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Preview Video */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preview Video</label>
              {courseData.previewVideo ? (
                <div className="mt-1 flex items-center">
                  <video 
                    src={URL.createObjectURL(courseData.previewVideo)} 
                    controls
                    className="h-32 w-auto rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeFile('previewVideo')}
                    className="ml-4 p-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              ) : (
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <div className="flex justify-center">
                      <Upload className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input 
                          type="file" 
                          className="sr-only" 
                          accept="video/*"
                          onChange={(e) => handleFileUpload(e, 'previewVideo')}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">MP4 up to 10MB</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Learning Objectives */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Learning Objectives</label>
              <div className="space-y-2">
                {courseData.objectives.map((objective, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      value={objective}
                      onChange={(e) => handleArrayChange('objectives', index, e.target.value)}
                      placeholder="What will students learn?"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {courseData.objectives.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('objectives', index)}
                        className="ml-2 p-1 text-gray-500 hover:text-red-500"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('objectives')}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Objective
                </button>
              </div>
            </div>
            
            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
              <div className="space-y-2">
                {courseData.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      value={requirement}
                      onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                      placeholder="What do students need to know?"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {courseData.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('requirements', index)}
                        className="ml-2 p-1 text-gray-500 hover:text-red-500"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('requirements')}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Requirement
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              Course Content
            </h2>
            
            {/* Sections will be added here */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500">Course sections and lectures will be added in a separate interface</p>
              <p className="text-sm text-gray-400 mt-2">You'll be able to organize your content after saving the basic information</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <DollarSign className="w-6 h-6 mr-3 text-blue-600" />
              Pricing & Settings
            </h2>
            
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  name="price"
                  value={courseData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">USD</span>
                </div>
              </div>
            </div>
            
            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Duration (hours)*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  name="duration"
                  value={courseData.duration}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  className="block w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Language*</label>
              <div className="relative">
                <select
                  name="language"
                  value={courseData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save Course
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddCourse;