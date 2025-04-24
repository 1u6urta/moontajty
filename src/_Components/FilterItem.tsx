import { useState } from "react";
import Add from "./Add";

type FilterItemProps = {
  label: string;
  options: string[];
};

const FilterItem: React.FC<FilterItemProps> = ({ label, options }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((opt) => opt !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="border-b py-2 mx-5">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{label}</span>
        <Add open={open}/>
      </button>

      {open && (
        <div className="mt-2 pl-2 flex flex-col gap-1">
          {options.map((option, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterItem;
