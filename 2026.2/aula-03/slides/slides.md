---
theme: slidev-theme-tahta
title: Qualidade em IHC
aspectRatio: 16/10
info: |
  Qualidade em IHC
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
layout: image
image: "../../assets/valeapena.jpeg"
---
- **Interação:** processo que ocorre durante o uso
- **Interface:** porção do sistema com a qual o usuário mantém contato físico ou mental


<!-- ---
layout: two-cols
title: Vale a Pena Ver de Novo
---

- **Interação:** processo que ocorre durante o uso
- **Interface:** porção do sistema com a qual o usuário mantém contato físico ou mental

::right::

<Figure
  src="../../assets/valeapena.jpeg"
  alt="Cartaz do programa Vale a Pena Ver de Novo"
  caption="Relembrando conceitos da aula anterior"
/> -->

<!--
[Sources]
- https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLI1D6iq4qEO7D-I8F-ccG2Nnfrun-5iR-h-3ANuzJjC-uRwOV
-->

---
layout: statement
kicker: Qualidade em IHC
title: Quais <span class="accent2">critérios de qualidade</span> a interação e a interface devem ter?
---

---
layout: default
title: Critérios de Qualidade
---

<div class="quality-criteria">
  <div><span>01</span><strong>Usabilidade</strong></div>
  <div><span>02</span><strong>User eXperience (UX)</strong></div>
  <div><span>03</span><strong>Acessibilidade</strong></div>
  <div><span>04</span><strong>Comunicabilidade</strong></div>
</div>

---
layout: section
title: Usabilidade
index: "U"
---

---
layout: default
title: Definição
kicker: Usabilidade
---

<p class="quality-definition">
  Usabilidade é um conjunto de fatores que qualificam quão bem uma pessoa pode interagir com um sistema computacional interativo <Cite bref="nielsen1994usability" />.
</p>

---
layout: default
title: Fatores de Usabilidade
---

1. Facilidade de aprendizado (*learnability*)
2. Facilidade de recordação (*memorability*)
3. Eficiência (*efficiency*)
4. Segurança no uso (*safety*)
5. Satisfação do usuário (*satisfaction*)

---
layout: default
title: Facilidade de Aprendizado (learnability)
kicker: Fator 1/5 de Usabilidade
---

- **Tempo** e **esforço** necessários para o usuário aprender a utilizar o sistema

---
layout: default
title: Facilidade de Recordação (memorability)
kicker: Fator 2/5 de Usabilidade
---

- **Esforço cognitivo** necessário para o usuário lembrar como interagir

---
layout: default
title: Eficiência (efficiency)
kicker: Fator 3/5 de Usabilidade
---

- **Tempo** necessário para o usuário concluir uma tarefa

---
layout: default
title: Segurança no Uso (safety)
kicker: Fator 4/5 de Usabilidade
---

- **Nível de proteção** contra situações desfavoráveis
  - Exemplo: evitar acionar telas ou comandos por engano

---
layout: default
title: Satisfação do Usuário (satisfaction)
kicker: Fator 5/5 de Usabilidade
---

- Avaliação subjetiva das **emoções e dos sentimentos** do usuário durante a interação

---
layout: section
title: User eXperience
index: "UX"
---

---
layout: default
title: O que é UX?
---

- Há várias definições de experiência do usuário na literatura
- O conceito envolve mais que executar uma tarefa com sucesso

---
layout: default
title: Definição
kicker: UX
---

<p class="quality-definition">
  “As percepções e respostas de uma pessoa que resultam do uso ou da antecipação do uso de um produto, sistema ou serviço” <Cite bref="rajanen2017ux" />.
</p>

---
layout: statement
kicker: UX em Jogos Digitais
title: O que um jogo deve ter para <span class="accent2">engajar</span> o jogador?
---

---
layout: default
title: Quais Jogos São Bons?
---

<div class="game-grid" role="list" aria-label="Exemplos de jogos digitais">
  <figure role="listitem">
    <img src="../../assets/jogo-gta6.jpg" alt="Arte oficial de Grand Theft Auto VI" />
    <figcaption>GTA VI</figcaption>
  </figure>
  <figure role="listitem">
    <img src="../../assets/jogo-fortnite.jpg" alt="Arte oficial de Fortnite" />
    <figcaption>Fortnite</figcaption>
  </figure>
  <figure role="listitem">
    <img src="../../assets/jogo-roblox.jpg" alt="Arte oficial de uma experiência Roblox" />
    <figcaption>Roblox</figcaption>
  </figure>
  <figure role="listitem">
    <img src="../../assets/jogo-battlefield.jpg" alt="Arte oficial de Battlefield 6" />
    <figcaption>Battlefield</figcaption>
  </figure>
  <figure role="listitem">
    <img src="../../assets/jogo-valorant.jpg" alt="Arte oficial de Valorant" />
    <figcaption>Valorant</figcaption>
  </figure>
</div>

<div class="source-line">Imagens: Rockstar Games · Epic Games · Roblox · Electronic Arts · Riot Games</div>

<!--
[Sources]
- https://www.rockstargames.com/VI/media/artwork-wallpapers
- https://store.epicgames.com/p/fortnite
- https://about.roblox.com/press-kit
- https://www.ea.com/games/battlefield/battlefield-6
- https://playvalorant.com/en-us/media/
-->

---
layout: section
title: Acessibilidade
index: "A"
---

---
layout: statement
kicker: Definição
title: Capacidade do usuário de <span class="accent2">interagir sem barreiras</span> impostas pela interface
---

---
layout: default
title: Tipos de Barreiras
---

<div class="barrier-figure">
  <Figure
    src="../../assets/barreiras-acessibilidade.png"
    alt="Seis tipos de barreiras de acessibilidade: visuais, auditivas, vocais, motoras, neurológicas e cognitivas"
    caption="Barreiras de acessibilidade que podem afetar a interação"
  />
  <div class="figure-citation">Fonte: <Cite bref="w3cAccessibilityIntro" /></div>
</div>

<!--
[Sources]
- https://www.w3.org/WAI/fundamentals/accessibility-intro/
- Imagem gerada com OpenAI ImageGen para esta apresentação.
-->

---
layout: section
title: Comunicabilidade
index: "C"
---

---
layout: statement
kicker: Definição
title: Capacidade da interface de <span class="accent2">comunicar ao usuário</span> a lógica do design
---

---
layout: default
title: Exemplo
---

<Figure
  src="../../assets/avast.jpg"
  alt="Mensagem do Avast usada como exemplo de comunicabilidade de interface"
  caption="A interface comunica claramente sua lógica e as consequências das ações?"
/>

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
