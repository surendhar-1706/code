// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TaskContract {
    event addTaskEvent(uint taskId);
    event updateTaskEvent(uint taskId);
    enum taskStatus {
        done,
        notdone
    }
    address owner;

    struct task {
        uint taskId;
        string description;
        taskStatus status;
    }

    task[] taskList;

    //add a Task
    function addTask(string memory _description) public {
        uint taskId = taskList.length;
        taskList.push(task(taskId, _description, taskStatus.notdone));
        emit addTaskEvent(taskId);
    }

    //markTask as Done
    function markAsDone(uint id) public {
        uint taskId = taskList.length;
        taskList[id].status = taskStatus.done;
        emit updateTaskEvent(taskId);
    }

    //getAll Tasks
    function getAllTasks() public view returns (task[] memory) {
        return taskList;
    }
}
