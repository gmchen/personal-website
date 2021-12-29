---
layout: page
title: Computational Methods for Cancer and Drug Discovery
description: 
img: /assets/img/consensusOV-icon.png
importance: 2
---

### Molecular subtypes of ovarian cancer

In this project, I sought to leverage a compendium of whole-transcriptome gene expression datasets to better understand molecular subtypes of high-grade serous ovarian carcinoma. I developed a random forest-based model, consensusOV, that outputs subtype predictions and real-valued posterior probabilities, and demonstrated an emerging consensus among independently published proposed subtypes. This is available in the R package [consensusOV](https://www.bioconductor.org/packages/release/bioc/html/consensusOV.html){:target="\_blank"}.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <p style="text-align:center;">
        <img style="width:100%; max-width:400px;" class="img-fluid rounded z-depth-1" src="{{ '/assets/img/consensusOV-ROC-updated.png' | relative_url }}" alt="" title="consensusOV ROC"/>
        </p>
    </div>
</div>
<div class="caption">
    An updated version of Fig. 6B, showing that consensusOV margin values based on posterior probabilities can help identify cancers of distinct vs indeterminate subtype
</div>

**Chen GM**\*, Kannan L\*, Geistlinger L, Kofia V, Safikhani Z, Gendoo DM, Parmigiani G, Birrer M, Haibe-Kains B#, Waldron L#. _Consensus on Molecular Subtypes of High-Grade Serous Ovarian Carcinoma._  
Clinical Cancer Research ([2018](https://clincancerres.aacrjournals.org/content/24/20/5037.full){:target="\_blank"}).

<br>

### Computational methods for drug discovery

A significant proportion of small-molecule drugs derive from natural products produced by microorganisms such as bacteria and fungi. These organisms produce bioactive small molecules through a fascinating system of biosynthetic machinery, in which their genomes encode enzymatic 'assembly lines' that synthesize chemical structures in a stepwise fashion. One of the key challenges in this field is: how can we connect the large quantities of genomic data with chemical structures and biochemical knowledge to improve the process of discovering new drugs? Toward this challenge, I designed two computational tools: GRAPE, a tool for predicting the biosynthetic assembly lines involved in a given small-molecule chemical structure; and GARLIC, a dynamic programming algorithm for matching small molecule chemical structures to the underlying biosynthetic genomic components. Along with other talented scientists in the Magarvey Lab, these tools have been used to link natural products to 'orphan' biosynthetic gene clusters, and identify an antibiotic family with a new mechanism of action.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <p style="text-align:center;">
        <img style="width:100%; max-width:500px;" class="img-fluid rounded z-depth-1" src="{{ '/assets/img/Nature-ChemBio-Fig2.png' | relative_url }}" alt="" title="Nature Chemical Biology Fig 2"/>
        </p>
    </div>
</div>
<div class="caption">
    Fig. 2 showing the biochemical logic of GRAPE, which aims to reverse-engineer the biosynthetic assembly lines of small-molecule natural products based on chemical structures
</div>

Dejong CA\*, **Chen GM**\*, Li H\*, Johnston CW, Edwards MR, Rees PN, Skinnider MA, Webster ALH, Magarvey NA. _Polyketide and nonribosomal peptide retro-biosynthesis and global gene cluster matching._  
Nature Chemical Biology ([2016](https://www.nature.com/articles/nchembio.2188){:target="\_blank"}).

Johnston CW, Skinnider MA, Dejong C, Rees P, **Chen GM**, Walker C, French S, Brown ED, Berdy J, Liu D, Magarvey NA. _Collecting and clustering natural antibiotics guides identification of evolved targets._  
Nature Chemical Biology ([2016](https://www.nature.com/articles/nchembio.2018){:target="\_blank"}).
