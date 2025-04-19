import { ReactNode } from "react";

type TContainerProp = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProp) => {
  return <div className="max-w-screen-2xl mx-auto py-5 px-4">{children}</div>;
};

export default Container;
