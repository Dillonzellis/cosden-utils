import type { SlideData } from "@/lib/data/slides";
import { Container } from "./layout/Container";
import { Button } from "./ui/Button";

type SlideProps = {
  active?: boolean;
} & SlideData;

export const Slide = ({
  active = false,
  header,
  body,
  imgSrc,
  btnText,
  btnLink,
}: SlideProps) => {
  return (
    <div className={`slide ${active ? "active" : ""} tw-absolute`}>
      <div className="">
        <Container>
          <div className="tw-absolute tw-top-1/2 tw-flex tw-max-w-prose -tw-translate-y-1/2 tw-flex-col tw-gap-8 tw-text-white">
            {header && (
              <h1 className="tw-text-3xl tw-font-bold tw-capitalize md:tw-text-6xl">
                {header}
              </h1>
            )}
            {body && <p className="tw-text-xl">{body}</p>}
            {btnText && <Button href={btnLink || "#"}>{btnText}</Button>}
          </div>
        </Container>
      </div>
      <img src={imgSrc} />
    </div>
  );
};
