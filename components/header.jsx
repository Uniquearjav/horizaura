'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, link} from "@nextui-org/react";
import Logo from '@/public/horizaura.svg'
import Image from 'next/image'
import { ModeToggle } from "./themeswitcher";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Store", link: "/store" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/Contact_Us" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-5">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <Image src={Logo} className="max-md:h-1/2 max-md:w-1/3" height={80} width={80} alt="Horizaura Logo" priority />
          <p className=" p-5 sm:p-0 max-md:p-0 max-md:text-3xl text-4xl font-semibold text-inherit">HORIZAURA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-4xl" justify="center">
        <NavbarItem>
          <Link color="foreground" className="font-semibold text-xl" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
        <Link color="foreground" className="font-semibold text-xl" href="/store">
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link color="foreground" className="font-semibold text-xl" href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem >
        <Link color="foreground" className="font-semibold text-xl" href="/Contact_Us">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
