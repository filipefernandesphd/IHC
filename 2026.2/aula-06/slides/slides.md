---
theme: slidev-theme-tahta
title: Engenharia de Usabilidade de Nielsen
aspectRatio: 16/10
info: |
  Aula sobre Engenharia de Usabilidade de Nielsen
themeConfig:
  variant: minimal
addons:
  - slidev-addon-citations
biblio:
  filename: references.bib
  show_full_bib: true
  show_id: false
mdc: true
routerMode: hash
layout: academic-cover
---
---
layout: section
title: Engenharia de Usabilidade
index: "Nielsen"
subtitle: Atividades de usabilidade ao longo do ciclo de vida do projeto
---
---
layout: default
kicker: Conceito
title: Engenharia de Usabilidade de Nielsen
---

<Callout icon="lucide:workflow">
Conjunto de atividades executadas durante o ciclo de vida do projeto [@nielsen1994usability].
</Callout>

<!-- A maioria das atividades ocorre no início do projeto. -->
---
layout: agenda
kicker: Visão geral
title: Atividades
items:
  - { topic: "1. Conheça seu usuário", desc: "Características, contexto, atividades e comportamentos" }
  - { topic: "2. Realize uma análise competitiva", desc: "Examine produtos semelhantes ou complementares" }
  - { topic: "3. Defina as metas de usabilidade", desc: "Estabeleça fatores de qualidade e indicadores" }
  - { topic: "4. Faça designs paralelos", desc: "Compare alternativas de solução" }
  - { topic: "5. Adote o design participativo", desc: "Mantenha contato contínuo com usuários" }
  - { topic: "6. Coordene a interface como um todo", desc: "Alinhe interface e artefatos" }
  - { topic: "7. Aplique diretrizes e análise heurística", desc: "Defina princípios e avalie a evolução" }
  - { topic: "8. Faça protótipos", desc: "Materialize e avalie alternativas" }
  - { topic: "9. Realize testes empíricos", desc: "Observe usuários interagindo" }
  - { topic: "10. Pratique design iterativo", desc: "Evolua com base nas avaliações" }
---
---
layout: default
title: Aviso
---
- Veremos cada atividade
- Aplicaremos no desenvolvimento de um jogo
---
layout: panels
kicker: Atividade 1
title: Estudar os Usuários
panels:
  - icon: "lucide:user-round"
    title: Características individuais
    items:
      - Perfil dos usuários
      - Necessidades relevantes
  - icon: "lucide:map-pin-house"
    title: Ambiente
    items:
      - Ambiente físico
      - Ambiente social de trabalho
  - icon: "lucide:activity"
    title: Atividades e comportamentos
    items:
      - O que fazem
      - Como se comportam
---
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quem é o <span class="accent2">público-alvo</span>?
---
---
layout: define
kicker: Atividade 2
term: Análise Competitiva
definition: Examinar produtos com funcionalidades <span class="accent2">semelhantes ou complementares</span>.
points:
  - Identificar soluções já disponíveis
  - Observar decisões de interação e interface
  - Procurar oportunidades de melhoria
---
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais jogos são similares e <em>o que pode melhorar</em>?
---
---
layout: define
kicker: Atividade 3
term: Definição das Metas de Usabilidade
definition: Definir os <span class="accent2">fatores de qualidade de uso</span> que orientarão o projeto e sua avaliação.
---
---
layout: default
kicker: Definição das Metas de Usabilidade
title: Exemplo — Quiosque de fast food
---

<div class="usability-goals-slide">

<Callout icon="lucide:target">
<strong>Objetivo:</strong> diminuir para <strong>30%</strong> a desistência na busca por pedidos antes da conclusão.
</Callout>

<div class="usability-goals-slide__grid">

<section>
<h3>Metas</h3>

- Mais facilidade de aprendizado
- Mais eficiência do sistema
</section>

<section>
<h3>Indicadores</h3>

- Número de usuários
- Tempo para concluir a tarefa com sucesso
- Tempo para concluir a tarefa sem sucesso
- Número de erros cometidos
</section>

<Figure
  src="https://img.yfisher.com/m0/1784257159664-chatgpt-image-jul-17-2026-105234-am/png100-t3-scale100.webp"
  alt="Exemplo de sistema de quiosque de fast food"
  caption="Metas de usabilidade devem ser acompanhadas por indicadores observáveis."
/>

</div>
</div>
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais <span class="accent2">metas e indicadores</span> podem ser definidos?
---
---
layout: default
kicker: Atividade 4
title: Design Paralelo
---

