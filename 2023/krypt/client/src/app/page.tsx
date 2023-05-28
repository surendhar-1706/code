"use client";
import SendEthForm from "@/components/SendEthForm";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { contractAbi, contractAddress } from "@/utils/constant";
import { ethers, toBigInt } from "ethers";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { accountAtom } from "@/atoms/app-atoms";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { sendEthFormType } from "@/types/formtypes";
// declare var window: any;
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export default function Home() {
  const { ethereum } = window;
  const [isLoading, setIsLoading] = useState(false);
  const [userAccounts, setUserAccounts] = useAtom(accountAtom);
  const getEtherumcontract = async () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    console.log("getEthereum Contract called!!!");
    return contract;
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
  const sendTransaction = async (formData: sendEthFormType) => {
    if (!ethereum) return "Please Intstall MetaMask!!!";
    console.log("hi!!!!");
    const { ethAmount, gifKeyword, message, toAddress } = formData;
    const transactionContract = getEtherumcontract();
    const parsedAmount = ethers.parseEther(ethAmount);
    //@ts-ignore
    await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: userAccounts,
          to: toAddress,
          gas: "0x5208",
          amount: parsedAmount,
        },
      ],
    });
    //@ts-ignore
    // const transactionHash = await transactionContract.addToBlockChain(
    //   toAddress,
    //   parsedAmount,
    //   message,
    //   gifKeyword
    // );
    // await transactionHash.wait();
  };
  useEffect(() => {
    checkIfWallectConnected();
  }, []);
  return (
    <div className="h-screen bg-white">
      <div className="flex mb-10 items-center justify-between px-20 pt-4 pb-4 border-b">
        <div className="text-black text-xl">Krypt</div>
        <AwesomeButton
          className={userAccounts ? "pointer-events-none" : "cursor-pointer"}
          ripple={true}
          onPress={connnectWallet}
          type="primary"
        >
          {userAccounts ? "Wallet Connected" : "Connect Wallet"}
        </AwesomeButton>
      </div>
      <div className="grid place-items-center h-4/6">
        {" "}
        <SendEthForm sendTransaction={sendTransaction} />
      </div>
    </div>
  );
}
