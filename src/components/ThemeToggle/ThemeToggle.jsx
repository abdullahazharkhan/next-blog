"use client";
import Image from "next/image";
import styles from "./themetoggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={toggle}
    >
      <Image src={"/moon.png"} width={14} height={14} alt="Theme Toggle" />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={"/sun.png"} width={14} height={14} alt="Theme Toggle" />
    </div>
  );
};

export default ThemeToggle;
