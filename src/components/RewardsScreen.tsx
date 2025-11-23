import { Home, Mic, User, Gift, CreditCard, Star, Trophy, Sparkles } from "lucide-react";
import { Screen } from "../App";
import { LanguageSelector } from "./LanguageSelector";

interface RewardsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function RewardsScreen({ onNavigate }: RewardsScreenProps) {
  const rewards = [
    { id: 1, name: "Gold Member Bonus", points: 500, icon: Trophy, status: "active" },
    { id: 2, name: "Referral Rewards", points: 250, icon: Star, status: "active" },
    { id: 3, name: "Transaction Cashback", points: 150, icon: Sparkles, status: "claimed" },
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
          <h3 className="text-white text-center">Rewards</h3>
          <div className="flex-1 flex justify-end">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Points Card */}
        <div className="mt-6 mb-6">
          <div 
            className="rounded-3xl p-6 shadow-lg"
            style={{ background: "var(--gradient-soft)" }}
          >
            <p className="text-white/90 mb-1">Total Reward Points</p>
            <h2 className="text-white mb-2">12,450</h2>
            <p className="text-white/90">Worth ₹1,245</p>
          </div>
        </div>

        {/* Rewards List */}
        <div className="mb-6">
          <h4 style={{ color: "var(--finvoice-blue-900)" }} className="mb-3">
            Available Rewards
          </h4>
          <div className="space-y-3">
            {rewards.map((reward) => {
              const Icon = reward.icon;
              return (
                <div
                  key={reward.id}
                  className="rounded-2xl p-5 shadow-sm"
                  style={{ background: "var(--finvoice-white)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: "var(--finvoice-gold-100)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--finvoice-gold-700)" }} />
                      </div>
                      <div>
                        <p style={{ color: "var(--finvoice-blue-900)" }}>{reward.name}</p>
                        <p style={{ color: "var(--finvoice-grey-500)" }}>
                          {reward.points} points
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: reward.status === "active"
                          ? "var(--finvoice-gold-100)"
                          : "var(--finvoice-grey-200)",
                        color: reward.status === "active"
                          ? "var(--finvoice-gold-700)"
                          : "var(--finvoice-grey-600)",
                      }}
                    >
                      {reward.status === "active" ? "Active" : "Claimed"}
                    </div>
                  </div>
                </div>
              );
            })}
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
          <button className="flex flex-col items-center gap-1">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--finvoice-gold-100)" }}
            >
              <Gift className="w-5 h-5" style={{ color: "var(--finvoice-gold-700)" }} />
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
