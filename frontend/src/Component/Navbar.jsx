import { useEffect, useState } from "react";
import { Search, BellDot, Settings, LogOut, Users, Newspaper } from "lucide-react";
import { Button, Card, CardBody, Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Popover, PopoverContent, PopoverTrigger, User,} from "@heroui/react";
import { notifications } from "../assets/SampleInformation";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";

function NavbarPart() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {name:"About Us",url:"/about"},
    {name:"News & Events",url:"/events"},
    {name:"Employee Center",url:"/emp-center"},
    {name:"Resource Library",url:"/library"},
    {name:"Communities",url:"/communities"},
  ];

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate("/");
  };

  const ProfileMenu = () => (
    <Card className="min-w-45 shadow-none">
      <CardBody className="p-2 gap-1">
        {currentUser?.role === "admin" && (
        <>
          <Button variant="light" className="justify-start gap-2" onPress={() => navigate("/admin/users")}>
            <Users size={16}/>  View Users
          </Button>

          <Button variant="light" className="justify-start gap-2" onPress={() => navigate("/admin/news")}>
           <Newspaper size={16}/> Publish News
          </Button>
        </>
      )}
        <Button variant="light" className="justify-start gap-2" onPress={() => navigate("/profile")}>
          <Settings size={16} />
          Settings
        </Button>

        <Button variant="light" color="danger" className="justify-start gap-2" onPress={handleLogout}>
          <LogOut size={16} />
          Logout
        </Button>
      </CardBody>
    </Card>
  );

  return (
    <Navbar maxWidth="full" className="bg-white" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-[#0b1f36]"
      />

      <NavbarBrand className="font-bold text-xl">
        <Link
          href="/"
          className="text-[#0b1f36] hover:opacity-80"
          showAnchorIcon={false}
        >
          Clarke <span className="px-1 text-[#BBA782]">&</span> Co.
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden md:flex gap-6 text-[#0b1f36]"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link href={item.url} className="text-[#0b1f36] hover:opacity-80">{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3 items-center">
        {currentUser ? (
          <>
            {/* SEARCH */}
            <NavbarItem>
              <Input
                classNames={{
                  base: "max-w-[10rem] h-10",
                  inputWrapper:
                    "h-full bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<Search size={16} />}
                type="search"
              />
            </NavbarItem>

            {/* NOTIFICATIONS */}
            <NavbarItem>
              <Popover showArrow placement="bottom-end" offset={10}>
                <PopoverTrigger>
                  <Button isIconOnly variant="light">
                    <BellDot size={20} />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-75">
                  {(titleProps) => (
                    <div className="px-1 py-2 w-full">
                      <p
                        className="text-small font-bold mb-3"
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
                            <p className="text-sm font-medium">
                              {n.title}
                            </p>
                            <p className="text-xs text-default-500">
                              {n.message}
                            </p>
                            <p className="text-[11px] text-default-400 mt-1">
                              {n.time}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button size="sm" variant="light" className="mt-3 w-full">
                        View all
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </NavbarItem>

            {/* PROFILE */}
            <NavbarItem>
              <Popover showArrow placement="bottom-end">
                <PopoverTrigger>
                  <Button variant="light" className="p-0">
                    <User
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                      description="Student"
                      name={currentUser.name}
                    />
                  </Button>
                </PopoverTrigger>

                <PopoverContent>
                  <ProfileMenu />
                </PopoverContent>
              </Popover>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Button
              size="sm"
              className="bg-[#0b1f36] text-white"
              onPress={() => navigate("/auth")}
            >
              Sign In
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-[#0b1f36]" href={item.url}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarPart;
