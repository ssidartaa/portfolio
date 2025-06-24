import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import GameContainer from "@/components/gameContainer";
import Button from "@/components/button";

const Game = () => {
  return (
    <div className="flex flex-col fixed text-center h-screen w-full">
      <Button icon className="fixed top-10 z-77 w-full md:left-10 md:w-fit">
        <Link href="/" className="flex items-center justify-center">
          <HomeIcon />
        </Link>
      </Button>

      <GameContainer />

      <div className="fixed flex flex-col items-center justify-center z-7 opacity-50 w-full h-full">
        <p className="font-bold uppercase">COMING SOON</p>
      </div>
    </div>
  );
};

export default Game;
