import { contractAbi, contractAddress } from "@/utils/constant";
import { ethers } from "ethers";

declare var window: any
const getEtherumcontract = () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
};
