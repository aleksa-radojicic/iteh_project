import { useEffect } from 'react';

const useScript = path => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = path;

    document.body.appendChild(script);

  }, [path]);
};

export default useScript;
