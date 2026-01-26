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

    const loadAd = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          initialized.current = true;
        }
      } catch (err) {
        console.error('Erro ao carregar AdSense:', err);
      }
    };

    const timer = setTimeout(loadAd, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full my-8 flex flex-col items-center overflow-hidden min-h-[280px] bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl relative">
      <span className="text-[10px] text-slate-400 absolute top-2 right-3 uppercase tracking-widest pointer-events-none">
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