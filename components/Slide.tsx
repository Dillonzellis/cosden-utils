// import Button from "@/app/components/Button";

import { Container } from "./layout/Container";

type SlideProps = {
  header: string;
  body: string;
  active: boolean;
  btnText?: string;
  link?: string;
};

export const Slide = ({ active = false, header, body }: SlideProps) => {
  return (
    <div
      className={`slide ${
        active ? "active" : ""
      } tw-absolute tw-top-1/2 -tw-translate-y-1/2`}
    >
      <Container>
        <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-8">
          <h1 className="tw-text-3xl tw-font-bold tw-capitalize md:tw-text-6xl">
            {header}
          </h1>
          <p className="tw-text-xl">{body}</p>
        </div>
      </Container>
    </div>
  );
};
