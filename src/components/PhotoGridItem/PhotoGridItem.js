import React from 'react';
import styled from 'styled-components/macro';
import PerformantImage from '../PerformantImage';
const PhotoGridItem = ({ id, src, alt, tags }) => {
  // Get the path without the extension
  const imagePath = src.split('.')[0];
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <PerformantImage src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const ResponsiveImage = styled.picture`
  width: 100%;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 1px;
  text-overflow: ellipsis;
  padding: 4px;
`;

const Tag = styled.li`
  display: inline;
  margin-right: 8px;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  &:last-of-type {
    margin-right: 0;
  }
`;

export default PhotoGridItem;
