export const InputName = ({
  type,
  title,
  placeholder,
  onChange,
  name,
  pattern,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      pattern={pattern}
      title={title}
      required
    />
  );
};
