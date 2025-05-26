const SalesCard = () => {
  return (
    <div
      className="bg-white rounded-[28px] shadow-md w-full max-w-[500px] p-8 flex flex-col justify-between min-w-0"
      style={{ boxShadow: '0 2px 12px 0 rgba(16, 30, 54, 0.06)' }}
    >
      <h3 className="text-[28px] font-semibold text-gray-800 mb-2">Sales</h3>
      <div className="mb-2">
        <div className="text-[56px] font-extrabold text-gray-900 leading-none mb-2">$3,200</div>
        <div
          className="text-[#22C55E] text-[28px] font-semibold"
          style={{ display: 'flex', flexDirection: 'row', width: 67, height: 'auto' }}
        >
          <svg className="w-6 h-6 mr-1" fill="none" stroke="#22C55E" strokeWidth="3" viewBox="0 0 24 24">
            <polyline points="6 14 12 8 18 14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          12,5%
        </div>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 500 120" fill="none" className="w-full h-[120px]">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path d="M0,90 Q60,70 120,80 Q180,110 240,70 Q300,40 360,80 Q420,120 500,60 V120 H0 Z" fill="url(#areaGradient)" />
          <path d="M0,90 Q60,70 120,80 Q180,110 240,70 Q300,40 360,80 Q420,120 500,60" stroke="#3B82F6" strokeWidth="4" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default SalesCard;