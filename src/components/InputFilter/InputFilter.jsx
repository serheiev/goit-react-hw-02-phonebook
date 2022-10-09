import PropTypes from 'prop-types';

export const InputFilter = ({ onChange, filter, type, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      filter={filter}
      onChange={onChange}
    />
  );
};

InputFilter.propTypes = {
  type: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
