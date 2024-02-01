import  { useState, useEffect } from 'react';
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";

export const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [, setWeb3Wallet] = useState(null);

  useEffect(() => {
    const initializeWalletConnect = async () => {
      try {
        const core = new Core({
          projectId: process.env.REACT_APP_VITE_CONNECT_WALLET,
        });

        const wallet = await Web3Wallet.init({
          core,
          metadata: {
            name: "Demo app",
            description: "Demo Client as Wallet/Peer",
            url: "www.walletconnect.com",
            icons: [],
          },
        });

        
        wallet.on("session_request", async (event) => {
          
        });

        wallet.on("session_proposal", async (proposal) => {
          
        });

      

        setWeb3Wallet(wallet);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to WalletConnect:", error);
      }
    };

    initializeWalletConnect();
  }, []);

  const handleConnect = async () => {
    const wallet = await Web3Wallet.init({
        core,
        metadata: {
          name: "Demo app",
          description: "Demo Client as Wallet/Peer",
          url: "www.walletconnect.com",
          icons: [],
        },
      });
      wallet.on("session_request", async (event) => {
            
      });
  
      wallet.on("session_proposal", async (proposal) => {
            
      });
  
      wallet.activate();
};
  


  return (
    <div>
      <button onClick={handleConnect} disabled={isConnected}>
        {isConnected ? "Conectar a la billetera" : "Conectado a la billetera" }
      </button>
    </div>
  );
};

export default WalletConnect;
