import PropTypes from 'prop-types';

function EmployeeListItem({ employee, onSelectEmployee }) {
  return (
    <div className="employee-list-item" onClick={() => onSelectEmployee(employee)}>
      <img src={employee.avatar} alt={employee.name} />
      <div className="employee-info">
        <h3>{employee.name}</h3>
        <p>{employee.title}</p>
      </div>
    </div>
  );
}

EmployeeListItem.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  onSelectEmployee: PropTypes.func.isRequired,
};

export default EmployeeListItem;
