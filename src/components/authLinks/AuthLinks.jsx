"use client";
import Link from "next/link";
import styles from "./authlinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <div className={styles.container}>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>{" "}
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>{" "}
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
