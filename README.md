# São Paulo FC — Tradição Tricolor

Projeto acadêmico de **João Pedro** para a disciplina **Desenvolvimento Front-End para Web**.

## Objetivo
Criar um site informativo e responsivo sobre o São Paulo Futebol Clube, usando HTML5 semântico, CSS3 e JavaScript puro.

## Funcionalidades
- Navegação por âncoras e menu mobile com `aria-expanded`.
- História, tabela de títulos, estádio, agenda demonstrativa e galeria gráfica feita com CSS.
- Formulário com validação em JavaScript e feedback acessível (não envia dados).
- Layout responsivo com Grid, Flexbox e media queries.
- Metadados, link para pular conteúdo e atributos de acessibilidade.

## Estrutura
```
index.html
css/style.css
js/script.js
assets/ (reservada para arquivos locais futuros)
.gitignore
README.md
```

## Executar
Abra `index.html` no navegador ou utilize a extensão Live Server no VS Code. Não é necessário instalar dependências.

## Testes manuais
1. Navegue pelas seções e teste os links.
2. Reduza a janela e verifique o menu mobile.
3. Envie o formulário vazio, depois com campos inválidos e, por fim, com valores válidos.
4. Inspecione Console e Network no DevTools.
5. Teste a navegação por Tab e o layout no celular.

## Git e avaliação por pares
O estudante deve criar seu **próprio repositório público**, realizar commits descritivos, criar uma branch de desenvolvimento e abrir um Pull Request para revisão por um colega. Essas etapas não são realizadas apenas com os arquivos do ZIP.

Exemplo de sequência:
```
git init
git add .
git commit -m "feat: estrutura inicial do site tricolor"
git branch -M main
git switch -c feature/melhorias
# Fazer e registrar uma melhoria real antes de abrir o PR
```

## Observações
Projeto independente, não oficial. A agenda não exibe partidas em tempo real. Imagens ilustrativas são geradas com CSS, sem depender de arquivos externos.
