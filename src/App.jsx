import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeePage from './components/EmployeePage';
import './App.css';

const employees = [
  { id: 1, name: 'James King', title: 'President and CEO', phoneOffice: '781-000-0001', phoneMobile: '617-000-0001', sms: '617-000-0001', email: 'jking@fakemail.com', avatar: 'https://via.placeholder.com/50?text=JK' },
  { id: 2, name: 'Julie Taylor', title: 'VP of Marketing', phoneOffice: '781-000-0002', phoneMobile: '617-000-0002', sms: '617-000-0002', email: 'jtaylor@fakemail.com', avatar: 'https://via.placeholder.com/50?text=JT' },
  { id: 3, name: 'Peter Parker', title: 'Chief Technology Officer', phoneOffice: '781-000-0003', phoneMobile: '617-000-0003', sms: '617-000-0003', email: 'pparker@fakemail.com', avatar: 'https://via.placeholder.com/50?text=PP' },
  { id: 4, name: 'Madeline Adams', title: 'VP of Engineering', phoneOffice: '781-000-0004', phoneMobile: '617-000-0004', sms: '617-000-0004', email: 'madams@fakemail.com', avatar: 'https://via.placeholder.com/50?text=MA' },
  { id: 5, name: 'Alice Johnson', title: 'Director of HR', phoneOffice: '781-000-0005', phoneMobile: '617-000-0005', sms: '617-000-0005', email: 'ajohnson@fakemail.com', avatar: 'https://via.placeholder.com/50?text=AJ' },
  { id: 6, name: 'Michael Scott', title: 'Regional Manager', phoneOffice: '781-000-0006', phoneMobile: '617-000-0006', sms: '617-000-0006', email: 'mscott@fakemail.com', avatar: 'https://via.placeholder.com/50?text=MS' },
  { id: 7, name: 'Dwight Schrute', title: 'Assistant Regional Manager', phoneOffice: '781-000-0007', phoneMobile: '617-000-0007', sms: '617-000-0007', email: 'dschrute@fakemail.com', avatar: 'https://via.placeholder.com/50?text=DS' },
  { id: 8, name: 'Pam Beesly', title: 'Office Administrator', phoneOffice: '781-000-0008', phoneMobile: '617-000-0008', sms: '617-000-0008', email: 'pbeesly@fakemail.com', avatar: 'https://via.placeholder.com/50?text=PB' },
  { id: 9, name: 'Jim Halpert', title: 'Sales Representative', phoneOffice: '781-000-0009', phoneMobile: '617-000-0009', sms: '617-000-0009', email: 'jhalpert@fakemail.com', avatar: 'https://via.placeholder.com/50?text=JH' },
  { id: 10, name: 'Angela Martin', title: 'Accountant', phoneOffice: '781-000-0010', phoneMobile: '617-000-0010', sms: '617-000-0010', email: 'amartin@fakemail.com', avatar: 'https://via.placeholder.com/50?text=AM' },
];

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="App">
      <Header title="Employee Directory" />
      {!selectedEmployee ? (
        <>
          <SearchBar />
          <EmployeeList employees={employees} onSelectEmployee={setSelectedEmployee} />
        </>
      ) : (
        <EmployeePage employee={selectedEmployee} onBack={() => setSelectedEmployee(null)} />
      )}
    </div>
  );
}

export default App;
