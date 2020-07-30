import React from 'react';
import { useSelector } from 'react-redux';
import { getCharCount } from '../reducks/editor/selectors';

export default function Footer() {
  const charCount = getCharCount(useSelector((state) => state));
  const footer = {
    en: ' charactors',
    ja: ' 文字',
  };

  return (
    <footer className="w-full h-6 bg-gray-800">
      <p
        className="
                    text-xs text-gray-300 text-right select-none
                    leading-6 w-40 font-medium
                "
      >
        {charCount}
        {footer.en}
      </p>
    </footer>
  );
}