<Callout icon="lucide:git-branch">
Elaborar <span class="accent2">diferentes alternativas de design</span> para escolher a melhor solução.
</Callout>

<Tags :items="['alternativas', 'comparação', 'escolha']" />

<!-- Preferencialmente, alguns designers trabalham em paralelo sobre a mesma solução. -->
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais soluções podem ser feitas para <em>uma funcionalidade</em> do jogo?
---
---
layout: panels
kicker: Atividade 5
title: Design Participativo
panels:
  - icon: "lucide:users"
    title: Usuários representativos
    items:
      - Designers com acesso aos usuários
      - Contato com o público real
  - icon: "lucide:message-circle-more"
    title: Feedback constante
    items:
      - Sanar dúvidas rapidamente
      - Validar decisões ao longo do processo
---
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais formas permitem contato <span class="accent2">constante</span> com os usuários?
---
---
layout: default
kicker: Atividade 6
title: Design Coordenado da Interface
---

Garantir a **aderência da interface** aos diferentes artefatos envolvidos no projeto.

<Tags :items="['requisitos', 'documentação', 'tutoriais']" />

<Callout icon="lucide:link-2">
A interface não deve evoluir isoladamente dos demais artefatos do sistema.
</Callout>
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais <em>artefatos</em> devem ser mantidos?
---
---
layout: default
kicker: Atividade 7
title: Diretrizes
---

Definir **princípios de design** e avaliá-los a cada evolução da solução.

<Callout icon="lucide:compass">
<b>Exemplo — sistema web</b>: o usuário deve saber <span class="accent2">onde está</span>, <span class="accent2">de onde veio</span> e <span class="accent2">para onde pode ir</span>.
</Callout>
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais <span class="accent2">diretrizes</span> o jogo deve ter?
---
---
layout: vs
kicker: Atividade 8
title: Protótipos
label: ou
left:
  title: Horizontal
  items:
    - Visão geral do produto
    - Cobertura ampla da interface
    - Menor profundidade funcional
right:
  title: Vertical
  items:
    - Visão de uma funcionalidade
    - Maior profundidade
    - Avaliação detalhada de uma parte
---
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Como seria o desenvolvimento do <em>protótipo</em>?
---
---
layout: define
kicker: Atividade 9
term: Testes Empíricos
definition: <span class="accent2">Observar a interação dos usuários</span> com a solução para obter evidências sobre seu uso.
---
---
layout: statement
kicker: Desenvolvimento do Jogo
title: <span class="accent2">Como</span> e <span class="accent2">com quem</span> avaliar o jogo?
---
---
layout: steps
kicker: Atividade 10
title: Design Iterativo
ghost: "↻"
steps:
  - { title: Projetar, desc: "Criar ou evoluir a solução", icon: "lucide:pencil-ruler" }
  - { title: Avaliar, desc: "Realizar avaliações empíricas", icon: "lucide:clipboard-check" }
  - { title: Aprender, desc: "Interpretar evidências e problemas encontrados", icon: "lucide:search-check" }
  - { title: Melhorar, desc: "Modificar o design com base nos resultados", icon: "lucide:refresh-cw" }
---
---
layout: statement
kicker: Desenvolvimento do Jogo
title: Quais estratégias de <em>evolução</em> o jogo deve seguir?
---
---
layout: section
title: Hands-On
index: "H"
subtitle: Aplicando a Engenharia de Usabilidade de Nielsen
---
---
layout: default
kicker: Hands-On
title: Na prática
---

- Você desenvolverá uma **solução totalmente nova**.
- Demonstre como a **Engenharia de Usabilidade de Nielsen** pode ser aplicada.

<Callout tone="accent" icon="lucide:lightbulb">
<b>Dica</b>: aproveite para desenvolver esta parte do trabalho.
</Callout>

---
layout: default
title: Referências
---

<BiblioList />

---
layout: feature
kicker: Encerramento
title: Obrigado!
columns: 2
features:

- { icon: "lucide:globe", desc: filipefernandesphd.com }
- { icon: "lucide:instagram", desc: "@filipfernandesphd" }

---

---
layout: two-cols
title: Avaliação da Experiência de Aprendizagem
---

- **[Seu feedback é muito importante!](https://forms.gle/CMfL5oTm235FfuH59)**
- Obtenha o código da avaliação

::right::

<img src="../../assets/qrcode-avaliacao.png" alt="QR Code para avaliação da experiência de aprendizagem" />
