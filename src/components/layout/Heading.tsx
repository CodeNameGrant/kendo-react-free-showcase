export default function Heading() {
  return (
    <header className="flex gap-2 py-2 px-1 items-center bg-neutral-400">
      <span className="text-2xl">KendoReact Free Showcase</span>
      {/* TODO change following to links */}
      <span className="ml-auto">Dev.to</span>
      <span>GitHub</span>
    </header>
  );
}
