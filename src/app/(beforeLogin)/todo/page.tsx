"use client";

import styles from "@/app/(beforeLogin)/todo/todo.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { CiCirclePlus, CiCircleRemove, CiMenuKebab } from "react-icons/ci";

export default function Todo() {
  const [addBtn, setAddbtn] = useState(false);
  const openAddMenu = () => setAddbtn(true);
  const closeAddMenu = () => setAddbtn(false);
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  return (
    <div className="container">
      <Link href={"/todo/1"}>모달온</Link>

      <div className={styles.flex}>
        <div className={styles.list}>
          <div className={styles.list_top}>
            <p className={styles.title}>title</p>
            <div className={styles.position}>
              <span>
                <CiMenuKebab />
              </span>
            </div>
          </div>
          <div className={styles.list_body}>
            <p>ㅇㅇㅇㅇㅇ</p>
          </div>
          <div className={styles.list_footer}>
            {!addBtn ? (
              <div className={styles.add_btn_con} onClick={openAddMenu}>
                <span className="addicon"></span>
                <span>Add a card</span>
                <CiCirclePlus />
              </div>
            ) : (
              <>
                <div className={styles.input_menu}>
                  <textarea className={styles.text_input} />
                </div>
                <div className={styles.actionBox}>
                  <button className={styles.btn_add}>Add</button>
                  <button className={styles.btn_close} onClick={closeAddMenu}>
                    x
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
