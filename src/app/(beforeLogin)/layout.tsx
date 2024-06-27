import { ReactNode } from "react";
import styles from "@/app/page.module.css";
import Wrapper from "@/app/(beforeLogin)/_component/Wrapper";
import Nav from "@/app/(beforeLogin)/_component/Nav";

import { Providers } from "@/redux/provider";
export type LayOutProps = { children: ReactNode; modal: ReactNode };

export default function layout({ children, modal }: LayOutProps) {
  return (
    <Providers>
      <Wrapper>
        <Nav />
        {children}
      </Wrapper>
    </Providers>
  );
}
