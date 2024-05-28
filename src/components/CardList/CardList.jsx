import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* <Card /> */}
      </div>
      <Pagination />
      CardList
    </div>
  );
};

export default CardList;
