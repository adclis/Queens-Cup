import { useState } from "react";

// ─── CORES DA LOGO QUEENS CUP ─────────────────────────────────────
const Q = {
  pink:     "#FF2EAD",
  pinkD:    "#CC1A8A",
  pinkL:    "#FF6FCC",
  lime:     "#C8E600",
  limeD:    "#9BB800",
  white:    "#FFFFFF",
  bg:       "#FFF0F9",
  bgCard:   "#FFFFFF",
  dark:     "#1A0012",
  gray:     "#8B7A86",
  grayL:    "#F3EDF1",
  border:   "#FFD6F0",
};

// ─── LOGO SVG (baseada na imagem: coroa lime + raquete pink) ──────
function QueensLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* raquete */}
      <ellipse cx="68" cy="30" rx="22" ry="22" fill={Q.pink} />
      <circle cx="62" cy="24" r="3" fill="white" opacity=".8"/>
      <circle cx="70" cy="24" r="3" fill="white" opacity=".8"/>
      <circle cx="78" cy="24" r="3" fill="white" opacity=".8"/>
      <circle cx="62" cy="32" r="3" fill="white" opacity=".8"/>
      <circle cx="70" cy="32" r="3" fill="white" opacity=".8"/>
      <circle cx="78" cy="32" r="3" fill="white" opacity=".8"/>
      <circle cx="66" cy="40" r="3" fill="white" opacity=".8"/>
      <circle cx="74" cy="40" r="3" fill="white" opacity=".8"/>
      {/* cabo */}
      <rect x="44" y="48" width="8" height="28" rx="4" fill={Q.pink} transform="rotate(-35 44 48)"/>
      {/* coroa */}
      <path d="M10 55 L10 42 L20 50 L30 35 L40 50 L50 42 L50 55 Z" fill={Q.lime}/>
      <circle cx="10" cy="40" r="3" fill={Q.lime}/>
      <circle cx="30" cy="33" r="3" fill={Q.lime}/>
      <circle cx="50" cy="40" r="3" fill={Q.lime}/>
      {/* base coroa */}
      <rect x="8" y="55" width="44" height="7" rx="3" fill={Q.lime}/>
      {/* linha decorativa */}
      <path d="M5 68 Q35 62 75 65" stroke={Q.pink} strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ─── RANKING OFICIAL (PDF — Feminina C 2026 · 10 etapas · 113 atletas) ──
const rankC = [
  { rank:1, name:"Vivi Coelho", pts:2850 },
  { rank:2, name:"Paula Feliz", pts:2300 },
  { rank:3, name:"Raiane Dias", pts:2050 },
  { rank:4, name:"Maria Ancila", pts:1950 },
  { rank:5, name:"Luciana Boeira", pts:1900 },
  { rank:6, name:"Julia Mendes", pts:1850 },
  { rank:7, name:"Carlisa Gomes", pts:1650 },
  { rank:8, name:"Ana Lucia Alge", pts:1450 },
  { rank:9, name:"Fabiola Miyagima", pts:1400 },
  { rank:10, name:"Gisele S Benato", pts:1150 },
  { rank:11, name:"Fernanda Santos", pts:1100 },
  { rank:12, name:"Ana Paula Dallastella", pts:1000 },
  { rank:13, name:"Glaucia Leite", pts:950 },
  { rank:14, name:"Ana Mancini", pts:850 },
  { rank:15, name:"Maiara Leal Spiaci", pts:750 },
  { rank:16, name:"Raissa Dias", pts:700 },
  { rank:17, name:"Carla Coelho", pts:650 },
  { rank:17, name:"Marcelina", pts:650 },
  { rank:19, name:"Caroline Pasinato", pts:600 },
  { rank:19, name:"Cris Casagrande", pts:600 },
  { rank:19, name:"Erika Hattori", pts:600 },
  { rank:19, name:"Erika Moreira", pts:600 },
  { rank:23, name:"Alicia Moss", pts:550 },
  { rank:23, name:"Brenda Marques", pts:550 },
  { rank:23, name:"Cassiana Tonet", pts:550 },
  { rank:23, name:"Fernanda Escobar", pts:550 },
  { rank:23, name:"Maisa Kataiama", pts:550 },
  { rank:23, name:"Tati de Oliveira", pts:550 },
  { rank:23, name:"Vanessa Stadler", pts:550 },
  { rank:30, name:"Fernanda Moreschi", pts:500 },
  { rank:30, name:"Milena Mayer", pts:500 },
  { rank:30, name:"Vanessa Thomaz", pts:500 },
  { rank:33, name:"Fabiana Nunes", pts:450 },
  { rank:33, name:"Maira Daros", pts:450 },
  { rank:33, name:"Silvia Schneider", pts:450 },
  { rank:36, name:"Paula Ferreira", pts:400 },
  { rank:37, name:"Aline Gaensly", pts:350 },
  { rank:37, name:"Ana Carla M Rodrigues", pts:350 },
  { rank:37, name:"Lorena Cortiani", pts:350 },
  { rank:37, name:"Martina Hffrichter", pts:350 },
  { rank:37, name:"Renata Suchek", pts:350 },
  { rank:42, name:"Ana Murbach", pts:250 },
  { rank:42, name:"Elaine Maiorki", pts:250 },
  { rank:42, name:"Fabiany Lamboia", pts:250 },
  { rank:42, name:"Katia Gomes", pts:250 },
  { rank:42, name:"Sandra Evelizi", pts:250 },
  { rank:47, name:"Danielle Sale", pts:200 },
  { rank:47, name:"Dina Santana", pts:200 },
  { rank:47, name:"Flavia Hass", pts:200 },
  { rank:47, name:"Isabela Rodrigues", pts:200 },
  { rank:47, name:"Karla Cunha", pts:200 },
  { rank:47, name:"Katiuza Brasil", pts:200 },
  { rank:47, name:"Maria Luisa Lincher (Malu)", pts:200 },
  { rank:47, name:"Mauren Colombo", pts:200 },
  { rank:47, name:"Nilshely", pts:200 },
  { rank:56, name:"Dani Borba", pts:150 },
  { rank:56, name:"Geovana Machado", pts:150 },
  { rank:56, name:"Monica Bora", pts:150 },
  { rank:59, name:"Amanda Nogueira", pts:100 },
  { rank:59, name:"Ana V Rigolino", pts:100 },
  { rank:59, name:"Barbara Luvison", pts:100 },
  { rank:59, name:"Fabiana Zapzalka", pts:100 },
  { rank:59, name:"Fernanda Gusso", pts:100 },
  { rank:59, name:"Kelen Ribeiro", pts:100 },
  { rank:59, name:"Kelly Ribeiro", pts:100 },
  { rank:59, name:"Leticia Girata", pts:100 },
  { rank:59, name:"Mylla Murta", pts:100 },
  { rank:59, name:"Rebecca", pts:100 },
  { rank:59, name:"Rosangela Pretko", pts:100 },
  { rank:59, name:"Vanessa Schultz", pts:100 },
  { rank:71, name:"Adriana Zaithammer", pts:50 },
  { rank:71, name:"Aghata Wuicik", pts:50 },
  { rank:71, name:"Alice Losso", pts:50 },
  { rank:71, name:"Aline Henz", pts:50 },
  { rank:71, name:"Ana Cristina Pretto", pts:50 },
  { rank:71, name:"Ana Paula Constantino", pts:50 },
  { rank:71, name:"Arizla Fernandes", pts:50 },
  { rank:71, name:"Bianca Behrens", pts:50 },
  { rank:71, name:"Bianca Belotti", pts:50 },
  { rank:71, name:"Bruna Naday", pts:50 },
  { rank:71, name:"Camila Almeida", pts:50 },
  { rank:71, name:"Danielle Konrad", pts:50 },
  { rank:71, name:"Danile Lima", pts:50 },
  { rank:71, name:"Deny Segantini", pts:50 },
  { rank:71, name:"Fernanda Risnei", pts:50 },
  { rank:71, name:"Gilmara Coronado", pts:50 },
  { rank:71, name:"Giselle Duarte", pts:50 },
  { rank:71, name:"Joelly Michelle", pts:50 },
  { rank:71, name:"Juliana Fukushima", pts:50 },
  { rank:71, name:"Kamile Enzo", pts:50 },
  { rank:71, name:"Karina Menegusso", pts:50 },
  { rank:71, name:"Karine Duarte", pts:50 },
  { rank:71, name:"Leidi Brancher", pts:50 },
  { rank:71, name:"Leila Caetano", pts:50 },
  { rank:71, name:"Leticia Kawata", pts:50 },
  { rank:71, name:"Lucianna Wieler", pts:50 },
  { rank:71, name:"Marcia Nonnenmacher", pts:50 },
  { rank:71, name:"Maria Claudia Rebelato", pts:50 },
  { rank:71, name:"Maria Emilia Staczuk", pts:50 },
  { rank:71, name:"Mariane Salvalaggio", pts:50 },
  { rank:71, name:"Mayra Favoretto", pts:50 },
  { rank:71, name:"Pathy Valerio", pts:50 },
  { rank:71, name:"Patrica Farracha", pts:50 },
  { rank:71, name:"Pri  Melo", pts:50 },
  { rank:71, name:"Rafaella Krelling", pts:50 },
  { rank:71, name:"Renata Emy Kuradomi", pts:50 },
  { rank:71, name:"Samantha Cim", pts:50 },
  { rank:71, name:"Sara Vdal", pts:50 },
  { rank:71, name:"Tatiane Balbinotti", pts:50 },
  { rank:71, name:"Tatiane Belotti", pts:50 },
  { rank:71, name:"Thais Wabesky", pts:50 },
  { rank:71, name:"Valery Riechi", pts:50 },
  { rank:71, name:"Vanessa Leandro", pts:50 },
];

