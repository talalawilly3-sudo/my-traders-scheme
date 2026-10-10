import React from 'react';

export default function AppContent() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#060b13] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wide">
            traders<span className="text-blue-400">scheme</span>
          </span>
          <span className="text-xs text-gray-400 font-light">powered by deriv</span>
        </div>
        <div className="flex gap-3">
          <a 
            href="https://oauth.deriv.com/oauth2/authorize?app_id=YOUR_APP_ID&l=EN&brand=deriv" 
            className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            Log In
          </a>
          <a 
            href="https://beacons.ai/talalawilly" 
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Market Ticker */}
      <div className="bg-slate-900 border-b border-gray-800 text-xs py-2 px-6 flex justify-between overflow-x-auto text-gray-300">
        <div>Crash 500 Index <span className="text-red-500">-0.94%</span></div>
        <div>Step Index <span className="text-green-400">+0.41%</span></div>
        <div>Range Break 100 <span className="text-green-400">+1.12%</span></div>
      </div>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="inline-block px-4 py-1 mb-6 rounded-full text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-800">
          FREE STRATEGIES. REAL MARKET TOOLS.
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
          Trade <span className="text-blue-400">Smarter</span>
        </h1>

        {/* Action Buttons */}
        <div className="w-full max-w-sm flex flex-col gap-4 mb-8">
          <a 
            href="https://oauth.deriv.com/oauth2/authorize?app_id=YOUR_APP_ID&l=EN&brand=deriv" 
            className="w-full py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            Log In and Trade
          </a>
          
          <a 
            href="https://beacons.ai/talalawilly" 
            className="w-full py-4 bg-gray-100 text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white"
          >
            Create Free Account
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md text-left mt-6">
          <div className="bg-[#0d1522] border border-[#1a2638] p-4 rounded-xl">
            <div className="text-lg font-bold">Free</div>
            <div className="text-xs text-gray-400">BOT TEMPLATES</div>
          </div>
          <div className="bg-[#0d1522] border border-[#1a2638] p-4 rounded-xl">
            <div className="text-lg font-bold">24/7</div>
            <div className="text-xs text-gray-400">SYNTHETIC MARKETS</div>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-gray-500 border-t border-gray-800">
        © 2026 Traders Scheme. All rights reserved.
      </footer>
    </div>
  );
}
