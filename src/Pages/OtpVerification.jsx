import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify OTP logic here
    console.log(otp.join(''));
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          OTP Verification
        </h2>
        {!isVerified ? (
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the 6-digit code sent to your email
          </p>
        ) : (
          <p className="mt-2 text-center text-sm text-green-600">
            OTP verified successfully!
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10">
          {!isVerified ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  6-digit OTP Code
                </label>
                <div className="flex justify-between space-x-2">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full h-14 text-center text-2xl border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Verify OTP
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">OTP Verified!</h3>
              <div className="mt-2 text-sm text-gray-600">
                <p>You can now reset your password</p>
              </div>
              <div className="mt-6">
                <Link
                  to="/reset-password"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset Password
                </Link>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <button className="font-medium text-blue-600 hover:text-blue-500 text-sm">
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;