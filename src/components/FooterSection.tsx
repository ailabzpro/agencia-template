import { useContent } from "@/lib/content";

const FooterSection = () => {
  const content = useContent();
  const { footer, branding, agency } = content;
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {(footer.columns?.length || footer.companyName) && (
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {footer.columns?.map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-foreground mb-3">{col.heading}</h4>
                <div className="space-y-2">
                  {col.links.map((link, j) => (
                    <a key={j} href={link.url} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                  ))}
                </div>
              </div>
            ))}
            {footer.companyName && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Empresa</h4>
                <p className="text-sm text-muted-foreground">{footer.companyName}</p>
              </div>
            )}
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <div className="flex items-center">
            <img src={branding.logoUrl} alt={agency.name} className="h-6 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
          <div className="flex gap-4">
            {footer.legalLinks?.map((link, i) => (
              <a key={i} href={link.url} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
