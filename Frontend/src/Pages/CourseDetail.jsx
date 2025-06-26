import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Star,
  ChevronRight,
  Check,
  Play,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const CourseDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  // Course data
  const course = {
    title: "Advanced JavaScript Masterclass",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviews: 1245,
    students: 8560,
    duration: "32 hours",
    lastUpdated: "June 2023",
    price: "$149",
    discountPrice: "$99",
    previewVideo: "https://www.youtube.com/watch?v=YwsOCN8woA8",
    description:
      "Master modern JavaScript frameworks and build interactive web applications with this comprehensive course. Learn from industry experts and gain hands-on experience with real-world projects.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    instructorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    instructorBio:
      "Senior JavaScript Developer with 10+ years of experience working at Google and Facebook. Specializes in React and Node.js.",
    requirements: [
      "Basic understanding of HTML & CSS",
      "Fundamental JavaScript knowledge",
      "Computer with internet access",
    ],
    whatYoullLearn: [
      "Master modern ES6+ JavaScript features",
      "Build complex applications with React",
      "Work with APIs and asynchronous JavaScript",
      "Implement state management solutions",
      "Debug and optimize JavaScript code",
      "Deploy production-ready applications",
    ],
    curriculum: [
      {
        section: "Getting Started",
        lectures: [
          { title: "Course Introduction", duration: "12:45", type: "video" },
          {
            title: "Setting Up Your Environment",
            duration: "18:30",
            type: "video",
          },
          {
            title: "JavaScript Fundamentals Review",
            duration: "25:15",
            type: "video",
          },
          {
            title: "Exercise: Basic JS Challenges",
            duration: "Practice",
            type: "exercise",
          },
        ],
      },
      {
        section: "Modern JavaScript",
        lectures: [
          {
            title: "ES6+ Features Deep Dive",
            duration: "42:20",
            type: "video",
          },
          { title: "Working with Modules", duration: "28:10", type: "video" },
          {
            title: "Asynchronous JavaScript",
            duration: "35:45",
            type: "video",
          },
          {
            title: "Exercise: Async Challenges",
            duration: "Practice",
            type: "exercise",
          },
        ],
      },
      // More sections would be added here
    ],
  };

  // Tab content components
  const TabContent = ({ tab }) => {
    switch (tab) {
      case "overview":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <p className="text-gray-700 mb-6">{course.description}</p>

            <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {course.whatYoullLearn.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3">Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        );
      case "curriculum":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-gray-700 mb-6">
              This course contains{" "}
              {course.curriculum.reduce(
                (acc, section) => acc + section.lectures.length,
                0
              )}{" "}
              lectures across {course.curriculum.length} sections.
            </p>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {course.curriculum.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-gray-500 mr-3 transition-transform" />
                      <h4 className="font-medium">{section.section}</h4>
                    </div>
                    <span className="text-sm text-gray-500">
                      {section.lectures.length} lectures • 42 min
                    </span>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {section.lectures.map((lecture, lectureIndex) => (
                      <div
                        key={lectureIndex}
                        className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 pl-12"
                      >
                        <div className="flex items-center">
                          {lecture.type === "video" ? (
                            <Play className="w-4 h-4 text-gray-400 mr-3" />
                          ) : (
                            <BookOpen className="w-4 h-4 text-gray-400 mr-3" />
                          )}
                          <span>{lecture.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {lecture.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "reviews":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <span className="text-4xl font-bold mr-2">{course.rating}</span>
                <div className="flex flex-col">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Course Rating</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="w-16 text-sm text-gray-500">5 star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="flex items-center mb-1">
                  <span className="w-16 text-sm text-gray-500">4 star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">10%</span>
                </div>
                <div className="flex items-center mb-1">
                  <span className="w-16 text-sm text-gray-500">3 star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "3%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">3%</span>
                </div>
                <div className="flex items-center mb-1">
                  <span className="w-16 text-sm text-gray-500">2 star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "1%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">1%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm text-gray-500">1 star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "1%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">1%</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        review % 2 === 0 ? "women" : "men"
                      }/${30 + review}.jpg`}
                      alt="Reviewer"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">
                        {review % 2 === 0 ? "Emily Johnson" : "Michael Smith"}
                      </h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < (review === 1 ? 5 : review === 2 ? 4 : 3)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">
                          {review} week ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {review === 1
                      ? "This course completely transformed my understanding of JavaScript. The instructor explains complex concepts in a way that's easy to understand."
                      : review === 2
                      ? "Very comprehensive course with lots of practical examples. I've already been able to apply what I learned at work."
                      : "Good content overall, though some sections could be more detailed."}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-6 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition duration-300">
              Load More Reviews
            </button>
          </div>
        );
      case "instructor":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">About the Instructor</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-shrink-0">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{course.instructor}</h3>
                <p className="text-gray-600 mb-4">{course.instructorBio}</p>
                <div className="flex items-center text-gray-500">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-semibold text-gray-900 mr-2">
                    {course.rating} Instructor Rating
                  </span>
                  <span className="mr-4">•</span>
                  <span>{course.reviews.toLocaleString()} Reviews</span>
                  <span className="mx-4">•</span>
                  <span>{course.students.toLocaleString()} Students</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              More Courses by {course.instructor.split(" ")[0]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((courseItem) => (
                <div
                  key={courseItem}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100"></div>
                  <div className="p-4">
                    <h4 className="font-medium mb-1">
                      React Masterclass {courseItem === 2 ? "with Hooks" : ""}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{courseItem === 1 ? "28 hours" : "35 hours"}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {courseItem === 1 ? "Beginner" : "Intermediate"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">
                        ${courseItem === 1 ? "129" : "149"}
                      </span>
                      {courseItem === 1 && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          $179
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handlePlayPreview = () => {
    setIsPlaying(true);
    setShowPreview(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowPreview(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Course Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>Courses</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Programming</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-blue-600">JavaScript</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {course.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(course.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{course.rating}</span>
              <span className="text-gray-500 ml-1">
                ({course.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="flex items-center text-gray-500">
              <Users className="w-5 h-5 mr-1" />
              <span>{course.students.toLocaleString()} students</span>
            </div>

            <div className="flex items-center text-gray-500">
              <Clock className="w-5 h-5 mr-1" />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center text-gray-500">
              <span>Updated {course.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Course Preview */}
            <div className="bg-black rounded-xl overflow-hidden course-video mb-8">
              <div className="aspect-w-16 aspect-h-9 relative">
                {showPreview ? (
                  <>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={handlePlayPreview}
                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all"
                      >
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md">
                      Preview this course
                    </div>
                  </>
                ) : (
                  <ReactPlayer
                    url={course.previewVideo}
                    playing={isPlaying}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={handleVideoEnd}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload", // Disable download option
                        },
                      },
                    }}
                  />
                )}
              </div>
            </div>

            {/* Course Tabs */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-4 px-6 border-b-2 font-medium whitespace-nowrap transition-colors ${
                      activeTab === "overview"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("curriculum")}
                    className={`py-4 px-6 border-b-2 font-medium whitespace-nowrap transition-colors ${
                      activeTab === "curriculum"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Curriculum
                    <span className="ml-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded">
                      {course.curriculum.reduce(
                        (acc, section) => acc + section.lectures.length,
                        0
                      )}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`py-4 px-6 border-b-2 font-medium whitespace-nowrap transition-colors ${
                      activeTab === "reviews"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Reviews
                    <span className="ml-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded">
                      {course.reviews.toLocaleString()}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("instructor")}
                    className={`py-4 px-6 border-b-2 font-medium whitespace-nowrap transition-colors ${
                      activeTab === "instructor"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Instructor
                  </button>
                </nav>
              </div>

              <div className="p-6">
                <TabContent tab={activeTab} />
              </div>
            </div>

            {/* Instructor Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Instructor</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{course.instructor}</h3>
                  <p className="text-gray-600 mb-4">{course.instructorBio}</p>
                  <div className="flex items-center text-gray-500">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-semibold text-gray-900 mr-2">
                      {course.rating} Instructor Rating
                    </span>
                    <span className="mr-4">•</span>
                    <span>{course.reviews.toLocaleString()} Reviews</span>
                    <span className="mx-4">•</span>
                    <span>{course.students.toLocaleString()} Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold">
                      {course.discountPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {course.price}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded ml-auto">
                      33% OFF
                    </span>
                  </div>

                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition duration-300"
                  >
                    Enroll Now
                  </button>

                  <button
                    onClick={() => navigate("/wishlist")}
                    className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-4 rounded-lg mb-6 transition duration-300"
                  >
                    Add to Wishlist
                  </button>

                  <h3 className="font-semibold mb-3">This course includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{course.duration} on-demand video</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Download className="w-5 h-5 text-gray-500 mr-3" />
                      <span>12 downloadable resources</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-gray-500 mr-3" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <BookOpen className="w-5 h-5 text-gray-500 mr-3" />
                      <span>Full lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Share Course */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 p-6">
                <h3 className="font-semibold mb-3">Share this course</h3>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-400 flex items-center justify-center hover:bg-blue-200 transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-red-500 flex items-center justify-center hover:bg-blue-200 transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-200 transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
