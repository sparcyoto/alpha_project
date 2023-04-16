import Image from 'next/image';
import React from 'react';
import NavBar from '@/components/NavBar';
import Button, { BUTTON_VARIATION } from '@/components/Button';

import styles from './brandPage.module.scss';

function BrandPage(props) {
  const renderRed = (text) => <span className="text-red-500">{text}</span>;

  const renderIntro = () => {
    const abc = 2;

    const renderHeroBanner = () => (
      <Image
        src="/images/Hero_Image.png"
        width={400}
        height={400}
      />
    );

    return (
      <div className="flex-col  lg:flex lg:flex-row mt-[8rem]  ">
        <div className={styles.introContainer}>
          <div className="flex items-center gap-x-2 text-[1rem] lg:gap-3">
            <Image
              src="/icons/red_tick.svg"
              width={30}
              height={30}
              className="max-[500px]:w-[1.5rem]"
            />
            <div>₹ 0 Effective Fee</div>
          </div>
          <div className={styles.introLandJob}>
            Land your
            {' '}
            {renderRed('dream Internship/Job') }
          </div>
          <div> Get trained, work on live projects and get hired in 12 Weeks</div>
          <div className="flex gap-x-4 mt-10 mb-4 max-[500px]:flex-col gap-y-3">
            <Button variation={BUTTON_VARIATION.PRIMARY} className="py-4 px-8">Register for Free</Button>
            <Button variation={BUTTON_VARIATION.SECONDARY} className="py-4 px-8">Explore Tracks</Button>
          </div>
          <div>Registration Closing: 8:00 PM, 16th April, 2023</div>
        </div>
        {renderHeroBanner()}
      </div>
    );
  };

  return (

    <div className={styles.container}>
      {renderIntro()}
    </div>
  );
}

export default BrandPage;
