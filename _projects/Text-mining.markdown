---
layout: page
title: Text Mining of the Medical Literature
description: 
img: /assets/img/jama-network-open-small.png
importance: 3
---

In this project, I asked the question: How has the language of clinical investigation changed in the last 40 years, and what can we learn from this? I downloaded >300,000 PubMed records from 5 premier medical journals and focused on trends in article titles, identifying monograms (single words) or bigrams (adjacent pairs of words) with significant increases or decreases in frequency between the 1976-2015.

<div class="row">
<div class="col-sm mt-3 mt-md-0">
<p style="text-align:center;">
<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/jama-network-open-fig1-alternate.png' | relative_url }}" alt="" title="JAMA Network Open Fig 1"/>
</p>
</div>
</div>
<div class="caption">
Figure 1, showing the top words (left) or adjacent pairs of words (right) with a change in frequency over the last 40 years in titles of JAMA
</div>

Focusing on titles of JAMA articles, I observed a number of interesting trends:
- The biggest change was a meteoric rise in the use of epidemiological terms ("randomized", "trial", "outcomes", "risk")
- There was a decline in the language of causality ("caused by", "cause of") with a concomitant increase in "association between", "association of"
- The use of "the elderly" decreased significantly over time, while "older adults" and "older patients" has become more popular
- While "diabetes" was one of the top increased words, "diabetic" has become less popular. In general, we observed a trend in titles to separate patient from disease; while articles from prior decades would refer to "diabetic patients" or guidelines for "the diabetic", recent decades are more likely to refer to "patients with diabetes" or "adults with diabetes"
- This trend toward separation of patient and disease was consistent in 4/5 journals, in which use of a patient-centered noun in the title (rather than the disease process alone) has became a much more common way to refer to medical entities

<div class="row">
<div class="col-sm mt-3 mt-md-0">
<p style="text-align:center;">
<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/jama-network-open-wordclouds.png' | relative_url }}" alt="" title="JAMA Network Open Fig 2"/>
</p>
</div>
</div>
<div class="caption">
Figure 2, showing word clouds of increased (blues and greens) and decreased (reds and purples) monograms and bigrams in JAMA titles over a 40-year period
</div>

**Chen GM**, Pather SR, DeLisser HM. _Trends in the Use of Common Words and Patient-Centric Language in the Titles of Medical Journals, 1976-2015._  
JAMA Network Open ([2019](https://jamanetwork.com/journals/jamanetworkopen/article-abstract/2728629){:target="\_blank"}).
