'use client';

import { useState } from 'react';
type TextExpanderProps = {
  children: string;
};

export default function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <span>
      {isExpanded
        ? children
        : children
            .split(' ')
            .slice(0, 40)
            .join(' ' + '...')}
      <button
        className="border-b border-primary-700 pb-1 leading-3 text-primary-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {!isExpanded ? 'Show more' : 'Show less'}
      </button>
    </span>
  );
}
