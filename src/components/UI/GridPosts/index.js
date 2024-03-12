"use client";

import React, { useState } from "react";
import PostItem from "../PostItem/index";
import styles from "./index.module.scss";
import Link from "next/link";

const Index = ({ articles }) => {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const loadMore = () => {
    setVisibleArticles(visibleArticles + 6);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>OUR LATEST VIEW</h2>
        <Link
          className="btn btn__primary"
          href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        >
          View more
        </Link>
      </div>
      <div className={styles.grid}>
        {articles?.slice(0, visibleArticles).map((article) => (
          <PostItem key={article.id} article={article} />
        ))}
      </div>
      <div className={styles.button}>
        {articles.length > visibleArticles && (
          <button className="btn btn__secondary" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
