import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
