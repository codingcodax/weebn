import { useEffect, useRef, useState } from 'react';

import { copyToClipboard } from 'utils';

const useCopyToClipborad = () => {
  const [isCopied, setCopied] = useState(false);
  const textRef = useRef(null);

  const copy = () => {
    if (isCopied || !textRef?.current) return;
    copyToClipboard(textRef.current.value);
    setCopied(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), TIMEOUT_MILISECONDS);

    return () => clearTimeout(timer);
  }, [isCopied]);

  return { isCopied, copy, textRef };
};

const TIMEOUT_MILISECONDS = 1500;

export default useCopyToClipborad;
