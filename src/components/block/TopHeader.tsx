// components/block/TopHeader.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TopHeader: React.FC = () => {
  return (
    <div className="hidden md:flex justify-between items-center bg-slate-950 p-1">
      {/* Город с иконкой */}
      <div className="flex justify-start items-center text-white">
        <Image
          src="/icons/mapPin.svg"
          alt="map"
          width="24"
          height="24"
        />
        <div className="text-sm text-gray-200 ml-2">Белград</div>
      </div>

      {/* Меню */}
      <div className="flex space-x-6">
        <a href="/about" className="text-sm text-gray-200">О нас</a>
        <a href="/ads" className="text-sm text-gray-200">Реклама</a>
      </div>

      {/* Языковой переключатель */}
      <div className="flex space-x-4 text-white">
        <Select>
          <SelectTrigger className="w-[105px] border-none">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Serbian">Срписки</SelectItem>
            <SelectItem value="Russian">Русский</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopHeader;
