"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  // Replace the hardcoded cart count with Redux state
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Announcement Bar */}
      <div className="bg-gray-900 text-white py-2 text-center text-sm">
        <p>Free shipping on orders over $100 • Use code WELCOME15 for 15% off your first order</p>
      </div>
      
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Nirvatatva</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-purple-600 transition-colors">
                  Home
                </Link>
                <Link href="/store" className="text-lg font-medium hover:text-purple-600 transition-colors">
                  Store
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg"></div>
            <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">H</span>
            </div>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">Nirvatatva</span>
        </Link>
        
        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-purple-600 transition-colors pb-1 border-b-2 border-transparent hover:border-purple-600">Home</Link>
          
          
            <Link href="/store" className="font-medium text-gray-700 hover:text-purple-600 transition-colors pb-1 border-b-2 border-transparent hover:border-purple-600">Store</Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-purple-600 transition-colors pb-1 border-b-2 border-transparent hover:border-purple-600">About</Link>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-purple-600 transition-colors pb-1 border-b-2 border-transparent hover:border-purple-600">Contact</Link>
        </nav>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Account">
            <Link href="/account">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
            <Link href="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="container mx-auto px-4 pb-3 lg:hidden">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search for products..." 
            className="w-full py-2 pl-10 pr-4"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </header>
  );
}