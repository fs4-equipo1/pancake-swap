
import { useState } from 'react'
import {ethers} from 'ethers'


export function Metamask() {
    const [walletAdress, setWalletAddress] = useState("")
    async function requestAccount(){
        if(window.ethereum){
            console.log('detected')
            try{
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setWalletAddress(accounts)
                const account = accounts[0];
                addWalletInfoToSwiper(account);
            } catch (error){
                console.log('Error connecting...')
            }
        } else{
            alert('Metamask not detected')
        }
    }
    async function connectWallet(){
        if(typeof window.ethereum !== 'undefined'){
            await requestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();
            console.log('Connected to network:', network.name);
            
        }
    }
    return(
        <div>
                <button onClick={requestAccount}>Request Account</button>
                <button onClick={connectWallet}>Connect Wallet</button>
                <h3>Wallet Adress: {walletAdress}</h3>
        </div>
    )
}