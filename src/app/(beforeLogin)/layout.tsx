import { ReactNode } from "react";
import Wrapper from "@/app/(beforeLogin)/_component/Wrapper";
import Nav from "@/app/(beforeLogin)/_component/Nav";
import { Providers } from "@/redux/provider";

export type LayOutProps = {
  children: ReactNode;
  modal: ReactNode;
  auth: ReactNode;
};

export default function layout({ children, modal, auth }: LayOutProps) {
  return (
    <Providers>
      <Wrapper>
        <Nav />
        {modal}
        <div className="container">{children}</div>
      </Wrapper>
    </Providers>
  );
}
