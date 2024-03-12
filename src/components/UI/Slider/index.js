"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Index = () => {
  // TODO :
  // 1. Iso maquette
  // 2. Bloquer le slide si au début ou à la fin
  // 3. Mettre les points de navigation et les rendre fonctionnels
  // -> Prévoir currentSlide et le mettre à jour à chaque slide
  //4. Calculer de manière dynamique la valeur exacte à slider (attention à la marge/gap)
  // 5. Gérer le swipe avec la souris

  const [translateValue, setTranslateValue] = useState(0);
  const sliderWidth = 1500; // Largeur totale du slider

  const getPrevSlide = () => {
    if (translateValue < 0) {
      // Vérifier si la valeur actuelle est déjà inférieure à 0
      setTranslateValue(translateValue + 500);
      console.log("a : ", translateValue); // Déplacer vers la gauche de 500px
    }
  };

  const getNextSlide = () => {
    if (translateValue > -sliderWidth) {
      // Vérifier si la valeur actuelle est supérieure à la largeur totale du slider négative
      setTranslateValue(translateValue - 500); // Déplacer vers la droite de 500px
      console.log("b : ", translateValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Discover The Best Blog Ever</h1>
          <div className={styles.line}></div>
          <p>
            Lorem ipsum{" "}
            <span className={styles.bold}>
              dolor sit amet, consectetur adipiscing
            </span>{" "}
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim{" "}
            <span className={styles.boldnunderline}>veniam</span>.
          </p>
          <button className="btn btn__primary">About Us</button>
        </div>
        <div
          className={styles.silderWrapper}
          onMouseDown={(e) => {
            console.log("je bouge la souris");
          }}
          onMouseMove={(e) => {
            console.log("je bouge la souris");
          }}
          onMouseUp={(e) => {
            console.log("je relache le clique");
          }}
        >
          <div
            className={styles.slider}
            style={{ transform: `translateX(${translateValue}px)` }}
          >
            <div data-index="1" className={styles.slide1}></div>
            <div data-index="2" className={styles.slide2}></div>
            <div data-index="3" className={styles.slide3}></div>
            <div data-index="4" className={styles.slide4}></div>
          </div>
        </div>
        <div className={styles.navigation}>
          <button
            onClick={() => {
              getPrevSlide();
            }}
          >
            ←
          </button>
          <button onClick={() => getNextSlide()}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
