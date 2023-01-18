import React from 'react';
import styled from 'styled-components';

const PerformantImage = ({ src, alt, ...rest }) => {
  // Get the path sans the extension
  const imagePath = src.split('.')[0] ?? '';

  return (
    <ResponsiveImage {...rest}>
      <source
        type="image/avif"
        srcSet={`${imagePath}.avif 1x,
                     ${imagePath}@2x.avif 2x,
                     ${imagePath}@3x.avif 3x,
                    `}
      />
      <source
        type="image/jpg"
        srcSet={`${imagePath}.jpg 1x,
                     ${imagePath}@2x.jpg 2x,
                     ${imagePath}@3x.jpg 3x,
                    `}
      />
      <Image src={src} alt={alt} {...rest} />
    </ResponsiveImage>
  );
};

const ResponsiveImage = styled.picture`
  width: 100%;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

export default PerformantImage;
