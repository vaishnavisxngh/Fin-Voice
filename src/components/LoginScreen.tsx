import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import logoImage from "../assets/logo.png";

interface LoginScreenProps {
  onStartRegister: () => void;
  onLogin: (mobile: string, mpin: string) => void;
}

export function LoginScreen({ onStartRegister, onLogin }: LoginScreenProps) {
  const [mobile, setMobile] = useState("");
  const [mpin, setMpin] = useState("");

  const handleContinue = () => {
    if (mobile && mpin) {
      onLogin(mobile, mpin);
    }
  };

  return (
    <div 
      className="w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden relative"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full px-8">
        {/* Logo */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center mb-4">
            <img src={logoImage} alt="FinVoice Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-white text-center">FinVoice</h1>
          <p className="text-white/80 text-center mt-2">Voice-First Banking</p>
        </div>

        {/* Form */}
        <div className="w-full space-y-5">
          <div>
            <label className="text-white/90 mb-2 block">Mobile Number</label>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="h-12 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white"
              }}
            />
          </div>

          <div>
            <label className="text-white/90 mb-2 block">MPIN</label>
            <Input
              type="password"
              maxLength={6}
              placeholder="Enter 6-digit MPIN"
              value={mpin}
              onChange={(e) => setMpin(e.target.value)}
              className="h-12 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white"
              }}
            />
          </div>

          <Button 
            onClick={handleContinue}
            className="w-full h-12 rounded-2xl shadow-lg"
            style={{
              background: "var(--finvoice-white)",
              color: "var(--finvoice-blue-700)"
            }}
          >
            Continue
          </Button>
        </div>

        {/* Register Link */}
        <div className="mt-8">
          <button 
            onClick={onStartRegister}
            className="text-white/90 hover:text-white underline"
          >
            New user? Register
          </button>
        </div>
      </div>
    </div>
  );
}