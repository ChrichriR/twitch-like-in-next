import Categories from "./Categories";
import Hero from "./Hero";
import IconBar from "./IconBar";
import LiveChannels from "./LiveChannels";

export default function Main() {
  return (
    <div className="absolute left-[64px] xl:left-[235px]">
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
}
