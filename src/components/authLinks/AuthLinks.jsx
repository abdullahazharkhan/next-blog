import Link from "next/link";
import styles from "./authlinks.module.css";

const AuthLinks = () => {
  const status = "notauthenticated";
  return (
    <div className={styles.container}>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>{" "}
          <span className={styles.link}>Logout</span>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
