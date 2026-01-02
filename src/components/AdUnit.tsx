'use client';

import { useEffect, useRef } from 'react';

type AdUnitProps = {
  slot: string; 
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
};

export default function AdUnit({ slot, format = 'auto', responsive = true }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
        initialized.current = true;
      }
    } catch (err) {
      console.error('Erro ao carregar AdSense:', err);
    }
  }, []);

  return (
    <div className="w-full my-8 flex justify-center items-center overflow-hidden min-h-[100px] bg-slate-50 border border-slate-200 rounded-xl relative">
      <span className="text-[10px] text-slate-400 absolute top-1 right-2 uppercase tracking-widest pointer-events-none">
        Publicidade
      </span>

      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-6624327415321086" 
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}