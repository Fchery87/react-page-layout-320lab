import PropTypes from 'prop-types';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList({ employees, onSelectEmployee }) {
  return (
    <div className="employee-list">
      {employees.map(employee => (
        <EmployeeListItem key={employee.id} employee={employee} onSelectEmployee={onSelectEmployee} />
      ))}
    </div>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;
