import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 border rounded text-sm"
    >
      {dark ? '🌞 Sáng' : '🌙 Tối'}
    </button>
  );
};

export default ThemeToggle;