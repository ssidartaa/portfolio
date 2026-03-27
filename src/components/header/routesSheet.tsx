"use client";

import { useEffect } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import { captalize, matchShortcut } from "@/utils/string.utils";

import { routes } from "@/constants/routes";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "../ui/sheet";
import { info } from "@/constants/about";
import { IInfoData, InfoType } from "@/constants/about/interfaces";

const RoutesSheet = () => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon-lg">
          <Menu className="w-4 h-4" />

          <span className="sr-only">Open routes menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="py-8">
        <SheetHeader>
          <SheetTitle className="font-bold text-primary text-3xl xs:text-5xl text-center uppercase">
            <SheetClose asChild>
              <span className="cursor-pointer">Sofware Engineer</span>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col justify-center items-center gap-2 px-5 h-full">
          {routes.map(({ title, description, shortcut, path }) => (
            <SheetClose key={path} asChild>
              <Button
                variant="outline"
                size="lg"
                title={description}
                aria-label={description}
                className={cn(
                  "flex justify-between items-center px-5 border-2 border-foreground rounded w-full h-10 transition-all duration-300",
                  pathName === path && "bg-primary-foreground",
                )}
                onClick={() => navigation.push(path)}
              >
                <span className="font-bold">{captalize(title)}</span>

                <span className="text-muted-foreground text-xs tracking-widest">
                  {shortcut}
                </span>
              </Button>
            </SheetClose>
          ))}
        </div>

        <SheetFooter className="flex flex-row justify-center items-center gap-5">
          {Object.entries(info)
            .filter(([key]) =>
              [
                InfoType.EMAIL,
                InfoType.WHATSAPP,
                InfoType.LINKEDIN,
                InfoType.GITHUB,
              ].includes(key as InfoType),
            )
            .map(([key, value]) => (
              <Button
                key={key}
                variant="outline"
                type="button"
                size="icon-lg"
                title={value.description}
                aria-label={value.description}
                onClick={() => window.open(value.description, "_blank")}
              >
                {<value.Icon />}
              </Button>
            ))}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default RoutesSheet;
