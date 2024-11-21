import { useState } from "react";

const ImageWithBlur = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full transition-all duration-500 ${isLoaded ? "blur-0" : "blur-lg"}`}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default ImageWithBlur