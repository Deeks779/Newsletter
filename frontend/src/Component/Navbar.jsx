import React from 'react'
import { Search,BellDot,UserRound } from "lucide-react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
function NavbarPart() {
  return (
    <div>
      <Navbar maxWidth="xl" className="bg-white">
        <NavbarBrand className="font-bold text-xl text-[#0b1f36]">Clarke <span className='pl-1 pr-1 text-[#BBA782]'>&</span> Co.</NavbarBrand>
        <NavbarContent className="hidden md:flex gap-6 text-[#0b1f36]" justify="center">
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>News & Events</NavbarItem>
          <NavbarItem>Employee Center</NavbarItem>
          <NavbarItem>Resource Library</NavbarItem>
          <NavbarItem>Communities</NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className='text-[#0b1f36] gap-3'>
          <NavbarItem>
          <Search size={20} />
          </NavbarItem>
          <NavbarItem>
          <BellDot size={20} />
          </NavbarItem>
          <NavbarItem>
          <UserRound size={20} />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default NavbarPart
