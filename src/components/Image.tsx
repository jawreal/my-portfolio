import { memo } from "react";

interface ImageProps {
  url: string | null | undefined;
  className: string;
}

const Image = ({ url, className }: ImageProps) => {
  if (!url) return null;

  const optimizedSrc = url.replace('/upload/', '/upload/f_auto,q_auto:good,w_1200/');

  return <img src={optimizedSrc} alt="img" className={className} />;
};

export default memo(Image);