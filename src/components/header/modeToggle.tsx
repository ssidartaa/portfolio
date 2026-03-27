"use client";

import { Check, Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

const ModeToggle = () => {
  const { setTheme, theme, themes } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all duration-300" />

          <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all duration-300" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="flex flex-col gap-0.5">
        {themes.map((item) => {
          const isActive = theme === item;

          return (
            <DropdownMenuItem
              key={item}
              onClick={() => setTheme(item)}
              className={cn(
                "flex justify-between items-center cursor-pointer",
                isActive && "bg-accent text-accent-foreground",
              )}
            >
              {item}

              {isActive && <Check className="w-4 h-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
