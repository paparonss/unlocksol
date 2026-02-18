import React, { useMemo, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@solana/wallet-adapter-react-ui/styles.css'

import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'

import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'

// Komponen anak yang boleh pakai hooks wallet
function Dashboard() {
  const { connection } = useConnection()
  const { publicKey, connected } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    if (connected && publicKey) {
      connection.getBalance(publicKey)
        .then(lamports => {
          setBalance(lamports / 1_000_000_000)
        })
        .catch(err => {
          console.error('Error fetching balance:', err)
        })
    } else {
      setBalance(null)
    }
  }, [connected, publicKey, connection])

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl">
      {/* LOGO */}
      <div className="mb-8">
        <img 
          src="/logo-usol.png" 
          alt="$USOL Logo" 
          className="h-24 md:h-32 w-auto drop-shadow-[0_0_30px_#14F195] transition-transform hover:scale-110 duration-300"
        />
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-[0_0_20px_#14F195] animate-pulse tracking-tight text-[#14F195]">
        UnLock Sol
      </h1>

      <p className="text-xl md:text-2xl text-gray-200 mb-10 text-center max-w-2xl font-medium">
        Reveal hidden SOL in your wallet
      </p>

      <WalletMultiButton className="!bg-[var(--sol-green)] !text-black !font-bold !py-4 !px-10 !rounded-xl hover:!bg-[#9945FF] hover:!text-white transition-all duration-300 shadow-lg shadow-[#14F195]/30 text-lg" />

      {/* Balance SOL */}
      {connected && balance !== null && (
        <div className="mt-10 text-3xl font-semibold">
          Balance: <span className="text-[#14F195] drop-shadow-md">{balance.toFixed(4)} SOL</span>
        </div>
      )}

      {/* Full Address */}
      {connected && publicKey && (
        <div className="mt-6 text-sm text-gray-400 font-mono break-all max-w-[340px] md:max-w-[500px] text-center bg-black/30 p-3 rounded-lg border border-[#9945FF]/30">
          {publicKey.toBase58()}
        </div>
      )}

{/* Button Claim Hidden SOL */}
      {connected && (
        <button
          onClick={() => {
            alert("Scanning wallet for hidden SOL... (dummy mode)\n\nFound: 0.84 SOL locked in vacant accounts!\n\n(Real tx coming soon 🚀)");
          }}
          className="mt-12 px-12 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-[#14F195] to-[#9945FF] text-black hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#14F195]/40"
        >
          UNLOCK NOW
        </button>
      )}
    </div>
  )
}

function App() {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new BackpackWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 flex flex-col items-center justify-center p-6 text-white">
            <Dashboard />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error('Root element #root not found in index.html!')
}