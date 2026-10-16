# Padilhae Advocacia — site institucional

Landing page da **Dra. Elisabete Padilha** (OAB/RS 358.12) — Avenida Itália, 192, São Pelegrino, Caxias do Sul/RS.

Site estático em HTML, CSS e JavaScript puros: não tem etapa de build nem dependências. Funciona em qualquer hospedagem de arquivos (Vercel, Netlify, Hostinger, cPanel etc.).

Desenvolvido por **SMK Marketing e Comunicação**.

---

## Estrutura

```
padilhae-advocacia/
├── index.html                 Página principal
├── 404.html                   Página de "não encontrada"
├── README.md                  Este arquivo
├── robots.txt                 Regras para buscadores + endereço do sitemap
├── sitemap.xml                Mapa do site para o Google
├── site.webmanifest           Nome, cores e ícones do site (celular)
├── favicon.ico                Ícone da aba (16/32/48 px)
├── apple-touch-icon.png       Ícone ao salvar na tela inicial do iPhone
└── assets/
    ├── css/styles.css         Todos os estilos, organizados por seção
    ├── js/main.js             Menu que encolhe ao rolar + formulário → WhatsApp
    ├── img/
    │   ├── elisabete-hero.webp       Foto do topo (4:5)
    │   ├── elisabete-sobre.webp      Foto da seção "A advogada" (4:5)
    │   ├── fachada-escritorio.webp   Foto do prédio, ao lado do mapa
    │   └── og-image.jpg              Imagem da prévia do link (1200×630)
    ├── brand/
    │   ├── logo-padilhae.webp        Logo do topo
    │   ├── logo-padilhae-branco.webp Logo do rodapé
    │   └── logo-padilhae.png         Logo em PNG (usado pelo Google nos dados estruturados)
    └── icons/
        ├── whatsapp.png              Ícone do botão flutuante
        ├── favicon-32.png
        ├── icon-192.png
        └── icon-512.png
```

Todos os caminhos são **relativos**: o site funciona aberto direto do computador, na raiz de um domínio ou dentro de uma subpasta.

---

## ⚠️ Antes de publicar: trocar o domínio

O projeto usa o endereço de exemplo **`https://www.SEUDOMINIO.com.br`** nos pontos que precisam do endereço completo do site. Troque pelo domínio definitivo em **todos** os arquivos abaixo:

| Arquivo | Onde aparece |
|---|---|
| `index.html` | `canonical`, `og:url`, `og:image`, `twitter:image` e os dados estruturados (JSON-LD) |
| `robots.txt` | linha `Sitemap:` |
| `sitemap.xml` | `<loc>` |

No VS Code: **Ctrl+Shift+H** (Substituir em arquivos) → buscar `https://www.SEUDOMINIO.com.br` → substituir por, por exemplo, `https://www.padilhaeadvocacia.com.br`.

No terminal (macOS/Linux), dentro da pasta do projeto:

```bash
grep -rl "SEUDOMINIO" . | xargs sed -i '' 's#https://www.SEUDOMINIO.com.br#https://www.padilhaeadvocacia.com.br#g'   # macOS
grep -rl "SEUDOMINIO" . | xargs sed -i 's#https://www.SEUDOMINIO.com.br#https://www.padilhaeadvocacia.com.br#g'      # Linux
```

Enquanto o domínio de exemplo estiver no código, a **prévia do link no WhatsApp/Instagram não aparece** e o Google recebe um endereço canônico errado. Não publique a versão final sem essa troca.

---

## Ver no computador

- Abrir o `index.html` com duplo clique já funciona. O mapa e a fonte precisam de internet.
- Ou rodar um servidor local na pasta: `npx serve .` e abrir o endereço que aparecer.

## Publicar na Vercel

