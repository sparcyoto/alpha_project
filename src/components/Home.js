import Image from 'next/image';
import React from 'react';

function Home(props) {
  return (
    <div>
      <Image
        src="/images/Hero_Image.png"
        width={400}
        height={400}
      />
    </div>
  );
}

export default Home;
