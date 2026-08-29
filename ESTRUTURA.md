# Estrutura da V1

A V1 foi organizada para separar **conteúdo editorial** de **infraestrutura**.

## Onde você trabalhará no dia a dia

Quase todo o conteúdo fica em:

```text
src/content/docs/
├── torah/
├── parashot/
├── estudos/
├── glossario/
├── sobre.md
└── index.md
```

## Infraestrutura

- `astro.config.mjs`: site, URL, menus, busca, idioma, plugins e Starlight.
- `src/content.config.ts`: valida os metadados dos arquivos Markdown.
- `src/styles/custom.css`: tema e tipografia.
- `src/components/PageTitle.astro`: exibe categoria e datas sob o título.
- `.github/workflows/deploy.yml`: publicação automática.
- `public/`: favicon e imagens estáticas futuras.
- `templates/`: modelos prontos de publicação.

## Conteúdo pré-criado

- 187 arquivos de capítulos da Torah em modo rascunho.
- 54 arquivos de parashot em modo rascunho.
- 5 índices dos livros na área Torah.
- 5 índices das parashot por livro.
- páginas iniciais de Torah, Parashot, Estudos, Glossário, Sobre e Home.
