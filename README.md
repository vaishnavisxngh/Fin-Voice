# FinVoice — AI Voice Assistant for Financial Operations  
### GHCI 2025 Hackathon – Theme Statement 4


## 1. Overview  
FinVoice is a voice-first mobile banking prototype built for GHCI 2025 Hackathon (Theme 4: AI Voice Assistant for Financial Operations).  
This Round-1 submission focuses on the **UI/UX flow and onboarding journey**, along with the **vision for a multilingual, conversational banking assistant**.


## 2. Problem Statement (As Given by GHCI)

Many users struggle with complex mobile banking apps — especially elderly users, non-tech-savvy individuals, and those facing linguistic barriers.  
The challenge is to design an **AI Voice Assistant** that enables secure financial operations through natural, conversational interaction while maintaining security, privacy, and compliance.


## 3. Our Solution: FinVoice  
FinVoice aims to make banking simple, intuitive, and hands-free by using **voice-based interaction**.  
The assistant is envisioned to eventually support:

- Checking balances  
- Fund transfers and payments  
- Transaction history  
- Loan & credit inquiries  
- Setting reminders & alerts  
- Context-aware conversations  
- Secure authentication (OTP, biometrics)  
- Multilingual voice support  

This prototype demonstrates the **foundation** of the full system.


## 4. Features Implemented in Round 1  

### ✔ 4.1 User Onboarding  
- Login attempt  
- Redirect to Registration  
- Registration form  
- MPIN creation  
- MPIN confirmation  
- OTP verification  
- Landing on Home Dashboard  

### ✔ 4.2 UI/UX Foundation  
- Clean, accessible mobile-first design  
- Premium custom theme (Periwinkle + Zaffre + Citron)  
- Dashboard with balance, cards, and transactions  
- Bottom navigation bar  
- Voice button placeholder  

### ⚠️ 4.3 Not Included Yet (Planned for Next Rounds)  
- Backend or database  
- Voice engine / NLP  
- Whisper-based speech recognition  
- Intent classification  
- Banking API integrations  


## 5. Future Architecture Plan (For Next Rounds)

### 5.1 Multilingual NLP Layer  
- Whisper ASR  
- Transformer-based intent classifier  
- Support for Indian regional languages  
- Mixed-language understanding (“Hinglish”, “Tamlish”)  

### 5.2 Banking Logic Layer  
Map voice inputs to core operations like:  
fund transfer, transactions, loan inquiry, reminders, statements, etc.

### 5.3 Secure Execution Layer  
- OTP verification  
- Voice biometrics  
- OAuth flows  
- Mock banking APIs  
- Audit logs & fraud detection  


## 6. Code & Folder Structure  

src/
│
├── assets/
│ └── logo.png
│
├── components/
│ ├── LoginScreen.tsx
│ ├── RegisterScreen.tsx
│ ├── ConfirmMpinScreen.tsx
│ ├── OtpScreen.tsx
│ ├── HomeScreen.tsx
│ ├── ListeningScreen.tsx
│ ├── AccountScreen.tsx
│ ├── RewardsScreen.tsx
│ ├── CreditsScreen.tsx
│ └── ui/
│ ├── button.tsx
│ ├── input.tsx
│ └── card.tsx
│
├── styles/
│ └── globals.css
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts


## 7. How to Run the Project  

### A. Install dependencies  

npm install

### B. Start dev server  

npm run dev

### C. Open the app  

http://localhost:3000


### D. Enable mobile view  
Press **Ctrl + Shift + M** in browser DevTools.


## 8. Tech Stack  

- React + TypeScript  
- Vite  
- Tailwind CSS  
- Component-based architecture  
- Custom CSS variables  

*(NLP, backend, voice APIs planned for future rounds)*

## 9. Roadmap  

### Phase 2  
- Whisper ASR  
- Intent detection  
- Mock banking operations  
- Basic backend setup  

### Phase 3  
- Multilingual support  
- Voice biometrics  
- Real conversational flow  
- UI polish  

### Phase 4  
- Secure API integration  
- Compliance checks  
- Fraud/risk detection  
- Pilot-ready version  

## 10. Conclusion  
FinVoice is a step toward inclusive, accessible, and conversational banking.  
This prototype demonstrates the onboarding experience and sets the stage for implementing multilingual, voice-driven financial operations in future phases.