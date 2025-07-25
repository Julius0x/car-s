'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageFallback = ({ src, fallbackSrc, alt, ...rest }: ImageFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      {...rest}
    />
  );
};

export default ImageFallback;