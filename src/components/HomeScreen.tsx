import { Home, Mic, User, ArrowUpRight, ArrowDownLeft, Gift, CreditCard } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Screen } from "../App";
import { LanguageSelector } from "./LanguageSelector";

interface HomeScreenProps {
  userName: string;
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ userName, onNavigate }: HomeScreenProps) {
  const transactions = [
    { id: 1, name: "Amazon", amount: "-₹1,240", type: "debit", date: "Today, 2:30 PM" },
    { id: 2, name: "Salary Credited", amount: "+₹45,000", type: "credit", date: "Yesterday" },
    { id: 3, name: "Netflix Subscription", amount: "-₹649", type: "debit", date: "Nov 20" },
    { id: 4, name: "Swiggy", amount: "-₹420", type: "debit", date: "Nov 20" },
    { id: 5, name: "Refund from Flipkart", amount: "+₹2,300", type: "credit", date: "Nov 19" },
  ];

  const initials = userName
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
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border-2 border-white/30">
              <AvatarFallback 
                className="text-white"
                style={{ background: "rgba(255, 255, 255, 0.2)" }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-white/80">Hello,</p>
              <h3 className="text-white">{userName}</h3>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Balance Card */}
        <div className="mt-6 mb-6">
          <div 
            className="rounded-3xl p-6 shadow-lg"
            style={{ background: "var(--gradient-soft)" }}
          >
            <p className="text-white/90 mb-1">Current Balance</p>
            <h2 className="text-white mb-4">₹43,280.50</h2>
            <div className="flex gap-3">
              <button 
                className="flex-1 rounded-xl py-2 px-4 text-white transition-all"
                style={{ 
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)"
                }}
              >
                Send
              </button>
              <button 
                className="flex-1 rounded-xl py-2 px-4 text-white transition-all"
                style={{ 
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)"
                }}
              >
                Request
              </button>
            </div>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div 
            className="rounded-2xl p-4 shadow-sm"
            style={{ background: "var(--finvoice-white)" }}
          >
            <p style={{ color: "var(--finvoice-grey-500)" }}>Budget Left</p>
            <p style={{ color: "var(--finvoice-blue-900)" }}>₹12,400</p>
          </div>
          <div 
            className="rounded-2xl p-4 shadow-sm"
            style={{ background: "var(--finvoice-white)" }}
          >
            <p style={{ color: "var(--finvoice-grey-500)" }}>Credit Limit</p>
            <p style={{ color: "var(--finvoice-blue-900)" }}>₹50,000</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <h4 style={{ color: "var(--finvoice-blue-900)" }} className="mb-3">
            Recent Transactions
          </h4>
          <div className="space-y-2">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="rounded-2xl p-4 flex items-center justify-between shadow-sm"
                style={{ background: "var(--finvoice-white)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: tx.type === "credit" 
                        ? "rgba(76, 175, 80, 0.1)" 
                        : "rgba(229, 57, 53, 0.1)"
                    }}
                  >
                    {tx.type === "credit" ? (
                      <ArrowDownLeft className="w-5 h-5" style={{ color: "var(--finvoice-success)" }} />
                    ) : (
                      <ArrowUpRight className="w-5 h-5" style={{ color: "var(--finvoice-error)" }} />
                    )}
                  </div>
                  <div>
                    <p style={{ color: "var(--finvoice-blue-900)" }}>{tx.name}</p>
                    <p style={{ color: "var(--finvoice-grey-500)" }}>{tx.date}</p>
                  </div>
                </div>
                <p
                  style={{
                    color: tx.type === "credit" 
                      ? "var(--finvoice-success)" 
                      : "var(--finvoice-blue-900)"
                  }}
                >
                  {tx.amount}
                </p>
              </div>
            ))}
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
          <button className="flex flex-col items-center gap-1">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--finvoice-blue-100)" }}
            >
              <Home className="w-5 h-5" style={{ color: "var(--finvoice-blue-700)" }} />
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