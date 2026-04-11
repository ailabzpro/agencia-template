import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between rounded-2xl border border-border bg-background/80 backdrop-blur-xl px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-lg text-foreground">Brabaflow</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#metodo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Método Brabaflow
          </a>
          <a href="#newsletter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Newsletter
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="sm" className="gap-2">
            Entender como funciona
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-6 space-y-4">
          <a href="#metodo" className="block text-sm text-muted-foreground">Método Brabaflow</a>
          <a href="#newsletter" className="block text-sm text-muted-foreground">Newsletter</a>
          <Button variant="default" size="sm" className="w-full gap-2">
            Entender como funciona
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
