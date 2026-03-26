"use client";

import HomeLink from "@/components/homeLink";
import Container from "@/components/ui/container";

const Client = () => {
  return (
    <>
      <HomeLink />

      <Container
        Tag="main"
        className="flex justify-center items-center min-h-screen text-center select-none"
      >
        <h1 className="font-bold text-secondary text-4xl">COMING SOON</h1>
      </Container>
    </>
  );
};

export default Client;
