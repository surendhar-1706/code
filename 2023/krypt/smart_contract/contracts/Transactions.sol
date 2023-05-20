// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions {
    uint256 transactionCounter;
    event Transfer(
        address sender,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    struct TransferStruct{
         address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
}
