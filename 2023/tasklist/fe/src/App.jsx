import { useEffect } from "react";
import "./App.css";
import { Box, Button, Card, HStack, Input, VStack } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { contractAddress } from "./utils/config";
import contractAbi from "../src/utils/TaskContract.json";
function App() {
  const { ethereum } = window;
  const [userActiveAccount, setUserActiveAccount] = useState("");
  const [formData, setFormData] = useState();
  const checkMetaMaskInstalled = () => {
    if (!ethereum) {
      alert("Install MetaMask!!");
    }
  };
  const fetchChainIdAndCheckSepolia = async () => {
    checkMetaMaskInstalled();
    try {
      const chainId = await ethereum.request({ method: "eth_chainId" });

      if (chainId !== "0xaa36a7") {
        alert("Change to Sepolia!!");
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserActiveAccount(accounts[0]);
        console.log(accounts[0]);
      }
    } catch (error) {
      console.error("Error fetching chainId or accounts:", error);
    }
  };

  const addTask = async () => {
    if (ethereum) {
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi.abi,
        signer
      );
      const response = await contract.addTask(formData);
      console.log(response);
    }
  };
  useEffect(() => {
    fetchChainIdAndCheckSepolia();
  }, []);
  return (
    <VStack rowGap={"40"}>
      <HStack>
        <Input
          name="addTask"
          onChange={(e) => {
            setFormData(e.target.value);
          }}
        />
        <Button onClick={addTask}>Add Task</Button>
      </HStack>
      <Box>{formData}</Box>
      <Card p={"2"}>Connected Address : {userActiveAccount}</Card>
    </VStack>
  );
}

export default App;
