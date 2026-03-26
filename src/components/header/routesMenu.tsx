"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { cn } from "@/lib/utils";

import { captalize, matchShortcut } from "@/utils/string.utils";

import { routes } from "@/constants/routes";

const RoutesMenu = () => {
  const [pathName, navigation] = [usePathname(), useRouter()];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();

      const isTyping =
        tagName === "input" ||
        tagName === "textarea" ||
        target?.isContentEditable;

      if (isTyping) return;

      const matchedRoute = routes.find(({ shortcut }) =>
        matchShortcut(event, shortcut),
      );

      if (!matchedRoute) return;

      event.preventDefault();
      navigation.push(matchedRoute.path);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigation]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          tabIndex={-1}
          variant="outline"
          size="icon"
          aria-label="Open routes menu"
          title="Open routes menu"
          className="!ring-0"
        >
          <Menu />

          <span className="sr-only">Open routes menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Routes</DropdownMenuLabel>

          <div className="flex flex-col gap-0.5">
            {routes.map(({ title, description, shortcut, path }) => {
              const isActive = pathName === path;

              return (
                <DropdownMenuItem key={path} asChild>
                  <Link
                    tabIndex={-1}
                    href={path}
                    title={captalize(description)}
                    aria-label={captalize(description)}
                    className={cn(
                      "cursor-pointer",
                      isActive && "bg-accent text-accent-foreground",
                    )}
                  >
                    {captalize(title)}

                    {!isActive && (
                      <DropdownMenuShortcut className="text-[10px]">
                        {shortcut}
                      </DropdownMenuShortcut>
                    )}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RoutesMenu;
