type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ children }: ContainerProps) => {
  return <div className="tw-container tw-px-4">{children}</div>;
};
