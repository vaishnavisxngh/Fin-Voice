import { Home, Mic, User, ChevronRight, CreditCard, Building2, Gift } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { UserData, Screen } from "../App";
import { LanguageSelector } from "./LanguageSelector";

interface AccountScreenProps {
  userData: UserData;
  onNavigate: (screen: Screen) => void;
}

export function AccountScreen({ userData, onNavigate }: AccountScreenProps) {
  const initials = userData.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div 
      className="w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col"
      style={{ background: "var(--finvoice-beige)" }}
    >
      {/* Header  */}
      <div 
        className="px-6 pt-4 pb-4"
        style={{ background: "var(--gradient-primary)", height: "70px" }}
      >
        <div className="flex items-center justify-between h-full">
          <div className="flex-1" />
          <h3 className="text-white text-center">Account</h3>
          <div className="flex-1 flex justify-end">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Profile Section */}
        <div className="mt-6 mb-6 flex flex-col items-center">
          <Avatar className="w-24 h-24 border-4 shadow-lg" style={{ borderColor: "var(--finvoice-white)" }}>
            <AvatarFallback 
              className="text-white"
              style={{ background: "var(--gradient-soft)" }}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4" style={{ color: "var(--finvoice-blue-900)" }}>
            {userData.name}
          </h3>
          <p style={{ color: "var(--finvoice-grey-500)" }}>Premium Member</p>
        </div>

        {/* Personal Details */}
        <div 
          className="rounded-2xl p-5 shadow-sm mb-4"
          style={{ background: "var(--finvoice-white)" }}
        >
          <h4 className="mb-4" style={{ color: "var(--finvoice-blue-900)" }}>
            Personal Details
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p style={{ color: "var(--finvoice-grey-500)" }}>Email</p>
                <p style={{ color: "var(--finvoice-blue-900)" }}>{userData.email}</p>
              </div>
            </div>
            <div className="h-px" style={{ background: "var(--finvoice-grey-300)" }} />
            <div className="flex items-center justify-between py-2">
              <div>
                <p style={{ color: "var(--finvoice-grey-500)" }}>Phone</p>
                <p style={{ color: "var(--finvoice-blue-900)" }}>{userData.mobile}</p>
              </div>
            </div>
            <div className="h-px" style={{ background: "var(--finvoice-grey-300)" }} />
            <div className="flex items-center justify-between py-2">
              <div>
                <p style={{ color: "var(--finvoice-grey-500)" }}>UPI ID</p>
                <p style={{ color: "var(--finvoice-blue-900)" }}>
                  {userData.name.toLowerCase().replace(/\s+/g, '')}@finvoice
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CIBIL Score Card */}
        <div 
          className="rounded-2xl p-5 shadow-sm mb-4"
          style={{ background: "var(--gradient-soft)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/90 mb-1">CIBIL Score</p>
              <h2 className="text-white">780</h2>
              <p className="text-white/90">Excellent</p>
            </div>
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ 
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)"
              }}
            >
              <p className="text-white">A+</p>
            </div>
          </div>
        </div>

        {/* Bank Account Card */}
        <div 
          className="rounded-2xl p-5 shadow-sm mb-4"
          style={{ background: "var(--finvoice-white)" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--finvoice-blue-100)" }}
              >
                <Building2 className="w-6 h-6" style={{ color: "var(--finvoice-blue-700)" }} />
              </div>
              <div>
                <p style={{ color: "var(--finvoice-blue-900)" }}>HDFC Bank</p>
                <p style={{ color: "var(--finvoice-grey-500)" }}>••••5678</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" style={{ color: "var(--finvoice-grey-500)" }} />
          </div>
        </div>

        {/* Credit Card Card */}
        <div 
          className="rounded-2xl p-5 shadow-sm mb-6"
          style={{ background: "var(--finvoice-white)" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--finvoice-gold-100)" }}
              >
                <CreditCard className="w-6 h-6" style={{ color: "var(--finvoice-gold-700)" }} />
              </div>
              <div>
                <p style={{ color: "var(--finvoice-blue-900)" }}>Visa Signature</p>
                <p style={{ color: "var(--finvoice-grey-500)" }}>••••1234</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" style={{ color: "var(--finvoice-grey-500)" }} />
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Updated with 5 items */}
      <div 
        className="absolute bottom-0 left-0 right-0 px-3 py-4"
        style={{ 
          background: "var(--finvoice-white)",
          borderTop: "1px solid var(--finvoice-grey-300)"
        }}
      >
        <div className="flex items-center justify-around">
          <button 
            onClick={() => onNavigate("home")}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Home className="w-5 h-5" style={{ color: "var(--finvoice-grey-500)" }} />
            </div>
          </button>
          <button 
            onClick={() => onNavigate("rewards")}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Gift className="w-5 h-5" style={{ color: "var(--finvoice-grey-500)" }} />
            </div>
          </button>
          <button 
            onClick={() => onNavigate("listening")}
            className="flex flex-col items-center gap-1 relative -mt-6"
          >
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div 
              className="absolute inset-0 w-14 h-14 rounded-full animate-ping opacity-20"
              style={{ background: "var(--finvoice-gold-500)" }}
            />
          </button>
          <button 
            onClick={() => onNavigate("credits")}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <CreditCard className="w-5 h-5" style={{ color: "var(--finvoice-grey-500)" }} />
            </div>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--finvoice-blue-100)" }}
            >
              <User className="w-5 h-5" style={{ color: "var(--finvoice-blue-700)" }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}