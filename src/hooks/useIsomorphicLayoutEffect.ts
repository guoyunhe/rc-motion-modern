import canUseDom from 'rc-util-modern/dist/Dom/canUseDom';
import { useEffect, useLayoutEffect } from 'react';

// It's safe to use `useLayoutEffect` but the warning is annoying
const useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
