"use client";

import { Modal } from "@/app/(beforeLogin)/_component/Modal";
import styles from "@/app/(beforeLogin)/css/modal.module.css";
import { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineEdit,
} from "react-icons/ai";

export default function Page() {
  const [labelArr, setLabelArr] = useState<any>([]);
  const colorArr = [
    {
      id: "0",
      color: "#164b35",
      textColor: "#baf3db",
    },
    {
      id: "1",
      color: "#533f04",
      textColor: "#f8e6a0",
    },
    {
      id: "2",
      color: "#5f3811",
      textColor: "#ffe2bd",
    },
    { id: "3", color: "#601e16", textColor: "#ffe2bd" },
    { id: "4", color: "#352c63", textColor: "#dfd8fd" },

    { id: "5", color: "#216e4e", textColor: "#baf3db" },

    {
      id: "6",
      color: "#7f5f01",
      textColor: "#f8e6a0",
    },
    { id: "7", color: "#974f0c", textColor: "#ffe2bd" },
    {
      id: "8",
      color: "#ae2a19",
      textColor: "#ffd2cc",
    },
    { id: "9", color: "#5e4db2", textColor: "#dfd8fd" },
    {
      id: "10",
      color: "#4bce97",
      textColor: "#1d2125",
    },
    { id: "11", color: "#e2b203", textColor: "#1d2125" },
    {
      id: "12",
      color: "#faa53d",
      textColor: "#1d2125",
    },
    { id: "13", color: "#f87462", textColor: "#1d2125" },
    { id: "14", color: "#9f8fef", textColor: "#1d2125" },
  ];

  return (
    <>
      <Modal>
        <div className={styles.back}>
          <div
            className={styles.modal_body}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.top}>
              <span></span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type="text"
                  onChange={(e) => {
                    e.stopPropagation();
                  }}
                />
              </div>
              <button style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineClose
                  style={{ fontSize: "40px", color: "#575757" }}
                />
              </button>
            </div>
            <div className={styles.labels}>
              <h3>Labels</h3>
              <div className="flex">
                {labelArr.length !== 0 &&
                  labelArr.map((a: any) => {
                    return (
                      <div
                        key={a.idx}
                        style={{ background: a.color, color: a.textColor }}
                      >
                        {a.text}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.mid}>
              <span></span>
              <h3 className={styles.title}>Description</h3>
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    // setDetailData((state) => ({
                    //   ...state,
                    //   description: e.target.value,
                    // }));
                  }}
                />
                <button
                  className={true && styles.active}
                  onClick={() => {
                    // saveData("description");
                  }}
                >
                  Save
                </button>
              </div>
            </div>
            <div className={styles.bottom}>
              <div style={{ textAlign: "right" }}>
                <button className={styles.delete} onClick={() => {}}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
