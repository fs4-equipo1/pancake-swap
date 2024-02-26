import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect } from "react";
import { useNetwork } from "wagmi";
import styles from "./WalletConnect.module.scss"


export function WalletConnect() {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();

  useEffect(() => {
    console.log("switched to " + chain?.id);
  }, [chain?.id]);

  return (
    <div className={styles.walletConnect}>
      {/* <w3m-button /> */}
      <button onClick={() => open({ view: "AllWallets" })}>Send</button>
      <p>{chain?.name}</p>
    </div>
  );
}

export default WalletConnect;
