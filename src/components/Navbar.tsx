import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useContent, whatsappUrl } from "@/lib/content";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const content = useContent();
  const cta = whatsappUrl(content.agency.whatsapp, content.navbar.ctaLink);

  return (
    <nav className="fixed top-4 inset-x-0 mx-auto z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between rounded-2xl border border-border bg-background/80 backdrop-blur-xl px-6 py-3">
        <div className="flex items-center">
          <img src={content.branding.logoUrl} alt={content.agency.name} className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
          <a href="#metodo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Como funciona</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href={cta} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="gap-2">
              {content.navbar.ctaText}
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-6 space-y-4">
          <a href="#servicos" className="block text-sm text-muted-foreground">Serviços</a>
          <a href="#metodo" className="block text-sm text-muted-foreground">Como funciona</a>
          <a href={cta} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="default" size="sm" className="w-full gap-2">
              {content.navbar.ctaText}
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
