import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    
  } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"


interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const linkClassName =
  "w-full flex items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white";
export const NavbarSidebar = ({
    
    items,
    open,
    onOpenChange
    }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className=" w-full flex items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white "
                            onClick={() => onOpenChange(false)}
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div className="border-t">
                        <Link href="/sign-in"  className=" w-full flex items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white" >
                        Log in
                    </Link>

                    <Link href="/sign-up"  className=" w-full flex items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white">
                    Start Selling
                    </Link>
                    
                    </div>

                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
