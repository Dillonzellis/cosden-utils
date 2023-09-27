import { slides } from "@/lib/data/slides";
import { SliderWrapper } from "@/components/SliderWrapper";

export default function Home() {
  return (
    <main>
      <SliderWrapper slides={slides} />
    </main>
  );
}
