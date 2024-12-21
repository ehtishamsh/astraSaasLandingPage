import * as React from "react";
import { cn } from "../../lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Features",
    href: "/features",
    description: "Learn about the unique features and benefits of our product.",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description:
      "Explore our pricing plans to find the perfect fit for your needs.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us for support or any inquiries.",
  },
  {
    title: "Demo",
    href: "/demo",
    description: "Request a live demo to see our product in action.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read our latest updates, tips, and insights on the blog.",
  },
];

export default function DropdownMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 text-base font-normal text-mainColor-100 bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent hover:text-mainColor-300">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mainColor-700/60 hover:text-mainColor-100 focus:bg-mainColor-700/60 focus:text-mainColor-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-mainColor-200/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
