import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setError(null);
        const response = await axios.post(
          'http://localhost:5000/api/auth/forgot-password',
          {
            email: values.email,
          }
        );
        
        if (response.data) {
          setIsSubmitted(true);
          localStorage.setItem('email', values.email);
          toast.success(response.data.message || 'Password reset link sent successfully!');
          navigate('/otp-verification');
          
        }
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            'Failed to send reset link'
        );
        toast.success(err.response?.data?.message || 'Failed to send reset link');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forgot your password?
        </h2>
        {!isSubmitted ? (
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email to receive a password reset link
          </p>
        ) : (
          <p className="mt-2 text-center text-sm text-green-600">
            Password reset link has been sent to your email
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10">
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`py-3 pl-10 block w-full border ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    } rounded-md`}
                    placeholder="you@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
                ) : null}
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">{error}</h3>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formik.isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Check your email</h3>
              <div className="mt-2 text-sm text-gray-600">
                <p>We've sent a password reset link to {formik.values.email}</p>
              </div>
              <div className="mt-6">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back to login
                </Link>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500 text-sm"
            >
              Remember your password? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;