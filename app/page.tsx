import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container relative">
      <section
        className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
      >
        <h1
          className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
        >
          Hello, my name is Sharyar
        </h1>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button>Talk with me</Button>
          <Button variant="outline">See my works</Button>
        </div>
      </section>
    </div>
  );
}
