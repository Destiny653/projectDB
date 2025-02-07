 'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Loader, 
  CheckCircle,
  Key,
  UserCircle
} from 'lucide-react';
import { URL } from '../URL/URL';

const API_URL = URL;

// Validation functions
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const LoginForm = () => {
  const router = useRouter();
  
  // Form state
  const [formState, setFormState] = useState({
    view: 'login',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    showPassword: false,
    rememberMe: false,
    loading: false,
    otp: ['', '', '', '', '', ''],
    error: null,
    success: null,
    isVerified: false
  });

  // OTP handlers
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    
    setFormState(prev => {
      const newOtp = [...prev.otp];
      newOtp[index] = value;
      return { ...prev, otp: newOtp };
    });

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !formState.otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // Reset verification state when component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem('otpEmail');
      localStorage.removeItem('otp');
      localStorage.removeItem('isVerified');
    };
  }, []);

  // Load persisted email if exists
  useEffect(() => {
    const storedEmail = localStorage.getItem('otpEmail');
    if (storedEmail && !formState.email) {
      setFormState(prev => ({ ...prev, email: storedEmail }));
    }

    // Check if user was previously verified
    const isVerified = localStorage.getItem('isVerified') === 'true';
    if (isVerified) {
      setFormState(prev => ({ ...prev, isVerified: true }));
    }
  }, []);

  const showError = (message) => {
    setFormState(prev => ({ 
      ...prev, 
      error: message,
      success: null,
      loading: false 
    }));
    setTimeout(() => {
      setFormState(prev => ({ ...prev, error: null }));
    }, 3000);
  };

  const showSuccess = (message) => {
    setFormState(prev => ({ 
      ...prev, 
      success: message,
      error: null,
      loading: false 
    }));
    setTimeout(() => {
      setFormState(prev => ({ ...prev, success: null }));
    }, 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formState.email)) {
      showError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(formState.password)) {
      showError('Password must be at least 6 characters long');
      return;
    }

    setFormState(prev => ({ ...prev, loading: true }));

    try {
      const res = await fetch(`${API_URL}/api/client/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formState.email, 
          password: formState.password 
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('name', `${data.data.firstName} ${data.data.lastName}`);
      
      showSuccess('Login successful!');
      router.push('/');
    } catch (error) {
      showError(error.message);
    }
  };

  const handleForgotEmailSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formState.email)) {
      showError('Please enter a valid email address');
      return;
    }

    setFormState(prev => ({ ...prev, loading: true }));

    try {
      const res = await fetch(`${API_URL}/api/client/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formState.email })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem('otpEmail', formState.email);
      showSuccess('OTP sent successfully!');
      setFormState(prev => ({ 
        ...prev, 
        view: 'forgot-otp',
        otp: ['', '', '', '', '', '']
      }));
    } catch (error) {
      showError(error.message);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('otpEmail');

    if (!storedEmail) {
      showError('Please submit email first');
      setFormState(prev => ({ ...prev, view: 'forgot-email' }));
      return;
    }

    const otpValue = formState.otp.join('');
    if (otpValue.length !== 6) {
      showError('Please enter a complete OTP');
      return;
    }

    setFormState(prev => ({ ...prev, loading: true }));

    try {
      const res = await fetch(`${API_URL}/api/client/otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          otp: otpValue,
          email: storedEmail
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem('otp', otpValue);
      localStorage.setItem('isVerified', 'true');
      
      showSuccess('OTP verified successfully!');
      setFormState(prev => ({ 
        ...prev, 
        view: 'reset-password',
        isVerified: true
      }));
    } catch (error) {
      showError(error.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (!formState.isVerified) {
      showError('Please verify your OTP first');
      setFormState(prev => ({ ...prev, view: 'forgot-otp' }));
      return;
    }

    if (formState.newPassword !== formState.confirmPassword) {
      showError('Passwords do not match!');
      return;
    }

    if (!validatePassword(formState.newPassword)) {
      showError('Password must be at least 6 characters long');
      return;
    }

    const storedEmail = localStorage.getItem('otpEmail');
    const storedOtp = localStorage.getItem('otp');

    if (!storedEmail || !storedOtp) {
      showError('Verification information missing');
      setFormState(prev => ({ ...prev, view: 'forgot-email' }));
      return;
    }

    setFormState(prev => ({ ...prev, loading: true }));

    try {
      const res = await fetch(`${API_URL}/api/client/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: storedEmail,
          otp: storedOtp,
          newPassword: formState.newPassword
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // Clear all stored data
      localStorage.removeItem('otpEmail');
      localStorage.removeItem('otp');
      localStorage.removeItem('isVerified');
      
      showSuccess('Password reset successful!');
      
      // Reset form state and redirect to login
      setFormState(prev => ({ 
        ...prev, 
        view: 'login',
        newPassword: '',
        confirmPassword: '',
        email: '',
        isVerified: false
      }));
    } catch (error) {
      showError(error.message);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4 min-h-screen">
      <motion.div 
        className="relative bg-white shadow-xl p-8 rounded-2xl w-full max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Error/Success Notifications */}
        <AnimatePresence>
          {(formState.error || formState.success) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
                formState.error ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}
            >
              {formState.error || formState.success}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {formState.view === 'login' && (
            <motion.form
              key="login"
              onSubmit={handleLogin}
              {...fadeIn}
              className="space-y-6"
            >
              <div className="mb-8 text-center">
                <UserCircle className="mx-auto mb-2 w-16 h-16 text-purple-600" />
                <h2 className="font-bold text-2xl text-gray-800">Welcome Back</h2>
                <p className="text-gray-600">Please sign in to continue</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Mail className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="border-gray-200 focus:border-purple-600 py-3 pr-4 pl-10 border rounded-lg w-full focus:outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                  <input
                    type={formState.showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formState.password}
                    onChange={(e) => setFormState(prev => ({ ...prev, password: e.target.value }))}
                    className="border-gray-200 focus:border-purple-600 py-3 pr-12 pl-10 border rounded-lg w-full focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setFormState(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                    className="top-1/2 right-3 absolute text-gray-400 hover:text-gray-600 transform -translate-y-1/2"
                  >
                    {formState.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formState.rememberMe}
                    onChange={(e) => setFormState(prev => ({ ...prev, rememberMe: e.target.checked }))}
                    className="border-gray-300 rounded focus:ring-purple-500 text-purple-600"
                  />
                  <span className="ml-2 text-gray-600 text-sm">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setFormState(prev => ({ ...prev, view: 'forgot-email' }))}
                  className="font-medium text-purple-600 text-sm hover:text-purple-500"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={formState.loading}
                className="flex justify-center bg-purple-600 hover:bg-purple-700 shadow-sm px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full font-medium text-sm text-white focus:outline-none"
              >
                {formState.loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  'Sign in'
                )}
              </button>

              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{' '}
                <a href="/register" className="font-medium text-purple-600 hover:text-purple-500">
                  Sign up
                </a>
              </p>
            </motion.form>
          )}

          {formState.view === 'forgot-email' && (
            <motion.form
              key="forgot-email"
              onSubmit={handleForgotEmailSubmit}
              {...fadeIn}
              className="space-y-6"
            >
              <button
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, view: 'login' }))}
                className="top-4 left-4 absolute p-2 text-gray-400 hover:text-gray-600"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="mb-8 text-center">
                <Key className="mx-auto w-16 h-16 text-purple-600" />
                <h2 className="mt-2 font-bold text-2xl text-gray-900">Forgot Password</h2>
                <p className="mt-2 text-gray-600 text-sm">
                  Enter your email address and we'll send you a verification code
                </p>
              </div>

              <div className="relative">
                <Mail className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="border-gray-200 focus:border-purple-600 py-3 pr-4 pl-10 border rounded-lg w-full focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={formState.loading}
                className="flex justify-center bg-purple-600 hover:bg-purple-700 shadow-sm px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full font-medium text-sm text-white focus:outline-none"
              >
                {formState.loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  'Send Reset Code'
                )}
              </button>
            </motion.form>
          )}

          {formState.view === 'forgot-otp' && (
            <motion.form
              key="forgot-otp"
              onSubmit={handleOtpVerification}
              {...fadeIn}
              className="space-y-6"
            >
              <button
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, view: 'forgot-email' }))}
                className="top-4 left-4 absolute p-2 text-gray-400 hover:text-gray-600"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="mb-8 text-center">
                <h2 className="font-bold text-2xl text-gray-900">Verify OTP</h2>
                <p className="mt-2 text-gray-600 text-sm">
                  We've sent a verification code to<br />
                  <span className="font-medium text-purple-600">{formState.email}</span>
                </p>
              </div>

              <div className="flex justify-center space-x-2">
                {formState.otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="border-gray-200 focus:border-purple-600 border rounded-lg w-12 h-12 font-semibold text-center text-xl focus:outline-none"
                    required
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={formState.loading}
                className="flex justify-center bg-purple-600 hover:bg-purple-700 shadow-sm px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full font-medium text-sm text-white focus:outline-none"
              >
                {formState.loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  'Verify Code'
                )}
              </button>

              <p className="text-center text-gray-600 text-sm">
                Didn't receive the code?{' '}
                <button
                  type="button"
                  onClick={handleForgotEmailSubmit}
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Resend
                </button>
              </p>
            </motion.form>
          )}

          {formState.view === 'reset-password' && (
            <motion.form
              key="reset-password"
              onSubmit={handlePasswordReset}
              {...fadeIn}
              className="space-y-6"
            >
              <button
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, view: 'forgot-otp' }))}
                className="top-4 left-4 absolute p-2 text-gray-400 hover:text-gray-600"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="mb-8 text-center">
                <CheckCircle className="mx-auto w-16 h-16 text-green-500" />
                <h2 className="mt-2 font-bold text-2xl text-gray-900">Reset Password</h2>
                <p className="mt-2 text-gray-600 text-sm">
                  Create a new password for your account
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Lock className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                  <input
                    type={formState.showPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={formState.newPassword}
                    onChange={(e) => setFormState(prev => ({ ...prev, newPassword: e.target.value }))}
                    className="border-gray-200 focus:border-purple-600 py-3 pr-12 pl-10 border rounded-lg w-full focus:outline-none"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setFormState(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                    className="top-1/2 right-3 absolute text-gray-400 hover:text-gray-600 transform -translate-y-1/2"
                  >
                    {formState.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="relative">
                  <Lock className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                  <input
                    type={formState.showPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    value={formState.confirmPassword}
                    onChange={(e) => setFormState(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="border-gray-200 focus:border-purple-600 py-3 pr-12 pl-10 border rounded-lg w-full focus:outline-none"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={formState.loading}
                className="flex justify-center bg-purple-600 hover:bg-purple-700 shadow-sm px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full font-medium text-sm text-white focus:outline-none"
              >
                {formState.loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  'Reset Password'
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LoginForm;
