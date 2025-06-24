import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  // Assuming we have the email from location state or props
  // For this example, I'll use the email from your API body
  const email = localStorage.getItem('email');

  const formik = useFormik({
    initialValues: {
      otp: ['', '', '', '', '', '']
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().required('Digit is required').matches(/^[0-9]$/, 'Must be a digit'))
        .length(6, 'OTP must be 6 digits')
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setError('');
      
      try {
        const otpCode = values.otp.join('');
        
        const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
          email: email,
          otp: parseInt(otpCode, 10)
        });

        if (response.data) {
          localStorage.setItem('resetToken', response.data.resetToken);
          setIsVerified(true);
          toast.success('OTP resent successfully!');
          navigate('/reset-password');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred during verification');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...formik.values.otp];
    newOtp[index] = value.substring(value.length - 1);
    formik.setFieldValue('otp', newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/resend-otp', {
        email: email
      });
      toast.success('OTP resent successfully!');
      navigate('/reset-password');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend OTP');
    }
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
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          {!isVerified ? (
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  6-digit OTP Code
                </label>
                <div className="flex justify-between space-x-2">
                  {formik.values.otp.map((data, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      name={`otp[${index}]`}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e, index)}
                      onBlur={formik.handleBlur}
                      className={`w-full h-14 text-center text-2xl border ${
                        formik.errors.otp?.[index] && formik.touched.otp?.[index]
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
                {formik.errors.otp && formik.touched.otp && (
                  <div className="mt-1 text-sm text-red-600">
                    {typeof formik.errors.otp === 'string' 
                      ? formik.errors.otp 
                      : 'Please enter all 6 digits'}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Verifying...' : 'Verify OTP'}
                  {!isSubmitting && (
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
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
            <button 
              type="button"
              onClick={handleResendOtp}
              className="font-medium text-blue-600 hover:text-blue-500 text-sm"
              disabled={isVerified}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;