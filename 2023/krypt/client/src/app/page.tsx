"use client";
import SendEthForm from "@/components/SendEthForm";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { contractAbi, contractAddress } from "@/utils/constant";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { accountAtom } from "@/atoms/app-atoms";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
// declare var window: any;
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export default function Home() {
  const { ethereum } = window;
  const [userAccounts, setUserAccounts] = useAtom(accountAtom);
  const getEtherumcontract = async () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    console.log(provider, signer, contract);
  };

  const checkIfWallectConnected = async () => {
    if (!ethereum) return alert("Please Install MetaMask!!");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    // @ts-ignore
    setUserAccounts(accounts[0]);
  };
  useEffect(() => {
    console.log(userAccounts);
  }, [userAccounts]);
  const connnectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install MetaMask!!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // @ts-ignore
      if (accounts) setUserAccounts(accounts[0]);
    } catch (err) {
      console.log(err);

      throw new Error("No ether object found");
    }
  };
  useEffect(() => {
    // getEtherumcontract();
    checkIfWallectConnected();
  }, []);
  return (
    <div className="h-screen bg-white">
      <div className="flex mb-10 items-center justify-between px-20 pt-4 pb-4 border-b">
        <div className="text-black text-xl">Krypt</div>
        <AwesomeButton ripple={true} onPress={connnectWallet}>
          Connect Wallet
        </AwesomeButton>
      </div>
      <div className="grid place-items-center h-4/6">
        {" "}
        <SendEthForm />
      </div>
    </div>
  );
}
