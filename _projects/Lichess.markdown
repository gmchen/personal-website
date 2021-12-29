---
layout: page
title: Chess Opening Performance
description: 
img: /assets/img/lichess-screenshot.png
importance: 5
---

Computers are much better than human chess players these days, but to what extent does the computer evaluation of a chess opening correlate with real-life human performance?

Using the wonderful [Lichess API](https://lichess.org/api){:target="\_blank"}, I downloaded statistics for ~3,400 chess openings, and compared the computer evaluation (x axis) with real-life performance of Lichess users (y axis) under different time controls. 

The association between human performance and computer evaluation can be seen below, and there are notable and interesting exceptions. This correlation is much weaker in faster time controls, such as in bullet chess where almost any opening is viable in a typical online chess game. I put together an interactive data visualization [here](https://gmchen.github.io/Lichess_Opening_Performance){:target="\_blank"} where chess openings can be explored, searched, and clicked on to open a Lichess analysis board. The top-left and bottom-right quadrants are full of interesting openings in which human performance is discordant with computer evaluation - for instance, gambits, traps, and attacking positions (e.g. the Double Muzio Gambit, Elephant Gambit: Wasp Variation).

<div class="row">
<div class="col-sm mt-3 mt-md-0">
<p style="text-align:center;">
<a href="https://gmchen.github.io/Lichess_Opening_Performance/" target="_blank" rel="noopener noreferrer">
<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/lichess-screenshot.png' | relative_url }}" alt="" title="Lichess Opening Performance Screenshot"/>
</a>
</p>
</div>
</div>
