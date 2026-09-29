---
theme: slidev-theme-tahta
title: Integração de IHC com Engenharia de Software
aspectRatio: 16/10
info: |
  Aula 09 — Integração de IHC com Engenharia de Software
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
browserExporter: build
---
---
layout: section
index: T
title: Teoria
---
---
layout: default
kicker: Barbosa e Silva (2010) · síntese
title: Interação Humano-Computador
---

Área que estuda e projeta sistemas interativos para apoiar atividades humanas, avaliando sua utilização e os fenômenos associados a ela.

- Considera pessoas, atividades e contextos de uso.
- Investiga a qualidade da interação e seus efeitos.

<p class="lesson-caveat">Definição apresentada pelos autores a partir de Hewett et al. (1992).</p>

---
layout: default
kicker: Pressman (2011) · síntese da definição do IEEE
title: Engenharia de Software
---

Aplicação de princípios de engenharia para desenvolver, operar e manter software de maneira organizada, disciplinada e mensurável.

- Articula processos, métodos e ferramentas.
- Sustenta o desenvolvimento em um compromisso com a qualidade.

---
layout: default
kicker: Perspectiva de construção
title: Engenharia de Software
---

- Desenvolver software sistematicamente.
- Focar a qualidade da construção: correção, confiabilidade e manutenção.
- Na visão do sistema, a interface é uma forma de comunicação com o mundo externo.

<Callout tone="info" icon="lucide:lightbulb">
Para quem usa, a interface é o meio de compreender e operar o sistema.
</Callout>

<!-- ---
layout: two-cols
kicker: Quando o usuário entra em cena
title: O uso real desafia o uso previsto
---

### Expectativa de projeto

Espera-se que os usuários compreendam a interface e usem o sistema corretamente.

Essa expectativa precisa ser verificada.

::right::

### Características humanas

- Atenção e memória limitadas.
- Experiências e interpretações diferentes.
- Erros, interrupções e mudanças de contexto. -->

---
layout: statement
kicker: Uma provocação para discutir
title: Software é determinístico.<br>Interação é estocástica.
---

<!-- Em um programa determinístico, as mesmas entradas e o mesmo estado produzem o mesmo resultado.

Na interação, ações e interpretações variam entre pessoas e situações.

<p class="lesson-caveat">Contraste didático: nem todo software é determinístico; “estocástica” destaca a variabilidade do comportamento humano.</p> -->

---
layout: vs
kicker: Ênfases complementares, não fronteiras rígidas
title: IHC × ES
label: +
left:
  title: IHC - centrada no uso
right:
  title: ES - centrada no sistema
---
---
layout: default
kicker: Da aproximação à prática
title: Formas de integração entre IHC e ES
class: integration-slide
---

- **Processos adaptados:** incorporar atividades e critérios de IHC ao desenvolvimento.
- **Processos em paralelo:** coordenar descobertas e entregas de IHC e ES.
- **Métodos de IHC nas atividades de ES:** usar cenários, protótipos e avaliações.

---
layout: image
side: right
image: ../../assets/ihc-ux-book-cover.png
title: Leitura sugerida
class: book-slide
---

Páginas 128 a 133.


---
layout: default
kicker: Para aprofundar
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

<img src="../../assets/qrcode-avaliacao.png" width="300px" />
