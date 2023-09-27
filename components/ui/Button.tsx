type ButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const Button = ({ children, href, ...props }: ButtonProps) => {
  return (
    <a
      className="tw-self-start tw-rounded-full tw-bg-black tw-px-6 tw-py-2 tw-capitalize tw-text-white"
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
