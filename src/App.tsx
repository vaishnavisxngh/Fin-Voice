import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { RegisterScreen } from "./components/RegisterScreen";
import { OTPScreen } from "./components/OTPScreen";
import { HomeScreen } from "./components/HomeScreen";
import { AccountScreen } from "./components/AccountScreen";
import { ListeningScreen } from "./components/ListeningScreen";
import { RewardsScreen } from "./components/RewardsScreen";
import { CreditsScreen } from "./components/CreditsScreen";

export type Screen = 
  | "login" 
  | "register" 
  | "otp" 
  | "home" 
  | "account" 
  | "listening"
  | "rewards"
  | "credits";

export interface UserData {
  name: string;
  email: string;
  mobile: string;
  mpin: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleStartRegistration = () => {
    setIsRegistering(true);
    setCurrentScreen("register");
  };

  const handleCompleteRegistration = (data: UserData) => {
    setUserData(data);
    setCurrentScreen("otp");
  };

  const handleLogin = (mobile: string, mpin: string) => {
    // In a real app, validate credentials here
    if (userData && userData.mobile === mobile && userData.mpin === mpin) {
      setCurrentScreen("otp");
    } else {
      alert("Invalid credentials. Please register first.");
    }
  };

  const handleOTPVerified = () => {
    setCurrentScreen("home");
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleBackToLogin = () => {
    setIsRegistering(false);
    setCurrentScreen("login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
      {/* Mobile Frame Container */}
      <div className="relative">
        {/* Screen Indicator */}
        <div className="text-center mb-4">
          <p className="text-white/60">FinVoice Mobile Banking Prototype</p>
          <p className="text-white/40 mt-1">Current Screen: {currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1)}</p>
        </div>

        {/* Current Screen */}
        {currentScreen === "login" && (
          <LoginScreen 
            onStartRegister={handleStartRegistration}
            onLogin={handleLogin}
          />
        )}
        
        {currentScreen === "register" && (
          <RegisterScreen 
            onComplete={handleCompleteRegistration}
            onBack={handleBackToLogin}
          />
        )}
        
        {currentScreen === "otp" && (
          <OTPScreen 
            mobile={userData?.mobile || ""}
            onVerified={handleOTPVerified}
          />
        )}
        
        {currentScreen === "home" && userData && (
          <HomeScreen 
            userName={userData.name}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentScreen === "account" && userData && (
          <AccountScreen 
            userData={userData}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentScreen === "listening" && (
          <ListeningScreen 
            onBack={() => handleNavigate("home")}
          />
        )}
        
        {currentScreen === "rewards" && (
          <RewardsScreen 
            onNavigate={handleNavigate}
          />
        )}
        
        {currentScreen === "credits" && (
          <CreditsScreen 
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}