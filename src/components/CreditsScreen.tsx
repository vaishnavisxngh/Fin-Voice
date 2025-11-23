import { Home, Mic, User, Gift, CreditCard, TrendingUp, Clock } from "lucide-react";
import { Screen } from "../App";
import { LanguageSelector } from "./LanguageSelector";

interface CreditsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function CreditsScreen({ onNavigate }: CreditsScreenProps) {
  const creditCards = [
    { 
      id: 1, 
      name: "FinVoice Gold Credit", 
      limit: "₹2,50,000",
      used: "₹82,500",
      available: "₹1,67,500",
      status: "active" 
    },
    { 
      id: 2, 
      name: "Instant Credit Line", 
      limit: "₹50,000",
      used: "₹0",
      available: "₹50,000",
      status: "available" 
    },
  ];

  return (
    <div 
      className="w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col"
      style={{ background: "var(--finvoice-beige)" }}
    >
      {/* Header */}
      <div 
        className="px-6 pt-4 pb-4"
        style={{ background: "var(--gradient-primary)", height: "70px" }}
      >
        <div className="flex items-center justify-between h-full">
          <div className="flex-1" />
          <h3 className="text-white text-center">Credits</h3>
          <div className="flex-1 flex justify-end">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Total Credit Card */}
        <div className="mt-6 mb-6">
          <div 
            className="rounded-3xl p-6 shadow-lg"
            style={{ background: "var(--gradient-soft)" }}
          >
            <p className="text-white/90 mb-1">Total Credit Limit</p>
            <h2 className="text-white mb-4">₹3,00,000</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80">Used</p>
                <p className="text-white">₹82,500</p>
              </div>
              <div>
                <p className="text-white/80">Available</p>
                <p className="text-white">₹2,17,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Cards List */}
        <div className="mb-6">
          <h4 style={{ color: "var(--finvoice-blue-900)" }} className="mb-3">
            Your Credit Lines
          </h4>
          <div className="space-y-3">
            {creditCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl p-5 shadow-sm"
                style={{ background: "var(--finvoice-white)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--finvoice-blue-100)" }}
                    >
                      <CreditCard className="w-6 h-6" style={{ color: "var(--finvoice-blue-700)" }} />
                    </div>
                    <div>
                      <p style={{ color: "var(--finvoice-blue-900)" }}>{card.name}</p>
                      <p style={{ color: "var(--finvoice-grey-500)" }}>
                        Limit: {card.limit}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-px mb-3" style={{ background: "var(--finvoice-grey-300)" }} />
                <div className="flex items-center justify-between">
                  <div>
                    <p style={{ color: "var(--finvoice-grey-500)" }}>Used</p>
                    <p style={{ color: "var(--finvoice-blue-900)" }}>{card.used}</p>
                  </div>
                  <div className="text-right">
                    <p style={{ color: "var(--finvoice-grey-500)" }}>Available</p>
                    <p style={{ color: "var(--finvoice-success)" }}>{card.available}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div 
            className="rounded-2xl p-4 shadow-sm"
            style={{ background: "var(--finvoice-white)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4" style={{ color: "var(--finvoice-success)" }} />
              <p style={{ color: "var(--finvoice-grey-500)" }}>Credit Score</p>
            </div>
            <p style={{ color: "var(--finvoice-blue-900)" }}>780/900</p>
          </div>
          <div 
            className="rounded-2xl p-4 shadow-sm"
            style={{ background: "var(--finvoice-white)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4" style={{ color: "var(--finvoice-blue-700)" }} />
              <p style={{ color: "var(--finvoice-grey-500)" }}>Due Date</p>
            </div>
            <p style={{ color: "var(--finvoice-blue-900)" }}>Dec 5, 2025</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
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
          <button className="flex flex-col items-center gap-1">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--finvoice-blue-100)" }}
            >
              <CreditCard className="w-5 h-5" style={{ color: "var(--finvoice-blue-700)" }} />
            </div>
          </button>
          <button 
            onClick={() => onNavigate("account")}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" style={{ color: "var(--finvoice-grey-500)" }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
