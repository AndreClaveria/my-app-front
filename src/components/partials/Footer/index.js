import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div></div> {/* Trait horizontal */}
        <div className={styles.wrapper}>
          <h1>M.W.A</h1>
          <h2>Copyright @2024</h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
