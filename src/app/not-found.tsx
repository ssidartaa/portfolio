import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import Container from "@/components/container";
import Button from "@/components/button";

const NotFound = () => {
  return (
    <Container className="flex flex-col items-center justify-center gap-15">
      <Button
        style={{
          position: "fixed",
        }}
        icon
        className="top-21 w-full md:w-fit md:left-10"
      >
        <Link href="/" className="flex items-center justify-center">
          <HomeIcon />
        </Link>
      </Button>

      <div className="flex flex-col justify-center items-center text-center gap-2 px-5">
        <h1 className="text-4xl font-bold uppercase">404 Page not found</h1>

        <p className="text-lg">The page you are looking for does not exist</p>
      </div>

      <Button variant="outlined" className="w-30 h-10 rounded-none">
        <Link href="/game">Play</Link>
      </Button>
    </Container>
  );
};

export default NotFound;
