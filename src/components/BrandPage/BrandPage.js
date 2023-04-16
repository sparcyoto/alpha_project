import Image from 'next/image';
import React from 'react';

import styles from './brandPage.module.scss';

function BrandPage(props) {
  const abc = 20;

  return (
    <div className={styles.container}>
      <Image
        src="/images/Hero_Image.png"
        width={400}
        height={400}
      />
      <Image
        src="/icons/tranity_logo.svg"
        width={400}
        height={400}
      />
    </div>
  );
}

export default BrandPage;
