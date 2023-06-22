import React from "react";
import styles from "./Home.module.css";
import headerImage from "./images/Nursery-Finds_header-image.jpg";

function Home() {
  return (
    <>
      <img id={styles.headerImage} src={headerImage} alt="" />
      <div className={styles.introBanner}>
        <h2 id={styles.tagline}>Create affordable & sustainable memories</h2>
        <button type="button" id={styles.bannerButton}>
          <a id={styles.buttonText} href="/shop">
            Shop now
          </a>
        </button>
      </div>
      <div id={styles.categories}>
        <div>
          <img
            className={styles.categories}
            src="https://img.icons8.com/?size=512&id=3I1wyZIoG-J8&format=png"
            alt=""
          />
          <p className={styles.categoryTitle}>Clothing</p>
        </div>
        <div>
          <img
            className={styles.categories}
            src="https://img.icons8.com/?size=512&id=114915&format=png"
            alt=""
          />
          <p className={styles.categoryTitle}>Nursery</p>
        </div>
        <div>
          <img
            className={styles.categories}
            src="https://img.icons8.com/?size=512&id=t-_II74Yqp8-&format=png"
            alt=""
          />
          <p className={styles.categoryTitle}>Play</p>
        </div>
        <div>
          <img
            className={styles.categories}
            src="https://img.icons8.com/?size=512&id=6z21Fhl-XSli&format=png"
            alt=""
          />
          <p className={styles.categoryTitle}>Feeding</p>
        </div>
        <div>
          <img
            className={styles.categories}
            src="https://img.icons8.com/?size=512&id=z9gkmxt2iFT3&format=png"
            alt=""
          />
          <p className={styles.categoryTitle}>Diapering</p>
        </div>
        <div>
          <img
            className={styles.categories}
            src="https://img.icons8.com/?size=512&id=xVTYKQwapU9V&format=png"
            alt=""
          />
          <p className={styles.categoryTitle}>Strollers</p>
        </div>
      </div>
      <div id={styles.serviceFeature}>
        <div>
          <h2>Buy & sell unused and outgrown baby items</h2>
          <p>How does it work?</p>
        </div>
        <div>
          <div id={styles.imageLTextR}>
            <img
              className={styles.serviceImageL}
              src="https://images.pexels.com/photos/7282431/pexels-photo-7282431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <p className={styles.serviceImageTextR}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id={styles.imageRTextL}>
            <img
              className={styles.serviceImageR}
              src="https://images.pexels.com/photos/5427283/pexels-photo-5427283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <p className={styles.serviceImageTextL}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
