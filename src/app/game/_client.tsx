import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import Container from "@/components/container";
import Button from "@/components/button";
import GameContainer from "@/components/gameContainer";

const Client = () => {
  return (
    <Container
      Tag="main"
      className="fixed flex flex-col w-full h-screen text-center"
    >
      <Button
        tabIndex={-1}
        icon
        type="button"
        variant="text"
        className="top-10 md:left-10 z-77 absolute w-fit"
      >
        <Link href="/" className="flex justify-center items-center">
          <HomeIcon />
        </Link>
      </Button>

      <GameContainer />

      <div className="z-7 fixed flex flex-col justify-center items-center opacity-50 w-full h-full">
        <p className="font-bold uppercase">COMING SOON</p>
      </div>
    </Container>
  );
};

export default Client;
