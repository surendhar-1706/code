import { render, screen, fireEvent } from '@testing-library/react';
import AddTasks from '../AddTasks';
import TaskList from '../TaskList';
import TodoLayout from '../TodoLayout';


test('renders TodoLayout Component', () => {
    render(<TodoLayout />);

    //Check for title
    const Title = screen.getByText(/Tasks to do/i);
    expect(Title).toBeInTheDocument();
});


test('renders addTask Component', () => {
    const setTaskProps = jest.fn()
    const taskProps = jest.fn()
    render(<AddTasks setTasks={setTaskProps} tasks={taskProps} />);

    //Check for Input field isEmpty initially
    const input = screen.getByTestId('task-input')
    expect(input.value).toBe("");

    //Checkr add button exsists
    const addButton = screen.getByTestId('add-button')
    expect(addButton).toBeInTheDocument()
});



test('renders TaskList Component', () => {
    const setTaskProps = jest.fn()
    const taskProps = [
        {
            "_id": "63e5121e10c3e3ed05c4e953",
            "todo": "Hire a Marketing Agency",
            "completed": false,
            "time": "1675955329001",
            "__v": 0
        },
        {
            "_id": "63e5122810c3e3ed05c4e955",
            "todo": "Create a Pitch Deck",
            "completed": true,
            "time": "1675955329001",
            "__v": 0
        }
    ]
    render(<TaskList tasks={taskProps} setTasks={setTaskProps} />);


    //Check Delete exsists
    const deleteButton = screen.getAllByTestId('delete-button')[0]
    expect(deleteButton).toBeInTheDocument()

    //Check tasks passed and  line-through exsists if completed
    const completedTask = screen.getByText(/Create a Pitch Deck/)
    expect(completedTask.classList.contains('line-through')).toBe(true)

    // check line-through doesnt exsists if not completed
    const notCompletedTask = screen.getByText(/Hire a Marketing Agency/)
    expect(notCompletedTask.classList.contains('line-through')).toBe(false)


});
