import Head from "next/head";
import Image from "next/image";
import List from "../component/List";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <List />
    </div>
  );
}

/*
https://reqres.in/api/users?page=1
use this endpoint to get data
*/
