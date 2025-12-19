import React, { useState } from 'react'
import { Search,BellDot } from "lucide-react";
import {
  Button,
  Card,
  CardHeader,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@heroui/react";
import { notifications } from '../assets/SampleInformation';
function NavbarPart() {
  const [isMenuopen,setIsMenuOpen]=useState(false);
  const menuItems=[
    "About Us", "News & Events","Employee Center", "Resource Library","Communities"
  ]
  const [isLoggedIn, setisLoggedIn]=useState(false);
  const ProfileMenu=()=>{
    return (
      <Card>
          <Button color="danger" onPress={()=>setisLoggedIn(!isLoggedIn)} size="sm">
            LogOut
          </Button>
      </Card>
    )
  }
  return (
    <div>
      <Navbar maxWidth="full" className="bg-white" onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle aria-label={isMenuopen?"Close menu":"Open menu"}
        className="sm:hidden text-[#0b1f36]"/>
        <NavbarBrand className="font-bold text-xl text-[#0b1f36]">Clarke <span className='pl-1 pr-1 text-[#BBA782]'>&</span> Co.</NavbarBrand>
        <NavbarContent className="hidden md:flex gap-6 text-[#0b1f36]" justify="center">
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>News & Events</NavbarItem>
          <NavbarItem>Employee Center</NavbarItem>
          <NavbarItem>Resource Library</NavbarItem>
          <NavbarItem>Communities</NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className='text-[#0b1f36] gap-3 items-center'>
          {
            isLoggedIn && (
              <>
              <NavbarItem>
                
                <Input
                  classNames={{
                    base: "max-w-full sm:max-w-[10rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                      "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                  }}
                  placeholder="Type to search..."
                  size="sm"
                  startContent={<Search className="text-white"/>}
                  type="search"
                />
                </NavbarItem>
                <NavbarItem>
                      <Popover showArrow placement="bottom-end" offset={10}>
                        <PopoverTrigger>
                          <Button isIconOnly variant="light">
                            <BellDot size={20} />
                          </Button>
                        </PopoverTrigger>
                    <PopoverContent className="w-[300px]">
                      {(titleProps) => (
                        <div className="px-1 py-2 w-full">
                          <p
                            className="text-small font-bold text-foreground mb-3"
                            {...titleProps}
                          >
                            Notifications
                          </p>
                          <div className="flex flex-col gap-3">
                            {notifications.map((n) => (
                              <div
                                key={n.id}
                                className="p-2 rounded-md hover:bg-default-100 cursor-pointer"
                              >
                                <p className="text-sm font-medium">{n.title}</p>
                                <p className="text-xs text-default-500">
                                  {n.message}
                                </p>
                                <p className="text-[11px] text-default-400 mt-1">
                                  {n.time}
                                </p>
                              </div>
                            ))}
                          </div>
                          <Button
                            size="sm"
                            variant="light"
                            className="mt-3 w-full"
                          >
                            View all
                          </Button>
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                </NavbarItem>
                <NavbarItem>
                  <Popover showArrow placement="bottom">
                    <PopoverTrigger>
                      <User
                        avatarProps={{
                          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        }}
                        description="Student"
                        name="Deeksha Kushwaha"
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <ProfileMenu/>
                    </PopoverContent>
                  </Popover>
                </NavbarItem>
              </>
            )
          }{
            !isLoggedIn && (
              <NavbarItem>
                <Button size="sm" className="text-[#ffffff] text-xl border bg-[#0b1f36] p-3" onPress={()=>setisLoggedIn(!isLoggedIn)}>SignIn</Button>
              </NavbarItem>
            )
          }
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item,index)=>(
            <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-[#0b1f36]"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        </NavbarMenu>
      </Navbar>
    </div>
  )
}

export default NavbarPart
