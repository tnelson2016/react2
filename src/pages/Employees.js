import '../index.css'
import Employee from '../components/Employee'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddEmployee from '../components/AddEmployee'
import EditEmployee from '../components/EditEmployee'
import Header from '../components/Header'

function Employees() {
    const [role, setRole] = useState('dev')
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Troy',
            role: 'Developer',
            img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
        },
        {
            id: 2,
            name: 'Sal',
            role: 'Manager',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
        },
        {
            id: 3,
            name: 'John',
            role: 'Director of Engineer',
            img: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg',
        },
        {
            id: 4,
            name: 'Melanie',
            role: 'Software Engineer',
            img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
        },
        {
            id: 5,
            name: 'Corey',
            role: 'The Dev Ops Guy',
            img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg',
        },
        {
            id: 6,
            name: 'Jake',
            role: 'Senior',
            img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?',
        },
    ])

    function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
            if (id === employee.id) {
                return { ...employee, name: newName, role: newRole }
            }
            return employee
        })
        setEmployees(updatedEmployees)
    }

    function newEmployee(name, role, img) {
        const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
        }
        setEmployees([...employees, newEmployee])
    }

    const showEmployees = true
    return (
        <div className="App bg-gray-300 min-h-screen">
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center my-2">
                        {employees.map((employee) => {
                            const editEmployee = (
                                <EditEmployee
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    updateEmployee={updateEmployee}
                                />
                            )
                            return (
                                <Employee
                                    key={employee.id}
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    editEmployee={editEmployee}
                                />
                            )
                        })}
                    </div>

                    <AddEmployee newEmployee={newEmployee} />
                </>
            ) : (
                <p>You cannot see employees</p>
            )}
        </div>
    )
}

export default Employees
