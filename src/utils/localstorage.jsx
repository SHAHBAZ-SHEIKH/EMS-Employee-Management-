const employees = [
    {
        id: 1,
        firstName: "Ahmed",
        email: "employee1@example.com",
        password: "123",
        tasksCount: {
            active: 1,
            newTask: 2,
            completed: 3,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Finish Report",
                taskDescription: "Complete the quarterly financial report.",
                taskDate: "2024-10-22",
                taskCategory: "Finance"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Client Meeting",
                taskDescription: "Attend a client meeting with ABC Corp.",
                taskDate: "2024-10-20",
                taskCategory: "Business"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Submit Presentation",
                taskDescription: "Submit the project presentation to the manager.",
                taskDate: "2024-10-23",
                taskCategory: "Development"
            }
        ]
    },
    {
        id: 2,
        firstName: "Ali",
        email: "employee2@example.com",
        password: "123",
        tasksCount: {
            active: 2,
            newTask: 5,
            completed: 4,
            failed: 3
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Update Website",
                taskDescription: "Make changes to the company's website.",
                taskDate: "2024-10-22",
                taskCategory: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Team Meeting",
                taskDescription: "Conduct a team meeting to discuss next steps.",
                taskDate: "2024-10-19",
                taskCategory: "Business"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Write Documentation",
                taskDescription: "Create user documentation for the new feature.",
                taskDate: "2024-10-24",
                taskCategory: "Development"
            }
        ]
    },
    {
        id: 3,
        firstName: "Fatima",
        email: "employee3@example.com",
        password: "123",
        tasksCount: {
            active: 4,
            newTask: 2,
            completed: 2,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Mockups",
                taskDescription: "Design the mockups for the new app interface.",
                taskDate: "2024-10-21",
                taskCategory: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Bug Fix",
                taskDescription: "Fix the login issue in the mobile app.",
                taskDate: "2024-10-18",
                taskCategory: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy Update",
                taskDescription: "Deploy the latest updates to the production server.",
                taskDate: "2024-10-22",
                taskCategory: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Research Competitors",
                taskDescription: "Analyze competitor offerings in the market.",
                taskDate: "2024-10-23",
                taskCategory: "Marketing"
            }
        ]
    },
    {
        id: 4,
        firstName: "Hassan",
        email: "employee4@example.com",
        password: "123",
        tasksCount: {
            active: 2,
            newTask: 2,
            completed: 3,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Ad Campaign",
                taskDescription: "Develop a new advertising campaign for Q4.",
                taskDate: "2024-10-24",
                taskCategory: "Marketing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Employee Training",
                taskDescription: "Conduct a training session for new employees.",
                taskDate: "2024-10-17",
                taskCategory: "Human Resources"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Product Launch",
                taskDescription: "Launch the new product on the market.",
                taskDate: "2024-10-21",
                taskCategory: "Marketing"
            }
        ]
    },
    {
        id: 5,
        firstName: "Ayesha",
        email: "employee5@example.com",
        password: "123",
        tasksCount: {
            active: 1,
            newTask: 2,
            completed: 3,
            failed: 2
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Invoice",
                taskDescription: "Prepare the invoice for the recent sales.",
                taskDate: "2024-10-22",
                taskCategory: "Finance"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Market Research",
                taskDescription: "Conduct research on market trends.",
                taskDate: "2024-10-23",
                taskCategory: "Marketing"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Social Media Update",
                taskDescription: "Update the company’s social media pages.",
                taskDate: "2024-10-19",
                taskCategory: "Marketing"
            }
        ]
    }
];






const admin = [
    {
        id: 1,
        firstName: "Admin",
        email: "admin@example.com",
        password: "123"
    }

]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }

}