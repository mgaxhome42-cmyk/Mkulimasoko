import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Customer from '@/pages/Customer';
import Farmer from '@/pages/Farmer';
import Transporter from '@/pages/Transporter';
import { ShoppingBag, Sprout, Truck, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/customer', label: 'Mteja', icon: ShoppingBag, color: 'text-amber-500' },
    { path: '/farmer', label: 'Mkulima', icon: Sprout, color: 'text-emerald-600' },
    { path: '/transporter', label: 'Msafirishaji', icon: Truck, color: 'text-blue-600' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:relative md:border-t-0 md:border-b md:bg-white/80 md:backdrop-blur-md px-4 py-2">
      {/* Tanzania flag stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] flex">
        <div className="flex-1 bg-emerald-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-blue-600"></div>
        <div className="flex-1 bg-black"></div>
      </div>
      <div className="container mx-auto flex justify-around md:justify-start md:gap-8">
        <Link to="/" className="hidden md:flex items-center gap-2 font-bold text-xl mr-4 pt-1">
          <div className="bg-gradient-to-br from-emerald-600 via-yellow-400 to-blue-600 text-white px-2 py-0.5 rounded text-sm font-black">TZ</div>
          <span>Mazao Market</span>
        </Link>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-colors",
                isActive 
                  ? "text-primary bg-primary/5 font-medium" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? item.color : "text-current")} />
              <span className="text-[10px] md:text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeRedirect() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 pb-24">
      {/* Decorative flag stripe */}
      <div className="flex w-full max-w-xs h-2 rounded-full overflow-hidden shadow-sm">
        <div className="flex-1 bg-emerald-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-blue-600"></div>
        <div className="flex-1 bg-black"></div>
      </div>
      <div className="space-y-3">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-700 via-yellow-600 to-blue-700 bg-clip-text text-transparent">Soko la Mazao Tanzania</h1>
        <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
          Karibu kwenye jukwaa la kidijitali linalounganisha wakulima, wateja na wasafirishaji nchi nzima.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        <Link to="/customer" className="p-6 border rounded-xl hover:border-amber-500 transition-colors group bg-white shadow-sm">
          <ShoppingBag className="w-10 h-10 mb-4 text-amber-500 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold">Mteja</h3>
          <p className="text-sm text-muted-foreground">Nunua mazao bora moja kwa moja kutoka kwa wakulima.</p>
        </Link>
        <Link to="/farmer" className="p-6 border rounded-xl hover:border-emerald-600 transition-colors group bg-white shadow-sm">
          <Sprout className="w-10 h-10 mb-4 text-emerald-600 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold">Mkulima</h3>
          <p className="text-sm text-muted-foreground">Weka mazao yako sokoni na ufikie wateja wengi zaidi.</p>
        </Link>
        <Link to="/transporter" className="p-6 border rounded-xl hover:border-blue-600 transition-colors group bg-white shadow-sm">
          <Truck className="w-10 h-10 mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold">Msafirishaji</h3>
          <p className="text-sm text-muted-foreground">Pata kazi za kusafirisha mizigo ya mazao kote nchini.</p>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pb-16 md:pb-0 md:py-6">
          <Routes>
            <Route path="/" element={<HomeRedirect />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/farmer" element={<Farmer />} />
            <Route path="/transporter" element={<Transporter />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