// ─── RANKING OFICIAL Cat D (PDF — Feminina D 2026 · 10 etapas · 198 atletas) ──
const rankD = [
  { rank:1, name:"Camila Almeida", pts:4300 },
  { rank:2, name:"Cristiane Lirmann", pts:3450 },
  { rank:3, name:"Eliane Fabrini", pts:3350 },
  { rank:4, name:"Dayane Ramos", pts:2500 },
  { rank:5, name:"Mauren Colombo", pts:2450 },
  { rank:6, name:"Ale Nunes", pts:2350 },
  { rank:7, name:"Fernanda Moreira", pts:2200 },
  { rank:8, name:"Julliane Azevedo", pts:2150 },
  { rank:9, name:"Patty Calgaro", pts:2100 },
  { rank:10, name:"Danielle Konrad", pts:2000 },
  { rank:11, name:"Gabriela Bossardi", pts:1900 },
  { rank:12, name:"Julia Torres", pts:1800 },
  { rank:12, name:"Rafaela Almeida", pts:1800 },
  { rank:14, name:"Aline Henz", pts:1750 },
  { rank:14, name:"Daniele Pandini", pts:1750 },
  { rank:16, name:"Adri Vidal", pts:1500 },
  { rank:16, name:"Patricia Cruz", pts:1500 },
  { rank:16, name:"Vanessa Thomaz", pts:1500 },
  { rank:19, name:"Aimee Garcias", pts:1450 },
  { rank:19, name:"Cintia Claudino", pts:1450 },
  { rank:19, name:"Malu Lincher", pts:1450 },
  { rank:22, name:"Elisiane Berno", pts:1250 },
  { rank:22, name:"Soraya Palanicki", pts:1250 },
  { rank:24, name:"Francieli Procopio", pts:1150 },
  { rank:25, name:"Julia Barros", pts:1100 },
  { rank:25, name:"Tatiana Stadler", pts:1100 },
  { rank:27, name:"Arizla Fernandes", pts:1000 },
  { rank:28, name:"Adclis Souza", pts:950 },
  { rank:28, name:"Fatima Santos", pts:950 },
  { rank:30, name:"Katyulce Ribas", pts:900 },
  { rank:31, name:"Karine Age", pts:850 },
  { rank:32, name:"Gabriela Sivek", pts:800 },
  { rank:33, name:"Isadora Cirico", pts:750 },
  { rank:33, name:"Luciana V Souto", pts:750 },
  { rank:33, name:"Raquel Lucca", pts:750 },
  { rank:33, name:"Samara Mazetto", pts:750 },
  { rank:37, name:"Cleide Bruel", pts:700 },
  { rank:37, name:"Jacqueline Saldanha", pts:700 },
  { rank:37, name:"Monique de Lazzari", pts:700 },
  { rank:40, name:"Daisy Pereira", pts:650 },
  { rank:40, name:"Juliana Coelho", pts:650 },
  { rank:42, name:"Dani Moro", pts:600 },
  { rank:42, name:"Liana", pts:600 },
  { rank:42, name:"Rosmary Krasinski", pts:600 },
  { rank:45, name:"Alexandra Forillo", pts:550 },
  { rank:45, name:"Andrea Slonski", pts:550 },
  { rank:45, name:"Andresa R da Silva", pts:550 },
  { rank:45, name:"Camila Teodosio", pts:550 },
  { rank:45, name:"Carolina Mocelin", pts:550 },
  { rank:45, name:"Caroline Ruppel", pts:550 },
  { rank:45, name:"Flavia Ibrahim", pts:550 },
  { rank:45, name:"Gabriela Aguiar", pts:550 },
  { rank:45, name:"Isabela Rodrigues", pts:550 },
  { rank:45, name:"Mylla Murta", pts:550 },
  { rank:45, name:"Sara Vidal", pts:550 },
  { rank:45, name:"Thais Wabesky", pts:550 },
  { rank:57, name:"Perla Soteras", pts:500 },
  { rank:57, name:"Silvia Schneider", pts:500 },
  { rank:59, name:"Alessandra Gabardo", pts:450 },
  { rank:59, name:"Jessica Pavin", pts:450 },
  { rank:59, name:"Maria Cristina Lima", pts:450 },
  { rank:59, name:"Paula Silka", pts:450 },
  { rank:63, name:"Erika Moreira", pts:400 },
  { rank:63, name:"Maria Fernanda Geara", pts:400 },
  { rank:63, name:"Martina Mayer", pts:400 },
  { rank:63, name:"Paula Werle", pts:400 },
  { rank:67, name:"Amanda Capellani", pts:350 },
  { rank:67, name:"Apoenna Castro", pts:350 },
  { rank:67, name:"Bianca Maiorki", pts:350 },
  { rank:67, name:"Bruna Moribe", pts:350 },
  { rank:67, name:"Carolilne Rosa", pts:350 },
  { rank:67, name:"Eliana Vieira", pts:350 },
  { rank:67, name:"Elisa Andrade", pts:350 },
  { rank:67, name:"Emilly Alves", pts:350 },
  { rank:67, name:"Gisselli Badoch", pts:350 },
  { rank:67, name:"Isabela Hermont", pts:350 },
  { rank:67, name:"Karla Cunha", pts:350 },
  { rank:67, name:"Lara Nogueira", pts:350 },
  { rank:67, name:"Maisa", pts:350 },
  { rank:67, name:"Milena Mayer", pts:350 },
  { rank:67, name:"Monique Milfont", pts:350 },
  { rank:67, name:"Nina", pts:350 },
  { rank:67, name:"Sarah Leal", pts:350 },
  { rank:84, name:"Arlene Philipsen", pts:300 },
  { rank:84, name:"Bianca Biseto", pts:300 },
  { rank:84, name:"Elaine Oleczewski", pts:300 },
  { rank:84, name:"Laressa Bassetti", pts:300 },
  { rank:88, name:"Andreia Latreille", pts:250 },
  { rank:88, name:"Aniele", pts:250 },
  { rank:88, name:"Dolores", pts:250 },
  { rank:88, name:"Fabiany Lamboia", pts:250 },
  { rank:88, name:"Genilma Moura", pts:250 },
  { rank:88, name:"Mayra Castro", pts:250 },
  { rank:94, name:"Ana Murbach", pts:200 },
  { rank:94, name:"Daiane Santos", pts:200 },
  { rank:94, name:"Deise Correa", pts:200 },
  { rank:94, name:"Dewi", pts:200 },
  { rank:94, name:"Ericka Hattori", pts:200 },
  { rank:94, name:"Fabiana Nunes", pts:200 },
  { rank:94, name:"Fabiana Zapzalka", pts:200 },
  { rank:94, name:"Fabricia Knaut", pts:200 },
  { rank:94, name:"Fernanda Mousfi", pts:200 },
  { rank:94, name:"Glendha Silva", pts:200 },
  { rank:94, name:"Janina Z Cruz", pts:200 },
  { rank:94, name:"Larissa Murakami", pts:200 },
  { rank:94, name:"Marina Alcazar", pts:200 },
  { rank:94, name:"Monica Bora", pts:200 },
  { rank:94, name:"Nicole Taciane", pts:200 },
  { rank:94, name:"Stephanie Rigon", pts:200 },
  { rank:94, name:"Thalysa Meyer", pts:200 },
  { rank:111, name:"Adriana Wolpe", pts:150 },
  { rank:111, name:"Ana Paula Cunha", pts:150 },
  { rank:111, name:"Iris de Oliveira", pts:150 },
  { rank:111, name:"Juliana Fukushima", pts:150 },
  { rank:111, name:"Kelly Ribeiro", pts:150 },
  { rank:111, name:"Neia Corsini", pts:150 },
  { rank:111, name:"Neti", pts:150 },
  { rank:111, name:"Stella Santana", pts:150 },
  { rank:119, name:"Fernanda Azzoni", pts:100 },
  { rank:119, name:"Fernanda Gusso", pts:100 },
  { rank:119, name:"Karizhiani Sperandio", pts:100 },
  { rank:119, name:"Larissa Grabowski", pts:100 },
  { rank:119, name:"Paula Chavinski", pts:100 },
  { rank:119, name:"Paula Rupp", pts:100 },
  { rank:119, name:"Paula Seegmueller", pts:100 },
  { rank:119, name:"Rose Escudero", pts:100 },
  { rank:119, name:"Sophia Goulart", pts:100 },
  { rank:119, name:"Tamara Heinrichs", pts:100 },
  { rank:119, name:"Tatieli Carvalho", pts:100 },
  { rank:130, name:"Alana Koskodai", pts:50 },
  { rank:130, name:"Alexandra Araujo", pts:50 },
  { rank:130, name:"Aline Baldon", pts:50 },
  { rank:130, name:"Ana Baldon", pts:50 },
  { rank:130, name:"Ana Claudia", pts:50 },
  { rank:130, name:"Andressa Bassetti", pts:50 },
  { rank:130, name:"Angelica Ribeiro", pts:50 },
  { rank:130, name:"Antonella", pts:50 },
  { rank:130, name:"Arlene Borba", pts:50 },
  { rank:130, name:"Bia Molteni", pts:50 },
  { rank:130, name:"Bruna Greggio", pts:50 },
  { rank:130, name:"Camila Neves", pts:50 },
  { rank:130, name:"Carol Klein", pts:50 },
  { rank:130, name:"Cintia Rompkovski", pts:50 },
  { rank:130, name:"Clariana Maranha", pts:50 },
  { rank:130, name:"Cleire Curkarevicz", pts:50 },
  { rank:130, name:"Dana Wolf", pts:50 },
  { rank:130, name:"Daniela Assis", pts:50 },
  { rank:130, name:"Daniela Mengarda", pts:50 },
  { rank:130, name:"Danielle Sus", pts:50 },
  { rank:130, name:"Debora Balaban", pts:50 },
  { rank:130, name:"Eliara Balaban", pts:50 },
  { rank:130, name:"Eneli Brasil", pts:50 },
  { rank:130, name:"Evelize dos Santos", pts:50 },
  { rank:130, name:"Fabiola Moraes", pts:50 },
  { rank:130, name:"Fabiula Genero", pts:50 },
  { rank:130, name:"Fernanda Xavier", pts:50 },
  { rank:130, name:"Franciele Schuarça", pts:50 },
  { rank:130, name:"Gabi Nasser", pts:50 },
  { rank:130, name:"Gabriela Bobato", pts:50 },
  { rank:130, name:"Giovana Peples", pts:50 },
  { rank:130, name:"Gisele Bet", pts:50 },
  { rank:130, name:"Iolanda", pts:50 },
  { rank:130, name:"Isabelle Gorski", pts:50 },
  { rank:130, name:"Isadora Paulo", pts:50 },
  { rank:130, name:"Jo Marcolan", pts:50 },
  { rank:130, name:"Josy Moura", pts:50 },
  { rank:130, name:"Julia Dallastella", pts:50 },
  { rank:130, name:"Juliana Procopio", pts:50 },
  { rank:130, name:"Karol Boriollo", pts:50 },
  { rank:130, name:"Larissa Ferioli", pts:50 },
  { rank:130, name:"Leticia Rezende", pts:50 },
  { rank:130, name:"Liliane Tinoco", pts:50 },
  { rank:130, name:"Luciane Eichenberger", pts:50 },
  { rank:130, name:"M Eduarda Schilickman", pts:50 },
  { rank:130, name:"Maria Carolina Zatar", pts:50 },
  { rank:130, name:"Maria Cecilia Cunha", pts:50 },
  { rank:130, name:"Mayra Favoretto", pts:50 },
  { rank:130, name:"Michele Guerra", pts:50 },
  { rank:130, name:"Milena Miranda", pts:50 },
  { rank:130, name:"Monique Chalupe", pts:50 },
  { rank:130, name:"Nathlyn Palma", pts:50 },
  { rank:130, name:"Nicole S Lima", pts:50 },
  { rank:130, name:"Patricia Bonilha", pts:50 },
  { rank:130, name:"Pri Floriano", pts:50 },
  { rank:130, name:"Priscila Dups", pts:50 },
  { rank:130, name:"Priscila Hernandes", pts:50 },
  { rank:130, name:"Rafaela Bedin", pts:50 },
  { rank:130, name:"Rafaela Sobreiro", pts:50 },
  { rank:130, name:"Regiane Cardoso", pts:50 },
  { rank:130, name:"Regielly Cognialli", pts:50 },
  { rank:130, name:"Renata Vermelho", pts:50 },
  { rank:130, name:"Roberta Guimaraes", pts:50 },
  { rank:130, name:"Rosa Reis", pts:50 },
  { rank:130, name:"Rosiane Oliveira", pts:50 },
  { rank:130, name:"Tati Pangracio", pts:50 },
  { rank:130, name:"Tatiana Moro", pts:50 },
  { rank:130, name:"Vanessa Siva", pts:50 },
  { rank:130, name:"Vivian V Pereira", pts:50 },
];

