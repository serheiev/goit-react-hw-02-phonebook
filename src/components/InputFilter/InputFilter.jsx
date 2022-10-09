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
