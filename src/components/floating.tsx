'use client';

import { Loader2, Pen } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function Floating() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const mode = searchParams.get('mode');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const searchParamsHanndler = () => {
    if (mode === 'edit') {
      router.push(pathname + '?' + createQueryString('mode', 'n'));
    } else {
      router.push(pathname + '?' + createQueryString('mode', 'edit'));
    }
  };

  return (
    <div
      onClick={searchParamsHanndler}
      className="fixed bottom-10 right-10 flex size-14 cursor-pointer items-center justify-center rounded-full bg-primary max-sm:hidden"
    >
      {mode === 'edit' ? (
        <Loader2 className="text-white" />
      ) : (
        <Pen className="text-white" />
      )}
    </div>
  );
}
