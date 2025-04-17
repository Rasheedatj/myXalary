import { useEffect, useRef } from 'react';

export const useOutsideClick = (handler) => {
  const ref = useRef(null);
  useEffect(() => {
    function handleClose(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener('click', handleClose, true);

    return () => document.removeEventListener('click', handleClose, true);
  }, [handler]);

  return ref;
};

// export default useOutsideClick;