**Pelo GitHub (recomendado):**
1. Crie um repositório e envie **o conteúdo desta pasta** para a raiz dele (o `index.html` precisa ficar na raiz, não dentro de outra pasta).
2. Na Vercel: **Add New → Project →** importe o repositório.
3. *Framework Preset*: **Other**. Deixe *Build Command* e *Output Directory* vazios.
4. **Deploy.**

**Pela linha de comando:** dentro da pasta, `npx vercel` e siga as perguntas.

Para ligar o domínio definitivo: projeto na Vercel → **Settings → Domains**.

---

## SEO incluído

- Título e descrição otimizados para busca local ("Caxias do Sul", "Direito Bancário", "Superendividamento" etc.).
- `canonical`, `robots` (indexação liberada) e `sitemap.xml` referenciado no `robots.txt`.
- Prévia do link: Open Graph + Twitter Card com imagem 1200×630.
- Dados estruturados (JSON-LD, Schema.org) em `@graph`: **LegalService** (escritório, endereço, telefones, mapa, áreas de atuação), **Person** (Dra. Elisabete, OAB) e **WebSite**.
- Metas de localização (`geo.region` BR-RS, `geo.placename` Caxias do Sul).
- HTML semântico: um único `h1`, seções com `h2`, áreas com `h3`; todas as imagens com texto alternativo.
- Desempenho: imagens em WebP com largura/altura definidas, foto do topo pré-carregada, demais imagens com carregamento tardio, fontes com `preconnect`.
- Ícones de aba, iPhone e Android + `site.webmanifest`.
- Página 404 própria (marcada como `noindex`).

## Depois de publicar

1. **Google Search Console**: adicionar o domínio e enviar `https://SEU-DOMÍNIO/sitemap.xml`.
2. **Perfil da Empresa no Google** (Google Meu Negócio): nome, endereço e telefone **iguais** aos do site — isso pesa muito no SEO local.
3. Testar a prévia do link no [Depurador de Compartilhamento do Facebook](https://developers.facebook.com/tools/debug/) (vale também para o WhatsApp).
4. Validar os dados estruturados no [Teste de pesquisa aprimorada](https://search.google.com/test/rich-results).
5. Conferir velocidade no [PageSpeed Insights](https://pagespeed.web.dev/).

---

## Como editar

- **Textos:** `index.html`. As seções têm `id`: `inicio`, `atuacao`, `sobre`, `contato`.
- **Visual:** `assets/css/styles.css`. As classes seguem o nome da seção (`header-*`, `hero-*`, `areas-*`, `sobre-*`, `contato-*`, `footer-*`) e o arquivo está dividido em Base → Seções → Interações → Responsivo.
- **Cores da marca:** carvão `#111111`, bordô `#7A1C23`, off-white `#F5F5F7`, linhas `#E5E7EB`. Fonte: Manrope (Google Fonts).
- **Fotos:** substitua mantendo o mesmo nome e proporção — topo e "A advogada" em 4:5 (mín. 1100×1375 px), WebP de preferência. A `og-image.jpg` precisa ter 1200×630 px e menos de 300 KB.
- **WhatsApp:** o número `5554991194950` aparece nos links `wa.me` do `index.html` e no `assets/js/main.js`.
- **Formulário:** como o site não tem servidor, o envio abre o WhatsApp da advogada com nome, telefone, área e mensagem já preenchidos. Para receber por e-mail, é preciso integrar um serviço como Formspree ou Web3Forms.

## Pendências

- [ ] Domínio definitivo (ver seção acima).
- [ ] Página de **Política de Privacidade** — o link do rodapé ainda aponta para `#`.
- [ ] Confirmar com a cliente o uso do termo **"especialista"** no botão do topo (pelas regras de publicidade da OAB, deve corresponder a título de especialização).
- [ ] Confirmar o formato do número da OAB (`358.12`).
- [ ] Quando houver Instagram/LinkedIn do escritório, incluir em `sameAs` nos dados estruturados.

## Conformidade com a OAB

Conteúdo de caráter informativo, sem promessa de resultado, com aviso no rodapé citando o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do Conselho Federal.
