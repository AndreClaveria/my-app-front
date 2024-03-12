import Link from "next/link";
import styles from "./index.module.scss";

const Index = ({ article }) => {
  return (
    <div className={styles.item} key={article.id}>
      <h3 className={styles.item_num}>0{article.id}</h3>
      <h3 className={styles.item_date}>{article.date}</h3>
      <Link href={`/blog/${article.id}`}>
        <h2 className={styles.item_title}>{article.title}</h2>
      </Link>
    </div>
  );
};

export default Index;
