const generateOtp = () => {
    // Generate a 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
  };
  module.exports = generateOtp;