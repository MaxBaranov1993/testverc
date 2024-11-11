// components/SearchBar.tsx
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработать отправку поиска (например, перенаправление или API запрос)
    console.log('Поиск для:', searchQuery);
  };

  return (
    <form className="flex w-full items-center space-x-2" onSubmit={handleSubmit}>
      {/* Поле ввода */}
      <input
        className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
        id="search"
        type="text"
        placeholder="Введите запрос..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoComplete="off"
      />
      
      {/* Кнопка отправки */}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9"
        disabled={!searchQuery.trim()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <path d="M21 21l-4.35-4.35" />
          <circle cx="10" cy="10" r="7" />
        </svg>
        <span className="sr-only">Поиск</span>
      </button>
    </form>
  );
};

export default SearchBar;
