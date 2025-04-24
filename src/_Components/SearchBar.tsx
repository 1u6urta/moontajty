import { Search } from 'lucide-react'; // Optional: for the magnifying glass icon

export default function SearchBar() {
  return (
    <div className="bar flex items-center w-full max-w-md rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow  px-4 py-2 text-sm outline-none bg-white"
      />
      <button className="buttonSearch p-2 px-4 text-white flex items-center justify-center">
        <Search className="w-5 h-5"/>
      </button>
    </div>
  );
}
