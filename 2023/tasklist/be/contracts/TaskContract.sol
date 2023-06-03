// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TaskContract {

    event addTaskEvent(uint taskId)
    enum taskStatus {
        done,
        notdone
    }
    address owner;

    struct task {
        string description;
        taskStatus status;
    }

    task[] taskList;

    //add a Task
    function addTask(string memory _description) public {
        unit taskId = taskList.length;
        taskList.push(task(taskId,_description, taskStatus.notdone));
    }

    //markTask as Done
    function markAsDone(uint id) public {
        taskList[id].status = taskStatus.done;
    }

    //getAll Tasks
    function getAllTasks() public view returns (task[] memory) {
        return taskList;
    }
}
