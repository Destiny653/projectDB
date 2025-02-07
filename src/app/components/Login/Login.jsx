'use client';
import React, { useState } from 'react';
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

const LoginForm = () => {
  const router = useRouter();
  const [view, setView] = useState<'login' | 'forgot-email' | 'forgot-otp' | 'reset-password'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/client/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        (e.target).reset();
        alert(data.message);
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('name', `${data.data.firstName} ${data.data.lastName}`);
      
      (e.target).reset();
      alert(data.message);
      router.push('/');
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : 'Something went wrong'));
    } finally {
      setLoading(false);
    }
  };

  const handleForgotEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/client/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem('otpEmail', email);
      alert(data.message);
      setView('forgot-otp');
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : 'Something went wrong'));
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('otpEmail');

    if (!storedEmail) {
      alert("Please submit email first");
      setView('forgot-email');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/client/otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          otp: otp.join(''),
          email: storedEmail
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem('otp', otp.join(''));
      alert(data.message);
      setView('reset-password');
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : 'Something went wrong'));
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const storedEmail = localStorage.getItem('otpEmail');
    const storedOtp = localStorage.getItem('otp');

    if (!storedEmail || !storedOtp) {
      alert("Please complete verification first");
      setView('forgot-email');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/client/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: storedEmail,
          otp: storedOtp,
          newPassword
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // Clear stored data
      localStorage.removeItem('otpEmail');
      localStorage.removeItem('otp');
      
      alert('Password reset successful!');
      setView('login');
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : 'Something went wrong'));
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value.length === 1 && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
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
        <AnimatePresence mode="wait">
          {view === 'login' && (
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
                    className="border-gray-200 focus:border-purple-600 py-3 pr-4 pl-10 border rounded-lg w-full focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 transform -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border-gray-200 focus:border-purple-600 py-3 pr-12 pl-10 border rounded-lg w-full focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="top-1/2 right-3 absolute text-gray-400 hover:text-gray-600 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 rounded focus:ring-purple-600 text-purple-600"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setView('forgot-email')}
                  className="font-medium text-purple-600 hover:text-purple-700"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="flex justify-center items-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg w-full font-medium text-white transition-colors"
                disabled={loading}
              >
                {loading ? <Loader className="animate-spin" /> : 'Sign In'}
              </button>

              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="font-medium text-purple-600 hover:text-purple-700">
                  Sign Up
                </a>
              </p>
            </motion.form>
          )}

          {/* Rest of the views remain the same, just update their respective handlers */}
          {/* ... (forgot-email, forgot-otp, and reset-password views) ... */}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LoginForm;