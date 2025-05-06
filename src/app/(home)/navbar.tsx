"use client"

import Link from "next/link"
import { Poppins } from "next/font/google"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const poppins = Poppins({
    weight: [ "700"],
    subsets: ["latin"],
})

interface NavbarItemProps {
    children: React.ReactNode
    isActive?: boolean
}

const NavbarItem = ({ 
    href,
    children,
    isActive,
}: NavbarItemProps) => {
    return (
        <Button
            asChild
            variant="outline"
            className={cn(
                
                "bg-transparent hover:bg-transparent rounded-full hover:border-primary  border-transparent px-3.5 text-lg",
                isActive && "bg-black text-white hover:bg-black hover:text-white",
            )}           
       
        >
            <Link href={href}>
                {children}
            </Link>
            

        </Button>
    )
    
}


const navbarItems = [
    { href: "/", Children: "Home" },
    { href: "/about", Children: "About" },
    { href: "/features", Children: "features" },
    { href: "/pricing", Children: "Pricing" },
    { href: "/contact", Children: "Contact" },
    
]

export const Navbar = () => {
    const pathname = usePathname();
  return (
      <nav className="h-20 flex border-b justify-between font-medium bg-white">
          <Link href="/" className="flex items-center gap-2 px-4">
              <span className={cn(" text-5xl font-semibold", poppins.className)}>
              
              Multi-Retail
              
              </span>
          </Link> 

          <div className="items-center gap-4 hidden lg:flex">
              {navbarItems.map((item) => (
                  <NavbarItem
                      key={item.href}
                      href={item.href}
                      isActive={pathname === item.href}
                     
                  >
                      
                      {item.Children}
                      </NavbarItem>
              ))}
          </div>

          <div>
              <Button
                  asChild
                  variant="secondary"
                  className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-green-400 transition-colors text-lg"
              >
                  <Link href={"/signin"}>
                  Login
                  </Link>
              </Button>

              <Button
                  asChild
              className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-green-400 hover:text-black transition-colors text-lg"
              >
                  <Link href={"/signup"}>
                  Start Selling
                  </Link>
              </Button>
            </div>

    </nav>
  )
}

