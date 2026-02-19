# UnlockSol

**Reclaim lost SOL from inactive/dead token accounts on Solana**  
Reveal and resurrect hidden/locked rent-exempt SOL (~0.002 SOL per empty account) back to your main wallet.  
Simple, safe dApp to clean dust accounts without losing funds.

Live Demo: [https://unlocksol.vercel.app/](https://unlocksol.vercel.app/)

## Features
- Connect Solana wallet (Phantom, Solflare, etc.)
- Scan wallet for reclaimable inactive accounts
- Close accounts safely and reclaim SOL automatically
- User-friendly UI with real-time preview of recoverable amount

## Why UnlockSol? (Value for Solana Ecosystem)
Many Solana wallets have "dead" or locked SOL in inactive token accounts (from old airdrops, failed transactions, or dust).  
UnlockSol resurrects that unused rent-exempt value (~0.002 SOL per account) back to the user's main balance, helping clean wallets, reduce network bloat, and improve user onboarding/experience on Solana.  
This aligns with Solana's public goods ethos by providing a free, open-source tool that benefits the entire community — making Solana more accessible and efficient.

## Tech Stack
- Frontend: Vite + React + TypeScript
- Solana: @solana/web3.js + @solana/spl-token (for closing accounts & reclaim rent)
- Wallet Adapter: (Assuming to use @solana/wallet-adapter-react or similar)
- Hosting: Vercel

## Installation & Local Development
1. Clone repo:
   ```bash
   git clone https://github.com/paparonss/unlocksol.git
   cd ~/Desktop/unlocksol
