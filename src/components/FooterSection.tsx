const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Navegação</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Falar com um consultor</a>
              <a href="#newsletter" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Newsletter</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Empresa</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Brabaflow Ltda</p>
              <p className="text-sm text-muted-foreground">CNPJ 54.426.112/0001-38</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Endereço</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Al Rio Negro, 503</p>
              <p className="text-sm text-muted-foreground">Alphaville, São Paulo</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">B</span>
            </div>
            <span className="font-bold text-foreground">Brabaflow</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Brabaflow. Todos os direitos reservados.</p>
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
