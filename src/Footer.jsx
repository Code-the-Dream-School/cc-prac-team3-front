import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div id={styles.footer}>
        <p id={styles.appName}>Nursery Finds</p>
        <div className={styles.row}>
          <div>
            <section className={styles.column}>
              <ul className={styles.footerList}>
                <li className={styles.columnHeader}>Shop by category</li>
                <li>Clothing</li>
                <li>Nursery</li>
                <li>Play</li>
                <li>Feeding</li>
                <li>Diapering</li>
                <li>Strollers</li>
              </ul>
            </section>
          </div>
          <div>
            <section className={styles.column}>
              <ul className={styles.footerList}>
                <li className={styles.columnHeader}>Account</li>
                <li>Sign up</li>
                <li>Log in</li>
              </ul>
            </section>
          </div>
          <div>
            <section className={styles.column}>
              <ul className={styles.footerList}>
                <li className={styles.columnHeader}>Contact us</li>
                <li>
                  <a id={styles.email} href="mailto:support@nurseryfinds.com">
                    support@nurseryfinds.com
                  </a>
                </li>
                <li>&nbsp;</li>
                <li>About us</li>
                <li>FAQs</li>
              </ul>
            </section>
          </div>
        </div>
        <p id={styles.attribute}>
          icons by
          <a id={styles.attributeLink} href="https://icons8.com/">
            Icons8
          </a>
        </p>
      </div>
      <p id={styles.copyright}>© {getCurrentYear()} CTD CC Team 3</p>
    </>
  );
}

export default Footer;