// ─── RANKING OFICIAL Cat E (PDF — Feminina E 2026 · 10 etapas · 181 atletas) ──
const rankE = [
  { rank:1, name:"Adclis Souza", pts:3100 },
  { rank:2, name:"Genilma Moura", pts:2500 },
  { rank:3, name:"Caroline Cunha", pts:2150 },
  { rank:3, name:"Julia de Barros", pts:2150 },
  { rank:5, name:"Elisa Andrade", pts:1950 },
  { rank:5, name:"Nastassia Yurk", pts:1950 },
  { rank:7, name:"Cassiana Vieira", pts:1750 },
  { rank:8, name:"Liliana Camelier", pts:1650 },
  { rank:9, name:"Natalie Thome", pts:1600 },
  { rank:10, name:"Leticia Rezende", pts:1400 },
  { rank:11, name:"Maxine Vessaro", pts:1350 },
  { rank:12, name:"Isabela Hermont", pts:1250 },
  { rank:12, name:"Talita Fabene", pts:1250 },
  { rank:14, name:"Luciane Melo", pts:1200 },
  { rank:15, name:"Cristiane Favorito", pts:1150 },
  { rank:16, name:"Monique De Lazari", pts:1100 },
  { rank:17, name:"Stella Santana", pts:1050 },
  { rank:18, name:"Andressa Almeida", pts:1000 },
  { rank:19, name:"Beatriz Ogata", pts:950 },
  { rank:20, name:"Ana Paula F. Melo", pts:900 },
  { rank:20, name:"Daniele Pandini", pts:900 },
  { rank:20, name:"Karine Age", pts:900 },
  { rank:20, name:"Karol Boriolo", pts:900 },
  { rank:24, name:"Francielli Scarpetta", pts:850 },
  { rank:24, name:"Laura Moreschi", pts:850 },
  { rank:24, name:"Raquel Lucca", pts:850 },
  { rank:27, name:"Catherine Castro", pts:800 },
  { rank:27, name:"Vanessa Perez Alvarez", pts:800 },
  { rank:29, name:"Rose Esudero", pts:750 },
  { rank:30, name:"Nicole S  Lima", pts:650 },
  { rank:31, name:"Bruna Greggio", pts:600 },
  { rank:31, name:"Eunice Munhoz", pts:600 },
  { rank:31, name:"Mari Dagostin", pts:600 },
  { rank:34, name:"Ana Baldon", pts:550 },
  { rank:34, name:"Arlene Borba", pts:550 },
  { rank:34, name:"Arlene Philippsen", pts:550 },
  { rank:34, name:"Bruna Moribe", pts:550 },
  { rank:34, name:"Camila Casagrande", pts:550 },
  { rank:34, name:"Camila Dellatorre", pts:550 },
  { rank:34, name:"Cristiane Lirmann", pts:550 },
  { rank:34, name:"Eliane Fabrini", pts:550 },
  { rank:34, name:"Helene Fortes", pts:550 },
  { rank:34, name:"Janete Dresh", pts:550 },
  { rank:34, name:"Laura Carraro", pts:550 },
  { rank:34, name:"Michely Matzenbacher", pts:550 },
  { rank:34, name:"Monique Chalupe", pts:550 },
  { rank:34, name:"Paula Silka", pts:550 },
  { rank:34, name:"Tatiele Carvalho", pts:550 },
  { rank:49, name:"Neia Corsini", pts:500 },
  { rank:50, name:"Amanda Macuco", pts:400 },
  { rank:50, name:"Francielli Kroetz", pts:400 },
  { rank:50, name:"Maria Fernanda Geara", pts:400 },
  { rank:50, name:"Nathy Palma", pts:400 },
  { rank:50, name:"Patricia Bonilha", pts:400 },
  { rank:50, name:"Rafaela Tiepo", pts:400 },
  { rank:50, name:"Renata Sartori", pts:400 },
  { rank:57, name:"Anna Paula Tonedo", pts:350 },
  { rank:57, name:"Arizla", pts:350 },
  { rank:57, name:"Brenda Leal", pts:350 },
  { rank:57, name:"Elaine Oleczewski", pts:350 },
  { rank:57, name:"Eliziane Lara", pts:350 },
  { rank:57, name:"Gabriela Guerreiro", pts:350 },
  { rank:57, name:"Karla Ruggieri", pts:350 },
  { rank:57, name:"Leticia Re", pts:350 },
  { rank:57, name:"Paula Fukishima", pts:350 },
  { rank:57, name:"Priscila", pts:350 },
  { rank:57, name:"Rafaela Bedin", pts:350 },
  { rank:57, name:"Silvia Schneider", pts:350 },
  { rank:57, name:"Soraya Palanicki", pts:350 },
  { rank:57, name:"Taiz Paiva", pts:350 },
  { rank:57, name:"Tatiane Ballio", pts:350 },
  { rank:72, name:"Adriana Azinari", pts:300 },
  { rank:72, name:"Dolores Folador", pts:300 },
  { rank:72, name:"Janaina Torres", pts:300 },
  { rank:75, name:"Ana Paula M Macedo", pts:250 },
  { rank:75, name:"Aniele", pts:250 },
  { rank:75, name:"Jaqueline Santana", pts:250 },
  { rank:75, name:"Tatiana Salvinski", pts:250 },
  { rank:79, name:"Cinta Claudino", pts:200 },
  { rank:79, name:"Daniele Teixeira", pts:200 },
  { rank:79, name:"Ediene Lara", pts:200 },
  { rank:79, name:"Gabriela Cunha", pts:200 },
  { rank:79, name:"Isabelle Gorski", pts:200 },
  { rank:79, name:"Julia Licnevski", pts:200 },
  { rank:79, name:"Lara Tonet", pts:200 },
  { rank:79, name:"Nicole Ewert", pts:200 },
  { rank:79, name:"Romila Schmider", pts:200 },
  { rank:88, name:"Adryelle Cantarella", pts:150 },
  { rank:88, name:"Carla Lemberg", pts:150 },
  { rank:88, name:"Eneli Brasil", pts:150 },
  { rank:88, name:"Helen Habinoski", pts:150 },
  { rank:92, name:"Adri Vidal", pts:100 },
  { rank:92, name:"Adriana Gonçalves", pts:100 },
  { rank:92, name:"Ana Paola Vargas", pts:100 },
  { rank:92, name:"Andressa Nuss", pts:100 },
  { rank:92, name:"Carol Arzua", pts:100 },
  { rank:92, name:"Gabriela Diniz", pts:100 },
  { rank:92, name:"Gabriela Matte", pts:100 },
  { rank:92, name:"Geisa Pedroso", pts:100 },
  { rank:92, name:"Geslaine Rovaris", pts:100 },
  { rank:92, name:"Gisele Luz", pts:100 },
  { rank:92, name:"Harumi Watanabe", pts:100 },
  { rank:92, name:"Jessica Maciel", pts:100 },
  { rank:92, name:"Juliana Torres", pts:100 },
  { rank:92, name:"Julyane Brito", pts:100 },
  { rank:92, name:"Leticia Castelinho", pts:100 },
  { rank:92, name:"Luna", pts:100 },
  { rank:92, name:"Manoela Sala", pts:100 },
  { rank:92, name:"Vera Regina Santos", pts:100 },
  { rank:110, name:"Ale Santi", pts:50 },
  { rank:110, name:"Alice Alkmin", pts:50 },
  { rank:110, name:"Alicia Cruz", pts:50 },
  { rank:110, name:"Aline Baldon", pts:50 },
  { rank:110, name:"Aline Marques Leutner", pts:50 },
  { rank:110, name:"Ana  Paula Linhares", pts:50 },
  { rank:110, name:"Ana Claudia Dias", pts:50 },
  { rank:110, name:"Ana Garcia", pts:50 },
  { rank:110, name:"Ana Paula Posato", pts:50 },
  { rank:110, name:"Andrea Pedroso", pts:50 },
  { rank:110, name:"Andressa Santos", pts:50 },
  { rank:110, name:"Angela Kunz", pts:50 },
  { rank:110, name:"Angelica Hasson", pts:50 },
  { rank:110, name:"Antonella R da Silva", pts:50 },
  { rank:110, name:"Beatriz Martins", pts:50 },
  { rank:110, name:"Beatriz Pavelec", pts:50 },
  { rank:110, name:"Bianca Caselato", pts:50 },
  { rank:110, name:"Bianca Traiano", pts:50 },
  { rank:110, name:"Brenda Faria de França", pts:50 },
  { rank:110, name:"Bruna Olandoski", pts:50 },
  { rank:110, name:"Camila Tomazoni", pts:50 },
  { rank:110, name:"Camila Torres", pts:50 },
  { rank:110, name:"Camile Motta", pts:50 },
  { rank:110, name:"Carla Bortoleto", pts:50 },
  { rank:110, name:"Carla Chevonica", pts:50 },
  { rank:110, name:"Cassiana Redwitz", pts:50 },
  { rank:110, name:"Celia Frederici", pts:50 },
  { rank:110, name:"Crislayne Plytiuk", pts:50 },
  { rank:110, name:"Cristiane Pavelec", pts:50 },
  { rank:110, name:"Dani Cwikla", pts:50 },
  { rank:110, name:"Eduarda Gorski", pts:50 },
  { rank:110, name:"Erikia Desan", pts:50 },
  { rank:110, name:"Evandra Schickmann", pts:50 },
  { rank:110, name:"Gabriela Sivek", pts:50 },
  { rank:110, name:"Giovanna Antochevis", pts:50 },
  { rank:110, name:"Helena Leal", pts:50 },
  { rank:110, name:"Ingrid Milano", pts:50 },
  { rank:110, name:"Josiane Carvalho", pts:50 },
  { rank:110, name:"Juliana Mezzaroba", pts:50 },
  { rank:110, name:"Karine Moura", pts:50 },
  { rank:110, name:"Karine Stresser", pts:50 },
  { rank:110, name:"Karizhiani", pts:50 },
  { rank:110, name:"Keytty Schinemann", pts:50 },
  { rank:110, name:"Lara Porto", pts:50 },
  { rank:110, name:"Laressa Santos", pts:50 },
  { rank:110, name:"Larissa Bento Villanti", pts:50 },
  { rank:110, name:"Leticia( Castelinho)Soares", pts:50 },
  { rank:110, name:"Luma Dias", pts:50 },
  { rank:110, name:"Marcia Afonso Degani", pts:50 },
  { rank:110, name:"Marcia Pizzolatti", pts:50 },
  { rank:110, name:"Mariane C. Vaz", pts:50 },
  { rank:110, name:"Mariele Zanco", pts:50 },
  { rank:110, name:"Marina Alcazar", pts:50 },
  { rank:110, name:"Marley", pts:50 },
  { rank:110, name:"Marta Ferreira", pts:50 },
  { rank:110, name:"Nathalia S Araujo", pts:50 },
  { rank:110, name:"Perla Soteras", pts:50 },
  { rank:110, name:"Priscila Gouveia", pts:50 },
  { rank:110, name:"Rafaela Angelo", pts:50 },
  { rank:110, name:"Regina Kuradomi", pts:50 },
  { rank:110, name:"Renata Spitzner", pts:50 },
  { rank:110, name:"Rosana Lukaszewski", pts:50 },
  { rank:110, name:"Silvia Tavares", pts:50 },
  { rank:110, name:"Sonia Bombardeli", pts:50 },
  { rank:110, name:"Taisa Rossi", pts:50 },
  { rank:110, name:"Taiz Carrion", pts:50 },
  { rank:110, name:"Talita Wicthoff", pts:50 },
  { rank:110, name:"Thais Tinoco", pts:50 },
  { rank:110, name:"Valentina", pts:50 },
  { rank:110, name:"Vanessa D.S.da Silva", pts:50 },
  { rank:110, name:"Vanessa Neuman", pts:50 },
  { rank:110, name:"Vanessa Otovicz", pts:50 },
];

