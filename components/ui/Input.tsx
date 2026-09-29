type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-body-s leading-[17px] font-medium text-gray-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-[52px] w-full rounded-xl border bg-white px-6 text-body-l leading-[1.6] text-gray-950 outline-none placeholder:text-gray-400 focus:border-primary ${error ? "border-red-500" : "border-gray-100"}`}
      />
      {error && <p className="text-body-xs text-red-500">{error}</p>}
    </div>
  );
}
