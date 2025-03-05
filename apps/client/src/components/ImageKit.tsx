import { IKImage } from 'imagekitio-react'

interface ImageKitImageProps {
  src: string;
  className?: string;
  alt: string;
  w?: number;
  h?: number;
}

export const Image = ({src, className, alt, w, h}: ImageKitImageProps) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    path={src}
    className={className}
    loading="lazy"
    lqip={{ active: true, quality: 20 }}  // Low-Quality Image Placeholder for faster load
    alt={alt}
    width={w}
    height={h} 
    />
  )
}
