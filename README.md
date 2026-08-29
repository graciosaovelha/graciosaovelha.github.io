# Graciosa Ovelha

> Um caminho diário pela Torah à luz da Cabalá autêntica.

Versão 1 da estrutura do site **Graciosa Ovelha**, construída com Astro + Starlight e preparada para publicação automática no GitHub Pages.

## O que já está pronto

- tema escuro minimalista em preto, marrom e dourado;
- modo claro/escuro nativo do Starlight;
- pesquisa full-text com Pagefind;
- índice automático dos títulos de cada página;
- navegação anterior/próximo;
- links permanentes para títulos;
- layout responsivo;
- metadados próprios para data, categoria, livro, capítulo e parashat;
- cinco livros da Torah estruturados;
- 187 capítulos pré-criados como rascunhos;
- 54 parashot pré-criadas como rascunhos;
- seção de Estudos, Glossário e Sobre;
- publicação automática via GitHub Actions.

## Requisitos locais

- Node.js 22.12 ou superior. Recomenda-se Node.js 24 LTS/estável.
- npm.

```bash
npm install
npm run dev
```

O servidor local indicará o endereço de acesso, normalmente `http://localhost:4321/graciosaovelha/`.

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Primeiro envio ao GitHub

Esta V1 pressupõe:

- usuário/organização do GitHub: `graciosaovelha`;
- repositório: `graciosaovelha`;
- URL final: `https://graciosaovelha.github.io/graciosaovelha/`.

Se algum desses nomes for diferente, altere as constantes `SITE`, `BASE` e `REPOSITORY` em `astro.config.mjs` antes de publicar.

Depois de colocar os arquivos no repositório:

1. Abra **Settings → Pages** no GitHub.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça um commit/push para a branch `main`.
4. O workflow `.github/workflows/deploy.yml` fará o build e o deploy.

O primeiro `npm install` local criará `package-lock.json`. É recomendável versioná-lo no repositório depois disso para builds ainda mais reproduzíveis.

## Como publicar um estudo diário

Os arquivos já existem em, por exemplo:

```text
src/content/docs/torah/bereshit/capitulo-01.md
```

Para publicar:

1. Abra o arquivo desejado.
2. Escreva o estudo.
3. Troque `draft: true` por `draft: false` ou remova a linha `draft`.
4. Acrescente a data, se desejar:

```yaml
publishedAt: 2026-08-28
```

5. Faça commit.

## Como publicar uma parashat

O processo é igual. Exemplo:

```text
src/content/docs/parashot/bereshit/noach.md
```

Edite o conteúdo, altere `draft: true` para `draft: false`, informe `publishedAt` e faça commit.

## Datas

Use sempre o formato:

```yaml
publishedAt: AAAA-MM-DD
updatedAt: AAAA-MM-DD
```

`updatedAt` é opcional.

## Estrutura

Consulte `ARVORE_DO_PROJETO.txt` para a árvore completa de diretórios e arquivos gerados.

## Identidade visual

A V1 inclui um **logo SVG provisório**, pequeno e vetorial, para que o site funcione imediatamente sem depender de imagens externas. Ele pode ser substituído depois sem alterar a arquitetura do projeto.

Os arquivos principais da identidade visual são:

```text
src/assets/logo.svg
public/favicon.svg
src/styles/custom.css
```

## Idiomas

A língua raiz está configurada como `pt-BR`. A estrutura do Starlight permite adicionar outros idiomas posteriormente sem reconstruir o projeto do zero.
