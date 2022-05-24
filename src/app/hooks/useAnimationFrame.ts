import { useCallback, useEffect, useRef } from "react";

export const useAnimationFrame = (callback: () => void | Promise<void>) => {
  const idRef = useRef<number>();
  const loop = useCallback(async () => {
    await callback();
    idRef.current = requestAnimationFrame(loop);
  }, [callback]);

  useEffect(() => {
    idRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(idRef.current);
  }, []);
};
