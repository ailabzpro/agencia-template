const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Navegação</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Falar com um especialista</a>
              <a href="#servicos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
              <a href="#metodo" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Como funciona</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Empresa</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">AILABZ PRO Marketing Agency</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Serviços</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Tráfego Pago</p>
              <p className="text-sm text-muted-foreground">Edição de Vídeo</p>
              <p className="text-sm text-muted-foreground">SEO</p>
              <p className="text-sm text-muted-foreground">Google Meu Negócio</p>
              <p className="text-sm text-muted-foreground">Presença em IAs</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <div className="flex items-center">
            <img src="/assets/ailabz-logo.svg" alt="AILABZ PRO" className="h-6 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">© 2026 AILABZ PRO. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
