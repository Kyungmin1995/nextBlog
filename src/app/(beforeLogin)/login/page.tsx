import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href={"/"}>back</Link>
      <Link href={"/login/1"}>login</Link>
      <input type="text" />
      <div>로그인</div>
    </>
  );
}
