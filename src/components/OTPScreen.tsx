import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

interface OTPScreenProps {
  mobile: string;
  onVerified: () => void;
}

export function OTPScreen({ mobile, onVerified }: OTPScreenProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }

      // Auto-verify when all filled
      if (newOtp.every(digit => digit !== "") && index === 5) {
        setTimeout(() => onVerified(), 500);
      }
    }
  };

  const handleResend = () => {
    setTimer(45);
    setOtp(["", "", "", "", "", ""]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden relative"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* Header */}
      <div className="px-6 py-6">
        <button className="text-white/90 hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-8" style={{ height: "calc(100% - 80px)" }}>
        <div className="text-center mb-12">
          <h2 className="text-white mb-3">Enter OTP</h2>
          <p className="text-white/80">
            We've sent a 6-digit code to
            <br />
            {mobile}
          </p>
        </div>

        {/* OTP Boxes */}
        <div className="flex gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-14 rounded-xl text-center transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                outline: "none"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="text-white/90 mb-4">
          {formatTime(timer)}
        </div>

        {/* Resend Link */}
        <div>
          {timer === 0 ? (
            <button 
              onClick={handleResend}
              className="text-white/90 hover:text-white underline"
            >
              Resend OTP
            </button>
          ) : (
            <span className="text-white/60">Resend OTP in {formatTime(timer)}</span>
          )}
        </div>
      </div>
    </div>
  );
}