import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { UserData } from "../App";
import logoImage from "../assets/logo.png";

interface RegisterScreenProps {
  onComplete: (data: UserData) => void;
  onBack: () => void;
}

export function RegisterScreen({ onComplete, onBack }: RegisterScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");

  const handleRegister = () => {
    if (!name || !email || !mobile || !mpin || !confirmMpin) {
      alert("Please fill all fields");
      return;
    }
    
    if (mpin !== confirmMpin) {
      alert("MPIN doesn't match");
      return;
    }

    if (mpin.length !== 6) {
      alert("MPIN must be 6 digits");
      return;
    }

    onComplete({ name, email, mobile, mpin });
  };

  return (
    <div 
      className="w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden relative"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* Header */}
      <div className="px-6 py-6 flex items-center">
        <button 
          onClick={onBack}
          className="text-white/90 hover:text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center px-8 overflow-y-auto" style={{ height: "calc(100% - 80px)" }}>
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center mb-3">
            <img src={logoImage} alt="FinVoice Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-white text-center">Create Account</h2>
          <p className="text-white/80 text-center mt-1">Join FinVoice today</p>
        </div>

        {/* Form */}
        <div className="w-full space-y-4 pb-8">
          <div>
            <label className="text-white/90 mb-2 block">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label className="text-white/90 mb-2 block">Email Address</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label className="text-white/90 mb-2 block">Create MPIN (6 digits)</label>
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

          <div>
            <label className="text-white/90 mb-2 block">Confirm MPIN</label>
            <Input
              type="password"
              maxLength={6}
              placeholder="Re-enter MPIN"
              value={confirmMpin}
              onChange={(e) => setConfirmMpin(e.target.value)}
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
            onClick={handleRegister}
            className="w-full h-12 rounded-2xl shadow-lg mt-6"
            style={{
              background: "var(--finvoice-white)",
              color: "var(--finvoice-blue-700)"
            }}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}