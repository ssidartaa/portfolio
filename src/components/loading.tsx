"use client";

export const SpinLoad = () => (
  <div className="border-4 border-primary/30 border-t-primary rounded-full w-10 h-10 animate-spin" />
);

const Loading = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-background">
    <div className="relative flex flex-col items-center gap-4 bg-card shadow-xl backdrop-blur-xl p-8 border border-border rounded-xl">
      <div className="-z-10 absolute bg-primary/30 blur-3xl rounded-full w-40 h-40 animate-pulse" />

      <SpinLoad />

      <span className="text-muted-foreground text-sm">Carregando...</span>
    </div>
  </div>
);

export default Loading;
