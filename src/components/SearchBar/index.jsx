import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        className="border px-2 py-1 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập tên thành phố"
      />
      <button type="submit" className="text-blue-500">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;