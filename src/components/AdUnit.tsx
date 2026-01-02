
export default function AdUnit({ slot }: { slot: string }) {
  return (
    <div className="w-full h-[250px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center my-6 print:hidden">
      <span className="text-gray-400 text-sm">Espaço Publicitário (Google AdSense)</span>
    </div>
  );
}