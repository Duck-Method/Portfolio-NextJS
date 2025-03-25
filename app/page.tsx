import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div  className={styles.divAlign}>
      <p className={styles.pAlign}>This is the main page
          <Image
              src='/Face_BW.png'
              height={267}
              width={200}
              alt='An image of Brian Baker'
              className={styles.imageLayout}
              />
      </p>
    </div>
  );
}
