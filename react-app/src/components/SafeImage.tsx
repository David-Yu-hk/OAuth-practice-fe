import React, { useState } from "react";

interface SafeImageProps {
  url: string | null;
  altText: string;
  fallbackText: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ url, altText, fallbackText }) => {
  const [errored, setErrored] = useState(false);

  if (!url || errored) return <span>{fallbackText}</span>;

  return (
    <img
      src={url}
      alt={altText}
      width={40}
      height={40}
      style={{ borderRadius: "50%" }}
      onError={() => setErrored(true)}
    />
  );
};

export default SafeImage;