// ─── RANKING OFICIAL Sub 15 (PDF — Sub 15 Feminino 2026 · 10 etapas · 14 atletas) ──
const rankSub15 = [
  { rank:1, name:"Luisa Socher", pts:900 },
  { rank:2, name:"Clara Chamecki", pts:550 },
  { rank:2, name:"Milena Hortz Eckel", pts:550 },
  { rank:4, name:"Alice Bruel", pts:350 },
  { rank:4, name:"Sofia Moreira", pts:350 },
  { rank:6, name:"Valentina Calgaro", pts:300 },
  { rank:7, name:"Laura Moreschi", pts:250 },
  { rank:8, name:"Giovanna Beckert", pts:200 },
  { rank:9, name:"Isadora Freitas", pts:150 },
  { rank:9, name:"Marina Perez", pts:150 },
  { rank:11, name:"Isabela Coelho", pts:100 },
  { rank:11, name:"Isabela Mattos", pts:100 },
  { rank:11, name:"Maria Julia M.da Cunha", pts:100 },
  { rank:14, name:"Manuela Cobra Costa", pts:50 },
];
const rankings = { C: rankC, D: rankD, E: rankE, Sub15: rankSub15 };

// ─── LINKS DOS PDFs ──────────────────────────────────────────────
const pdfLinks = {
  C: "https://drive.google.com/file/d/1flkT1U9CAKUfi34imS7miFH1ytXTOoP7/view?usp=drive_link",
  D: "https://drive.google.com/file/d/1e9Nn-3gy18W26IdTQT-79Ujsn9oGpEsG/view?usp=drive_link",
  E: "https://drive.google.com/file/d/1UexC5-U_VFep1SSiShJ-H0QIithj6gEZ/view?usp=drive_link",
  Sub15: "https://drive.google.com/file/d/1TqQsM5gZlkQ4PXP_KBXOOHvC5beUCRRf/view?usp=drive_link",
};

