import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const diretorios = [
  'src/content/docs/torah',
  'src/content/docs/parashot',
];

async function listarMarkdown(diretorio) {
  const arquivos = [];

  const itens = await readdir(diretorio, {
    withFileTypes: true,
  });

  for (const item of itens) {
    const caminho = path.join(diretorio, item.name);

    if (item.isDirectory()) {
      arquivos.push(...await listarMarkdown(caminho));
    } else if (
      item.isFile() &&
      item.name.endsWith('.md')
    ) {
      arquivos.push(caminho);
    }
  }

  return arquivos;
}

function removerTagsSeForRascunho(conteudo) {
  const frontmatter = conteudo.match(
    /^---\r?\n([\s\S]*?)\r?\n---/
  );

  if (!frontmatter) {
    return null;
  }

  const dados = frontmatter[1];

  if (!/^draft:\s*true\s*$/m.test(dados)) {
    return null;
  }

  const novosDados = dados.replace(
    /^tags:\s*\r?\n(?:[ \t]+-\s*.*(?:\r?\n|$))+/m,
    ''
  );

  if (novosDados === dados) {
    return null;
  }

  return conteudo.replace(
    frontmatter[0],
    `---\n${novosDados.trimEnd()}\n---`
  );
}

let alterados = 0;

for (const diretorio of diretorios) {
  const arquivos = await listarMarkdown(diretorio);

  for (const arquivo of arquivos) {
    const conteudo = await readFile(arquivo, 'utf8');

    const novoConteudo =
      removerTagsSeForRascunho(conteudo);

    if (!novoConteudo) {
      continue;
    }

    await writeFile(
      arquivo,
      novoConteudo,
      'utf8'
    );

    console.log(`✔ ${arquivo}`);

    alterados++;
  }
}

console.log('');
console.log(
  `${alterados} arquivo(s) de rascunho atualizado(s).`
);