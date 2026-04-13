---
title: Lectionary
permalink: /lectionary/
description: The LSB One-Year Lectionary with Sunday Scripture readings, daily readings, and liturgical colors for each Sunday of the Church Year.
priority: 0.7
changefreq: weekly
---
{% include "partials/church-nav.html" %}

<div class="bg-dark-bg text-link font-serif py-[40px] px-[20px] max-w-[1100px] mx-auto text-center">

  <header class="mb-[20px]">
    <h1 class="text-accent uppercase tracking-[3px] mb-[10px] !text-[1.8rem]">One Year Lectionary</h1>
  </header>

  <p class="mb-[20px]">The appointed Scripture readings for each Sunday of the Church Year, from the <em>Lutheran Service Book</em><br/>One-Year Lectionary. Also includes daily Scripture readings for the rest of the week.</p>

  <div id="lectionary-calendar" class="mb-[25px]">
    <p>Loading lectionary…</p>
  </div>

  <div class="mt-[0px] mb-[40px] text-accent-blue italic">
    <p class="mb-3">This lectionary calendar is a modified version of <i>lectionary-js</i>, created by Stan Lemon, available <a href="https://github.com/stanlemon/lectionary-js">here on GitHub</a>.</p>
  </div>

</div>

<script src="{{ '/assets/scripts/lectionary.js' | url }}"></script>
