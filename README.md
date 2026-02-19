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

## Why This Project? (Graveyard Hack Fit)
Solana wallets often have "dead" SOL stuck in old/inactive token accounts from airdrops or failed tx.  
UnlockSol revives that graveyard value — turning useless locked SOL into usable balance!

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