// ─── TORNEIOS ─────────────────────────────────────────────────────
const torneios = [
  {
    id:1, nome:"Queen's Cup — Etapa Verão",
    data:"2026-06-21", dataFim:"2026-06-22",
    local:"Arena 3, Curitiba",
    cats:["C","D","E"], status:"inscricoes",
    premio:"R$ 4.000", vagas:48, vagasRestantes:18,
  },
  {
    id:2, nome:"Queen's Cup — Etapa Inverno",
    data:"2026-07-26", dataFim:"2026-07-27",
    local:"Pahragon Club, Londrina",
    cats:["C","D","E"], status:"breve",
    premio:"R$ 4.500", vagas:48, vagasRestantes:48,
  },
  {
    id:3, nome:"Queen's Cup — Grand Final",
    data:"2026-11-08", dataFim:"2026-11-09",
    local:"CBS Arena, Curitiba",
    cats:["C","D","E"], status:"breve",
    premio:"R$ 10.000", vagas:64, vagasRestantes:64,
  },
];

const etapas = [
  { num:1,  data:"21/jan",    local:"ARENA 3",   done:true  },
  { num:2,  data:"11/fev",    local:"PAHRAGON",  done:true  },
  { num:3,  data:"12/mar",    local:"WIN ECO",   done:true  },
  { num:4,  data:"26/mar",    local:"ARENA 3",   done:true  },
  { num:5,  data:"25/abr",    local:"INOVE",     done:true  },
  { num:6,  data:"14/mai",    local:"ARENA 3",   done:true  },
  { num:7,  data:"29/mai",    local:"CBS",       done:true  },
  { num:8,  data:"25/jun",    local:"ARENA 3",   done:true  },
  { num:9,  data:"09/jul",    local:"PAHRAGON",  done:true  },
  { num:10, data:"23/jul",    local:"INOVE",     done:true  },
  { num:11, data:"27/ago",    local:"",          done:false },
  { num:12, data:"A definir", local:"",          done:false },
  { num:13, data:"A definir", local:"",          done:false },
  { num:14, data:"A definir", local:"",          done:false },
  { num:15, data:"A definir", local:"",          done:false },
];

