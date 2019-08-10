import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
 categoria:any;
 texto:any;
 imagem:any;
 habilitaimg:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.categoria=ev.detail.value;
    console.log(this.categoria);
    console.log('Segment changed', ev);
    if(this.categoria=="local 1"){
      this.habilitaimg=true;
      this.texto="A praça central de Bruxelas é um dos principais pontos turísticos do país e é cercada por prédios governamentais e a Casa do Rei, onde se encontra o Museu da Cidade de Bruxelas. Já muito bonita diariamente, a praça recebe, a cada dois anos, em agosto, um enorme tapete de flores, com begônias que cobrem a maior parte do lugar durante alguns dias";
      this.imagem="batalha.jpg";
    }
    if(this.categoria=="local 2"){
      this.habilitaimg=true;
      this.texto="A impressionante Catedral de Saint Bavo é outro dos principais pontos turísticos do país e o mais visitado da cidade. A torre em estilo gótico e a cripta romanesca são ótimos exemplos da arquitetura religiosa do país. Além da arquitetura fascinante, que por si só já valeria a pena, muitos turistas vão até lá para conferir o Retábulo de Gante, uma enorme pintura composta por doze painéis que é tida como de extrema importância para o Renascentismo flamengo e já foi surripiada pelas tropas de Napoleão e Hitler.";
      this.imagem="batalha.jpg";
    }
    if(this.categoria=="local 3"){
      this.habilitaimg=true;
      this.texto="A cidade de Ypres e seus arredores guardam até hoje diversas lembranças dos campos de batalha da Primeira Guerra Mundial, que ficou conhecida como Guerra de Trincheiras. A região, portanto, está cheia de trincheiras que se estendem por milhares de quilômetros, além de cemitérios e memorias que têm como objetivo relembrar a história e reforçar os horrores da guerra.";
      this.imagem="batalha.jpg";
    }

    if(this.categoria=="local 4"){
      this.habilitaimg=true;
      this.texto="A uma hora de distância de trem da capital, a pequenina cidade de arquitetura medieval tem catedrais, museus e belos canais – que não ficam atrás dos famosos de Amsterdã – e chega a parecer o cenário de um conta de fadas. Bruges é o lugar perfeito para um romântico passeio de barco, e, caso você se sinta aventureiro, vale pegar um mapa e explorar os canais mais escondidos. Você certamente não vai se arrepender com as paisagens pitorescas que vai encontrar.";
      this.imagem="batalha.jpg";
    }
    if(this.categoria=="local 5"){
      this.habilitaimg=true;
      this.texto=" A praça é o coração e ponto central da cidade, e tem sido, ao longo dos séculos, cenário de importantes acontecimentos do povo belga, o que inclui festas, coroações, batalhas e grandes eventos nacionais. Os destaques da praça são: o Palácio Provincial, com sua arquitetura gótico-moderna, assim como o Campanário Belfort, um dos cartões postais locais.";
      this.imagem="batalha.jpg";
    }
  }

}
