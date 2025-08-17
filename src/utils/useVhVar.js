'use client';

import { useEffect } from 'react';

/**
 * Ghi --vh = window.innerHeight * 0.01
 * Có hỗ trợ visualViewport nếu khả dụng (ổn định hơn khi thanh địa chỉ thay đổi).
 */
export function useVhVar() {
  useEffect(() => {
    const set = () => {
      const h = (globalThis.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${h}px`);
    };
    set();

    const vv = globalThis.visualViewport;
    vv?.addEventListener('resize', set);
    vv?.addEventListener('scroll', set);
    window.addEventListener('resize', set);
    window.addEventListener('orientationchange', set);

    return () => {
      vv?.removeEventListener('resize', set);
      vv?.removeEventListener('scroll', set);
      window.removeEventListener('resize', set);
      window.removeEventListener('orientationchange', set);
    };
  }, []);
}
