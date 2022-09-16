type Props = {
  label: string;
  type?: "text" | "email" | "password";
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  errorMessage?: string;
};

const Input = ({
  label,
  type,
  onChange,
  value,
  placeholder,
  required,
  className,
  errorMessage,
}: Props) => {
  return (
    <div className={`flex flex-col w-full gap-1 ${className}`}>
      <label className="text-sm" htmlFor={label}>
        {label}
      </label>
      <input
        value={value}
        className={`outline-blue rounded h-[46px] px-2 border border-gray-300 ${
          errorMessage && errorMessage?.length > 0 ? "border-red-500" : ""
        }`}
        placeholder={placeholder || "Enter..."}
        type={type || "text"}
        required={required}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <span className="text-xs text-red-400">{errorMessage}</span>
    </div>
  );
};

export default Input;
