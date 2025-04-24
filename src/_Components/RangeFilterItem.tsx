import { useState } from "react";
import Add from "./Add";

type RangeFilterItemProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
};

const RangeFilterItem: React.FC<RangeFilterItemProps> = ({
  label,
  min,
  max,
  step,
  unit = "",
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [range, setRange] = useState<[number, number]>([min, max]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRange([value, Math.max(value, range[1])]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRange([Math.min(value, range[0]), value]);
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
        <div className="mt-3 pl-2 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <label className="text-xs text-gray-500">Min</label>
              <input
                type="number"
                min={min}
                max={range[1]}
                step={step}
                value={range[0]}
                onChange={handleMinChange}
                className="border p-1 rounded w-24"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-500">Max</label>
              <input
                type="number"
                min={range[0]}
                max={max}
                step={step}
                value={range[1]}
                onChange={handleMaxChange}
                className="border p-1 rounded w-24"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {label} entre {range[0]}
            {unit} et {range[1]}
            {unit}
          </p>
        </div>
      )}
    </div>
  );
};

export default RangeFilterItem;
