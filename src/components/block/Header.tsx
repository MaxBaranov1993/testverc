// components/Header.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Ваш компонент Select
import SearchBar from '../ui/search-bar';
import { Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header: React.FC = () => {
  return (
    <header className="bg-slate-100 p-4 flex items-center justify-between">
      {/* Правый блок: Логотип */}
      <div className="w-32">
        <Image
          src="/logo/logo.svg" // Укажите путь к вашему логотипу
          alt="Логотип"
          width={150}
          height={60}
        />
      </div>
     

      {/* Центральный блок: Кнопка категории, строка поиска и кнопка "Найти" */}
      <div className=" w-full flex items-center px-8">
      
      <SearchBar/>
        
      </div>

      <div className="flex items-center space-x-4">
      <div><Mail className="w-8 h-8" /></div>

      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      

      </div>
    </header>
  );
};

export default Header;
