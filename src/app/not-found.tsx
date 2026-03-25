import Link from "next/link";
import { House } from "lucide";

import Container from "@/components/container";
import Button from "@/components/button";

const NotFound = () => {
  return (
    <>
      <Link
        href="/"
        className="md:top-25 md:left-15 absolute flex justify-center items-center hover:bg-foreground/10 p-2 rounded-full transition-all duration-300"
      ></Link>

      <Container
        Tag="main"
        className="flex flex-col justify-center items-center gap-15 min-h-main text-center select-none"
      >
        <div className="flex flex-col justify-center items-center gap-2 px-5 text-center">
          <h1 className="font-bold text-4xl uppercase">404 Page not found</h1>

          <p className="text-lg">The page you are looking for does not exist</p>
        </div>

        {/* <Button>
          <Link href="/game">Play</Link>
        </Button> */}
      </Container>
    </>
  );
};

export default NotFound;