const fmtDate = d => new Date(d+"T12:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"short"});
const medalClr = ["#D4A017","#C0C0C0","#CD7F32"];

// ─── COMPONENTES ─────────────────────────────────────────────────
function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id:"ranking", icon:"👑", label:"RANKING" },
    { id:"etapas",  icon:"📅", label:"ETAPAS"  },
  ];
  return (
    <nav style={{ background: Q.dark, borderBottom:`3px solid ${Q.lime}`, position:"sticky", top:0, zIndex:100 }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 18px 10px" }}>
        <QueensLogo size={44} />
        <div>
          <div style={{
            fontFamily:"'Bebas Neue',sans-serif", fontSize:28,
            letterSpacing:3, lineHeight:1,
            background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>QUEEN'S CUP</div>
          <div style={{ color:"rgba(255,255,255,.45)", fontSize:9, letterSpacing:2 }}>BEACH TÊNIS · EXCLUSIVO FEMININO · 2026</div>
        </div>
      </div>
      <div style={{ display:"flex", borderTop:"1px solid rgba(255,255,255,.08)" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{
            flex:1, padding:"10px 4px", border:"none", cursor:"pointer",
            background:activeTab===t.id?`rgba(255,46,173,.12)`:"transparent",
            borderBottom:activeTab===t.id?`3px solid ${Q.pink}`:"3px solid transparent",
            color:activeTab===t.id?Q.pink:"rgba(255,255,255,.4)",
            fontSize:10, fontWeight:700, letterSpacing:.5,
            display:"flex", flexDirection:"column", alignItems:"center", gap:2, transition:"all .2s",
          }}>
            <span style={{fontSize:15}}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Podium({ players }) {
  if (players.length < 3) return null;
  const order   = [players[1], players[0], players[2]];
  const heights = [110, 140, 90];
  const emojis  = ["🥈","🥇","🥉"];
  const colors  = [medalClr[1], medalClr[0], medalClr[2]];
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:8, marginBottom:20 }}>
      {order.map((p,i)=>(
        <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div style={{ fontSize:11, fontWeight:700, color:Q.dark, textAlign:"center", marginBottom:2 }}>
            {p.name.split(" ")[0]}
          </div>
          <div style={{ fontSize:12, fontWeight:900, color:colors[i] }}>{p.pts}pts</div>
          <div style={{
            width:"100%", height:heights[i], borderRadius:"10px 10px 0 0", marginTop:6,
            background: i===1
              ? `linear-gradient(180deg,${Q.lime},${Q.limeD})`
              : `linear-gradient(180deg,rgba(255,46,173,.3),rgba(255,46,173,.1))`,
            display:"flex", alignItems:"center", justifyContent:"center", fontSize:30,
          }}>{emojis[i]}</div>
        </div>
      ))}
    </div>
  );
}

function RankItem({ p, i }) {
  const isFinalist = p.rank <= 16;
  const isMedal    = i < 3;
  return (
    <div style={{
      background: isFinalist ? (isMedal ? Q.bgCard : `linear-gradient(135deg,${Q.pink}08,${Q.lime}08)`) : Q.bgCard,
      borderRadius:12, padding:"12px 14px",
      display:"flex", alignItems:"center", gap:12,
      boxShadow: isMedal?"0 3px 10px rgba(255,46,173,.12)":isFinalist?"0 2px 8px rgba(200,230,0,.15)":"0 1px 4px rgba(0,0,0,.05)",
      borderLeft:`4px solid ${i===0?Q.lime:i===1?medalClr[1]:i===2?medalClr[2]:isFinalist?Q.lime+"99":Q.border}`,
      marginBottom:7,
    }}>
      <div style={{
        width:30, height:30, borderRadius:"50%", flexShrink:0,
        background: isMedal
          ? `linear-gradient(135deg,${[Q.lime,medalClr[1],medalClr[2]][i]},${Q.pinkD})`
          : isFinalist
            ? `linear-gradient(135deg,${Q.lime}44,${Q.limeD}44)`
            : Q.grayL,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontWeight:900, fontSize:13,
        color: isMedal?Q.white:isFinalist?Q.limeD:Q.gray,
        border: isFinalist && !isMedal ? `1.5px solid ${Q.lime}88` : "none",
      }}>{p.rank}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontWeight:700, fontSize:14, color:Q.dark }}>{p.name}</div>
        {isFinalist && <div style={{ fontSize:9, color:Q.limeD, fontWeight:700, letterSpacing:.5, marginTop:1 }}>👑 CLASSIFICADA PARA O FINALS</div>}
      </div>
      <div style={{ textAlign:"right" }}>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:1,
          color: i===0?Q.lime:isFinalist?Q.pink:Q.pink,
        }}>{p.pts}</div>
        <div style={{ fontSize:9, color:Q.gray, letterSpacing:.5 }}>PONTOS</div>
      </div>
    </div>
  );
}

