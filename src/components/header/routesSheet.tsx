"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

import { Button } from "../ui/button";
import { Kbd, KbdGroup } from "../ui/kbd";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import ContactsNavBar from "../contactsNavBar";

import { cn } from "@/lib/utils";
import { captalize, matchShortcut, normalize } from "@/utils/string.utils";

import { routes } from "@/constants/routes";

const RoutesSheet = () => {
  const [pathName, navigation] = [usePathname(), useRouter()];

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredRoutes = useMemo(() => {
    const value = normalize(search);

    if (!value) return routes;

    return routes.filter(({ title, description, path }) =>
      [title, description, path].some((string) =>
        normalize(string).includes(value),
      ),
    );
  }, [search]);

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

      if (!matchedRoute || matchedRoute.path === pathName) return;

      event.preventDefault();
      event.stopPropagation();

      navigation.push(matchedRoute.path);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigation, pathName]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          title="See routes"
          aria-label="See routes"
          variant="outline"
          size="icon-lg"
        >
          <Menu className="w-4 h-4" />

          <span className="sr-only">See routes</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between p-0 w-full max-w-md">
        <SheetHeader className="px-6 py-5 border-b text-left">
          <SheetTitle
            title="Software Engineer"
            aria-label="Software Engineer"
            className="font-bold text-base xs:text-lg uppercase tracking-wide"
          >
            Software Engineer
          </SheetTitle>

          <SheetDescription className="mb-2 text-xs xs:text-sm">
            Quickly access the main pages of the portfolio.
          </SheetDescription>

          <InputGroup>
            <InputGroupAddon align="inline-start" className="mx-1">
              <Search />
            </InputGroupAddon>

            <>
              <Label htmlFor="search" className="sr-only">
                Search routes
              </Label>

              <InputGroupInput
                id="search"
                placeholder="Search routes..."
                title="Search routes"
                aria-label="Search routes"
                value={search}
                onChange={({ target: { value } }) =>
                  setSearch(value.trim() === "" ? "" : value)
                }
                className="text-sm xs:text-base"
              />
            </>

            {search && (
              <InputGroupButton
                type="button"
                title="Clear search"
                aria-label="Clear search"
                onClick={() => setSearch("")}
                className="hover:bg-transparent! mr-1"
              >
                <X />

                <span className="sr-only">Clear search</span>
              </InputGroupButton>
            )}
          </InputGroup>
        </SheetHeader>

        <nav
          aria-label="Routes"
          className="flex-1 px-4 overflow-x-hidden overflow-y-auto"
        >
          <ul className="space-y-3 py-4">
            {filteredRoutes.map(
              ({ title, description, shortcut, path, homePage }) => {
                const isCurrentRoute = pathName === path;
                const isChildRoute =
                  pathName.startsWith(path) && pathName !== path && !homePage;

                const shortcuts = Array.isArray(shortcut)
                  ? shortcut
                  : [shortcut];

                return (
                  <li key={path}>
                    <SheetClose asChild>
                      <Link
                        tabIndex={-1}
                        href={path}
                        title={`${isChildRoute ? "Back to" : "Access"} ${captalize(title)}`}
                        aria-label={`${isChildRoute ? "Back to" : "Access"} ${captalize(title)}`}
                        className={cn(
                          "group flex justify-between gap-3 p-4 border rounded-xl w-full transition-all duration-300",
                          isCurrentRoute
                            ? "pointer-events-none border-primary bg-primary/20 dark:bg-background/20"
                            : "hover:border-primary/50 bg-background hover:bg-accent/30 dark:bg-secondary dark:hover:bg-secondary/50",
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">
                              {captalize(title)}
                            </span>

                            {(isCurrentRoute || isChildRoute) && (
                              <span className="bg-foreground/10 dark:bg-primary/15 px-2 py-0.5 rounded-md font-medium text-[10px] text-muted-foreground dark:text-primary">
                                {isChildRoute ? "Child Route" : "Current"}
                              </span>
                            )}
                          </div>

                          <p className="mt-1 text-muted-foreground text-sm line-clamp-2">
                            {captalize(description)}
                          </p>
                        </div>

                        <KbdGroup className="flex items-end gap-1.5 text-xs">
                          {shortcuts.map((item) => (
                            <Kbd
                              key={`${path}-${item}`}
                              className="bg-foreground/10 dark:bg-foreground/10 shadow-none border-border/60 text-muted-foreground"
                            >
                              {item}
                            </Kbd>
                          ))}
                        </KbdGroup>
                      </Link>
                    </SheetClose>
                  </li>
                );
              },
            )}
          </ul>
        </nav>

        <SheetFooter className="mt-0 px-4 py-4 border-t">
          <ContactsNavBar />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default RoutesSheet;
