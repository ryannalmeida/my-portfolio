# 📦 Guia de Deploy para GitHub Pages

## ✅ Correções Aplicadas

### 1. **vite.config.ts**
- ✅ Adicionado `base: '/my-portfolio/'` para configurar o caminho base correto
- ✅ Configurado `outDir: 'dist'` explicitamente

### 2. **App.tsx**
- ✅ Trocado `BrowserRouter` por `HashRouter` para compatibilidade com GitHub Pages
- ✅ HashRouter funciona melhor em subdiretórios como `/my-portfolio/`

### 3. **Hero.tsx**
- ✅ Corrigido caminho do currículo para usar `import.meta.env.BASE_URL`
- ✅ Agora funciona tanto em desenvolvimento quanto em produção

### 4. **index.html**
- ✅ Corrigidos caminhos absolutos (`/favicon.svg`) para relativos (`./favicon.svg`)
- ✅ Atualizada URL do og:url para o GitHub Pages

### 5. **GitHub Actions Workflow**
- ✅ Criado workflow automático em `.github/workflows/deploy.yml`
- ✅ Faz build e deploy automático a cada push na branch `main`

## 🚀 Como Fazer o Deploy

### Opção 1: Deploy Automático (Recomendado)

1. **Habilitar GitHub Pages no repositório:**
   - Vá em Settings → Pages
   - Em "Source", selecione **"GitHub Actions"**
   - Salve

2. **Fazer push das alterações:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment"
   git push origin main
   ```

3. **Aguardar o deploy:**
   - Vá em Actions no GitHub
   - O workflow será executado automaticamente
   - Aguarde a conclusão (geralmente 2-3 minutos)

4. **Acessar o site:**
   - URL: https://ryannalmeida.github.io/my-portfolio/

### Opção 2: Deploy Manual

1. **Fazer build local:**
   ```bash
   npm run build
   ```

2. **Configurar GitHub Pages:**
   - Vá em Settings → Pages
   - Em "Source", selecione **"Deploy from a branch"**
   - Branch: `main`
   - Folder: `/dist`
   - Salve

3. **Fazer push da pasta dist:**
   ```bash
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## 📋 Configurações Importantes

### Branch para Deploy
- **Branch:** `main` (ou `master`)

### Pasta do Deploy
- **Pasta:** `/dist` (gerada pelo `npm run build`)

### Comando de Build
```bash
npm run build
```

## 🔍 Verificação

Após o deploy, verifique:
- ✅ Site carrega sem tela branca
- ✅ Todos os assets (imagens, CSS, JS) carregam corretamente
- ✅ Navegação funciona
- ✅ Links internos funcionam
- ✅ Download do currículo funciona

## 🐛 Troubleshooting

### Tela branca
- Verifique o console do navegador (F12)
- Confirme que o `base` está correto no `vite.config.ts`
- Verifique se o HashRouter está sendo usado

### Assets não carregam
- Verifique se os caminhos estão relativos
- Confirme que o `base` está configurado corretamente
- Limpe o cache do navegador (Ctrl+Shift+R)

### 404 em rotas
- HashRouter deve resolver isso automaticamente
- URLs serão: `https://ryannalmeida.github.io/my-portfolio/#/`

## 📝 Notas

- O workflow do GitHub Actions faz deploy automático a cada push
- O HashRouter adiciona `#` nas URLs, mas funciona perfeitamente no GitHub Pages
- Todos os caminhos foram ajustados para funcionar com o base path `/my-portfolio/`