// ─── ABAS ─────────────────────────────────────────────────────────
function RankingTab() {
  const [cat,setCat] = useState("C");
  const data = rankings[cat] || [];
  const counts = { C: rankC.length, D: rankD.length, E: rankE.length, Sub15: rankSub15.length };
  const catLabels = { C: "CAT C", D: "CAT D", E: "CAT E", Sub15: "SUB 15" };

  return (
    <div style={{ padding:"20px 16px" }}>
      <div style={{ marginBottom:16 }}>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:3,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        }}>RANKING OFICIAL</div>
        <div style={{ color:Q.gray, fontSize:12 }}>Temporada 2026 · Feminino</div>
      </div>

      <div style={{ display:"flex", gap:6, marginBottom:18 }}>
        {["C","D","E","Sub15"].map(c=>(
          <button key={c} onClick={()=>setCat(c)} style={{
            flex:1, padding:"11px 0", border:"none", cursor:"pointer", borderRadius:12,
            background: cat===c
              ? `linear-gradient(135deg,${Q.pink},${Q.pinkD})`
              : Q.grayL,
            color: cat===c ? Q.white : Q.gray,
            fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2,
            boxShadow: cat===c?`0 4px 14px ${Q.pink}55`:"none",
            transition:"all .2s",
          }}>{catLabels[c]}</button>
        ))}
      </div>

      <div style={{
        background:`linear-gradient(135deg,${Q.pink}15,${Q.lime}15)`,
        border:`1px solid ${Q.pink}44`, borderRadius:12,
        padding:"10px 14px", marginBottom:16,
      }}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
          <span style={{fontSize:16}}>📄</span>
          <div style={{ fontSize:11, color:Q.dark }}>
            <strong style={{color:Q.pinkD}}>Dados oficiais</strong> — {counts[cat]} atletas · 10 etapas realizadas · 2026
          </div>
        </div>
        <a
          href={pdfLinks[cat]}
          target="_blank"
          rel="noreferrer"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:6,
            background:Q.pink, color:Q.white, borderRadius:8, padding:"8px 0",
            fontSize:11, fontWeight:700, letterSpacing:.5, textDecoration:"none",
          }}
        >{`📥 BAIXAR RANKING COMPLETO — ${catLabels[cat]}`}</a>
      </div>

      <Podium players={data.slice(0,3)} />

      {/* Badge Finals */}
      <div style={{
        display:"flex", alignItems:"center", gap:8,
        background:`linear-gradient(135deg,${Q.lime}22,${Q.limeD}11)`,
        border:`1.5px solid ${Q.lime}88`, borderRadius:10,
        padding:"8px 12px", marginBottom:12,
      }}>
        <span style={{fontSize:16}}>👑</span>
        <div style={{ fontSize:11, color:Q.dark }}>
          <span style={{color:Q.limeD}}>👑 As 16 primeiras do ranking atual disputarão o Finals 2026</span>
        </div>
      </div>

      <div>
        {data.map((p,i)=><RankItem key={i} p={p} i={i} />)}
      </div>
    </div>
  );
}

