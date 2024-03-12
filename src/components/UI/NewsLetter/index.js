import styles from "./index.module.scss"; // Assurez-vous de créer le fichier de styles correspondant

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.newsletterBlock}>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src="./eclair.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
          <h3>Subscribe to the NEWSLETTER</h3>
          <button className="btn btn__primary">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
