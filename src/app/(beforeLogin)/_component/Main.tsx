import Image from "next/image";
// import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <div>
      <Link href={"/todo"}>todo</Link>

      <div>메인페이지</div>
    </div>
  );
}
