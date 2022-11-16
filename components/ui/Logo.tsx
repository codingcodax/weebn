import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '~/public/images/logo.jpg';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        alt='weebn logo'
        height={35}
        quality={100}
        src={LogoImage}
        width={35}
      />
    </Link>
  );
};

export default Logo;