function EtapasTab() {
  return (
    <div style={{ padding:"20px 16px" }}>
      <div style={{ marginBottom:16 }}>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:3,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        }}>ETAPAS 2026</div>
        <div style={{ color:Q.gray, fontSize:12 }}>Calendário completo · {etapas.filter(e=>e.done).length} de {etapas.length} realizadas</div>
      </div>

      <div style={{ background:Q.grayL, borderRadius:8, height:8, overflow:"hidden", marginBottom:20 }}>
        <div style={{
          width:`${(etapas.filter(e=>e.done).length/etapas.length)*100}%`,
          height:"100%", borderRadius:8,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          transition:"width .6s",
        }} />
      </div>

      <div style={{ marginBottom:24 }}>
        {etapas.map((e,i)=>(
          <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:32 }}>
              <div style={{
                width:28, height:28, borderRadius:"50%", flexShrink:0,
                background: e.done
                  ? `linear-gradient(135deg,${Q.lime},${Q.limeD})`
                  : Q.grayL,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:11, fontWeight:700, color:e.done?Q.dark:Q.gray,
              }}>{e.num}</div>
              {i<etapas.length-1 && (
                <div style={{ width:2, height:18, background:e.done?Q.lime:Q.border, margin:"3px 0" }} />
              )}
            </div>
            <div style={{
              flex:1, background:Q.bgCard,
              borderRadius:12, padding:"10px 14px", marginBottom:6,
              border:`1px solid ${e.done?Q.lime+"55":Q.border}`,
            }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color:Q.dark }}>Etapa {e.num} — {e.local}</div>
                  <div style={{ fontSize:11, color:Q.gray }}>{e.data}</div>
                </div>
                <span style={{
                  background: e.done?`${Q.lime}22`:`${Q.pink}15`,
                  color: e.done?Q.limeD:Q.pink,
                  borderRadius:20, padding:"3px 10px", fontSize:10, fontWeight:700,
                }}>{e.done?"✓ Realizada":"Em breve"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ROOT ──────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("ranking");
  return (
    <div style={{ maxWidth:430, margin:"0 auto", minHeight:"100vh", background:Q.bg, fontFamily:"'DM Sans',sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600;700;900&display=swap" rel="stylesheet"/>
      <Header activeTab={tab} setActiveTab={setTab}/>
      {tab==="ranking" && <RankingTab/>}
      {tab==="etapas"  && <EtapasTab/>}
      <div style={{height:30}}/>
    </div>
  );
}
