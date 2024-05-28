import PropTypes from 'prop-types';

function EmployeePage({ employee, onBack }) {
  return (
    <div className="employee-page">
      <button onClick={onBack}>Back</button>
      <div className="employee-details">
        <img src={employee.avatar} alt={employee.name} />
        <h2>{employee.name}</h2>
        <h3>{employee.title}</h3>
        <p>Call Office: {employee.phoneOffice}</p>
        <p>Call Mobile: {employee.phoneMobile}</p>
        <p>SMS: {employee.sms}</p>
        <p>Email: {employee.email}</p>
      </div>
    </div>
  );
}

EmployeePage.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    phoneOffice: PropTypes.string.isRequired,
    phoneMobile: PropTypes.string.isRequired,
    sms: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EmployeePage;
