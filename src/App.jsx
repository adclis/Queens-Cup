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

// ─── RANKING OFICIAL Cat C (PDF — Feminina C 2026 · 14 etapas · 145 atletas) ──
const rankC = [
  { rank:1, name:"Vivi Coelho", pts:4000 },
  { rank:2, name:"Raiane Dias", pts:2800 },
  { rank:3, name:"Julia Mendes", pts:2600 },
  { rank:4, name:"Ana Lucia Alge", pts:2450 },
  { rank:5, name:"Luciana Boeira", pts:2350 },
  { rank:5, name:"Maria Ancila", pts:2350 },
  { rank:7, name:"Paula Feliz", pts:2300 },
  { rank:8, name:"Carlisa Gomes", pts:2200 },
  { rank:9, name:"Fabiola Miyagima", pts:1750 },
  { rank:10, name:"Gisele S Benato", pts:1700 },
  { rank:11, name:"Raissa Dias", pts:1600 },
  { rank:11, name:"Brenda Marques", pts:1600 },
  { rank:13, name:"Carla Coelho", pts:1500 },
  { rank:14, name:"Maiara Leal Spiaci", pts:1150 },
  { rank:14, name:"Fernanda Santos", pts:1150 },
  { rank:16, name:"Ana Paula Dallastella", pts:1100 },
  { rank:17, name:"Glaucia Leite", pts:950 },
  { rank:18, name:"Fernanda Moreschi", pts:900 },
  { rank:18, name:"Ana Anjos", pts:900 },
  { rank:20, name:"Ana Mancini", pts:850 },
  { rank:21, name:"Monica Bora", pts:800 },
  { rank:22, name:"Caroline Pasinato", pts:650 },
  { rank:22, name:"Mariane Salvalaggio", pts:650 },
  { rank:22, name:"Erika Hattori", pts:650 },
  { rank:25, name:"Cris Casagrande", pts:600 },
  { rank:25, name:"Erika Moreira", pts:600 },
  { rank:25, name:"Fernanda Escobar", pts:600 },
  { rank:25, name:"Cassiana Tonet", pts:600 },
  { rank:25, name:"Vanessa Stadler", pts:600 },
  { rank:30, name:"Dayane Ramos", pts:550 },
  { rank:30, name:"Elis Benetti", pts:550 },
  { rank:30, name:"Maisa Kataiama", pts:550 },
  { rank:30, name:"Mariana Nogueira", pts:550 },
  { rank:30, name:"Milena Mayer", pts:550 },
  { rank:30, name:"Renata Suchek", pts:550 },
  { rank:30, name:"Tati de Oliveira", pts:550 },
  { rank:30, name:"Valquiria Martins", pts:550 },
  { rank:30, name:"Vanessa Thomaz", pts:550 },
  { rank:39, name:"Fabiana Nunes", pts:500 },
  { rank:39, name:"Mauren Colombo", pts:500 },
  { rank:41, name:"Maira Daros", pts:450 },
  { rank:41, name:"Marcelina", pts:450 },
  { rank:41, name:"Silvia Schneider", pts:450 },
  { rank:44, name:"Isabela Rodrigues", pts:400 },
  { rank:44, name:"Paula Ferreira", pts:400 },
  { rank:44, name:"Martina Hffrichter", pts:400 },
  { rank:47, name:"Aline Gaensly", pts:350 },
  { rank:47, name:"Ana Carla M Rodrigues", pts:350 },
  { rank:47, name:"Cinta Liz", pts:350 },
  { rank:47, name:"Eliane Vieira", pts:350 },
  { rank:47, name:"Lorena Cortiani", pts:350 },
  { rank:47, name:"Roberta Marder", pts:350 },
  { rank:47, name:"Lara Macedo", pts:350 },
  { rank:54, name:"Ana Murbach", pts:300 },
  { rank:54, name:"Karla Cunha", pts:300 },
  { rank:54, name:"Katiuza Brasil", pts:300 },
  { rank:57, name:"Adriana Zaithammer", pts:250 },
  { rank:57, name:"Elaine Maiorki", pts:250 },
  { rank:57, name:"Fabiany Lamboia", pts:250 },
  { rank:57, name:"Katia Gomes", pts:250 },
  { rank:57, name:"Sandra Evelizi", pts:250 },
  { rank:62, name:"Camile Trezub", pts:200 },
  { rank:62, name:"Danielle Sale", pts:200 },
  { rank:62, name:"Dina Santana", pts:200 },
  { rank:62, name:"Flavia Hass", pts:200 },
  { rank:62, name:"Maria Luisa Lincher (Malu)", pts:200 },
  { rank:62, name:"Monique Lazzari", pts:200 },
  { rank:62, name:"Nilshely", pts:200 },
  { rank:69, name:"Dani Borba", pts:150 },
  { rank:69, name:"Geovana Machado", pts:150 },
  { rank:69, name:"Kelen Ribeiro", pts:150 },
  { rank:69, name:"Vanessa Schultz", pts:150 },
  { rank:73, name:"Alicia Moss", pts:100 },
  { rank:73, name:"Aline Henz", pts:100 },
  { rank:73, name:"Amanda Nogueira", pts:100 },
  { rank:73, name:"Ana V Rigolino", pts:100 },
  { rank:73, name:"Barbara Luvison", pts:100 },
  { rank:73, name:"Bianca Behrens", pts:100 },
  { rank:73, name:"Danielle Konrad", pts:100 },
  { rank:73, name:"Danile Lima", pts:100 },
  { rank:73, name:"Fabiana Mendes", pts:100 },
  { rank:73, name:"Fabiana Zapzalka", pts:100 },
  { rank:73, name:"Fernanda Gusso", pts:100 },
  { rank:73, name:"Gabriela Sivek", pts:100 },
  { rank:73, name:"Joelly Michelle", pts:100 },
  { rank:73, name:"Karine Duarte", pts:100 },
  { rank:73, name:"Kelly Ribeiro", pts:100 },
  { rank:73, name:"Leticia Girata", pts:100 },
  { rank:73, name:"Maria Emilia Staczuk", pts:100 },
  { rank:73, name:"Mylla Murta", pts:100 },
  { rank:73, name:"Rebecca", pts:100 },
  { rank:73, name:"Rosangela Pretko", pts:100 },
  { rank:73, name:"Sara Vdal", pts:100 },
  { rank:73, name:"Thais Wabesky", pts:100 },
  { rank:95, name:"Aghata Wuicik", pts:50 },
  { rank:95, name:"Ale Nunes", pts:50 },
  { rank:95, name:"Alice Losso", pts:50 },
  { rank:95, name:"Ana Cristina Pretto", pts:50 },
  { rank:95, name:"Ana Paula Constantino", pts:50 },
  { rank:95, name:"Andreia Latreille", pts:50 },
  { rank:95, name:"Arizla Fernandes", pts:50 },
  { rank:95, name:"Bianca Belotti", pts:50 },
  { rank:95, name:"Bruna Naday", pts:50 },
  { rank:95, name:"Camila Almeida", pts:50 },
  { rank:95, name:"Daisy Pereira", pts:50 },
  { rank:95, name:"Debora Balaban", pts:50 },
  { rank:95, name:"Deny Segantini", pts:50 },
  { rank:95, name:"Erika Cassotti", pts:50 },
  { rank:95, name:"Fabiana Kropernicki", pts:50 },
  { rank:95, name:"Felicita Sade", pts:50 },
  { rank:95, name:"Fernanda Mariano", pts:50 },
  { rank:95, name:"Fernanda Risnei", pts:50 },
  { rank:95, name:"Flavia Santos", pts:50 },
  { rank:95, name:"Gilmara Coronado", pts:50 },
  { rank:95, name:"Giselle Duarte", pts:50 },
  { rank:95, name:"Juliana Fukushima", pts:50 },
  { rank:95, name:"Kamile Enzo", pts:50 },
  { rank:95, name:"Karina Menegusso", pts:50 },
  { rank:95, name:"Leidi Brancher", pts:50 },
  { rank:95, name:"Leila Caetano", pts:50 },
  { rank:95, name:"Leticia Kawata", pts:50 },
  { rank:95, name:"Lucianna Wieler", pts:50 },
  { rank:95, name:"Marcia Nonnenmacher", pts:50 },
  { rank:95, name:"Maria Claudia Rebelato", pts:50 },
  { rank:95, name:"Mariana Kroernicki", pts:50 },
  { rank:95, name:"Marina Nero", pts:50 },
  { rank:95, name:"Mayra Favoretto", pts:50 },
  { rank:95, name:"Pathy Valerio", pts:50 },
  { rank:95, name:"Patrica Farracha", pts:50 },
  { rank:95, name:"Patricia Calgaro", pts:50 },
  { rank:95, name:"Paula Requiao", pts:50 },
  { rank:95, name:"Pri  Melo", pts:50 },
  { rank:95, name:"Pri Santiago", pts:50 },
  { rank:95, name:"Rafaella Krelling", pts:50 },
  { rank:95, name:"Renata Emy Kuradomi", pts:50 },
  { rank:95, name:"Roberta R. Dias", pts:50 },
  { rank:95, name:"Samantha Cim", pts:50 },
  { rank:95, name:"Tatiane Balbinotti", pts:50 },
  { rank:95, name:"Tatiane Belotti", pts:50 },
  { rank:95, name:"Thais Cassoti", pts:50 },
  { rank:95, name:"Valery Riechi", pts:50 },
  { rank:95, name:"Vanessa Leandro", pts:50 },
  { rank:95, name:"Katyulce Ribas", pts:50 },
  { rank:95, name:"Tatiane Tosato", pts:50 },
  { rank:95, name:"Betania Donatao", pts:50 },
];

// ─── RANKING OFICIAL Cat D (PDF — Feminina D 2026 · 14 etapas · 232 atletas) ──
const rankD = [
  { rank:1, name:"Camila Almeida", pts:5600 },
  { rank:2, name:"Dayane Ramos", pts:5500 },
  { rank:3, name:"Eliane Fabrini", pts:4650 },
  { rank:4, name:"Cristiane Lirmann", pts:4550 },
  { rank:5, name:"Julliane Azevedo", pts:3450 },
  { rank:6, name:"Mauren Colombo", pts:3100 },
  { rank:7, name:"Ale Nunes", pts:2950 },
  { rank:8, name:"Gabriela Bossardi", pts:2850 },
  { rank:9, name:"Patty Calgaro", pts:2600 },
  { rank:9, name:"Rafaela Almeida", pts:2600 },
  { rank:11, name:"Aline Henz", pts:2500 },
  { rank:12, name:"Aimee Garcias", pts:2350 },
  { rank:12, name:"Cintia Claudino", pts:2350 },
  { rank:12, name:"Fernanda Moreira", pts:2350 },
  { rank:12, name:"Soraya Palanicki", pts:2350 },
  { rank:16, name:"Tatiana Stadler", pts:2300 },
  { rank:17, name:"Danielle Konrad", pts:2000 },
  { rank:17, name:"Adri Vidal", pts:2000 },
  { rank:19, name:"Julia Torres", pts:1850 },
  { rank:19, name:"Vanessa Thomaz", pts:1850 },
  { rank:21, name:"Daniele Pandini", pts:1800 },
  { rank:22, name:"Cleide Bruel", pts:1650 },
  { rank:23, name:"Patricia Cruz", pts:1550 },
  { rank:24, name:"Malu Lincher", pts:1450 },
  { rank:25, name:"Adclis Souza", pts:1350 },
  { rank:25, name:"Julia Barros", pts:1350 },
  { rank:27, name:"Elisiane Berno", pts:1250 },
  { rank:28, name:"Daisy Pereira", pts:1200 },
  { rank:28, name:"Francieli Procopio", pts:1200 },
  { rank:28, name:"Karine Age", pts:1200 },
  { rank:31, name:"Isadora Cirico", pts:1100 },
  { rank:32, name:"Monique de Lazzari", pts:1050 },
  { rank:33, name:"Arizla Fernandes", pts:1000 },
  { rank:33, name:"Jessica Pavin", pts:1000 },
  { rank:33, name:"Fatima Santos", pts:1000 },
  { rank:36, name:"Katyulce Ribas", pts:900 },
  { rank:37, name:"Raquel Lucca", pts:850 },
  { rank:38, name:"Gabriela Sivek", pts:800 },
  { rank:39, name:"Luciana V Souto", pts:750 },
  { rank:39, name:"Samara Mazetto", pts:750 },
  { rank:39, name:"Thais Wabesky", pts:750 },
  { rank:42, name:"Jacqueline Saldanha", pts:700 },
  { rank:42, name:"Rosmary Krasinski", pts:700 },
  { rank:42, name:"Silvia Schneider", pts:700 },
  { rank:45, name:"Juliana Coelho", pts:650 },
  { rank:46, name:"Alexandra Forillo", pts:600 },
  { rank:46, name:"Dani Moro", pts:600 },
  { rank:46, name:"Liana", pts:600 },
  { rank:46, name:"Perla Soteras", pts:600 },
  { rank:46, name:"Sarah Leal", pts:600 },
  { rank:46, name:"Monique Chalupe", pts:600 },
  { rank:52, name:"Andrea Slonski", pts:550 },
  { rank:52, name:"Andresa R da Silva", pts:550 },
  { rank:52, name:"Camila Teodosio", pts:550 },
  { rank:52, name:"Carolina Mocelin", pts:550 },
  { rank:52, name:"Caroline Ruppel", pts:550 },
  { rank:52, name:"Daniela Zarichta", pts:550 },
  { rank:52, name:"Elaine Oleczewski", pts:550 },
  { rank:52, name:"Elisa Andrade", pts:550 },
  { rank:52, name:"Flavia Ibrahim", pts:550 },
  { rank:52, name:"Gabriela Aguiar", pts:550 },
  { rank:52, name:"Isabela Rodrigues", pts:550 },
  { rank:52, name:"Mariana Zoller", pts:550 },
  { rank:52, name:"Mayra Rebello", pts:550 },
  { rank:52, name:"Mylla Murta", pts:550 },
  { rank:52, name:"Sara Vidal", pts:550 },
  { rank:52, name:"Paula Silka", pts:550 },
  { rank:52, name:"Leidi Brancher", pts:550 },
  { rank:69, name:"Alessandra Gabardo", pts:500 },
  { rank:69, name:"Laressa Bassetti", pts:500 },
  { rank:71, name:"Erika Moreira", pts:450 },
  { rank:71, name:"Maria Cristina Lima", pts:450 },
  { rank:71, name:"Maria Fernanda Geara", pts:450 },
  { rank:74, name:"Glendha Silva", pts:400 },
  { rank:74, name:"Lara Nogueira", pts:400 },
  { rank:74, name:"Larissa Murakami", pts:400 },
  { rank:74, name:"Martina Mayer", pts:400 },
  { rank:74, name:"Paula Werle", pts:400 },
  { rank:74, name:"Arlene Philipsen", pts:400 },
  { rank:80, name:"Amanda Capellani", pts:350 },
  { rank:80, name:"Andressa Roberto", pts:350 },
  { rank:80, name:"Apoenna Castro", pts:350 },
  { rank:80, name:"Bianca Maiorki", pts:350 },
  { rank:80, name:"Bruna Moribe", pts:350 },
  { rank:80, name:"Carol Raizer", pts:350 },
  { rank:80, name:"Carolilne Rosa", pts:350 },
  { rank:80, name:"Eliana Vieira", pts:350 },
  { rank:80, name:"Eliziane Lara", pts:350 },
  { rank:80, name:"Emilly Alves", pts:350 },
  { rank:80, name:"Gisselli Badoch", pts:350 },
  { rank:80, name:"Isabela Hermont", pts:350 },
  { rank:80, name:"Karla Cunha", pts:350 },
  { rank:80, name:"Maisa", pts:350 },
  { rank:80, name:"Milena Mayer", pts:350 },
  { rank:80, name:"Monique Milfont", pts:350 },
  { rank:80, name:"Nina", pts:350 },
  { rank:80, name:"Sandra Toloti", pts:350 },
  { rank:80, name:"Rayara Gaboardi Cavali", pts:350 },
  { rank:80, name:"Luana Degraf", pts:350 },
  { rank:80, name:"Liliana Camelier", pts:350 },
  { rank:80, name:"Jenifer Chee", pts:350 },
  { rank:102, name:"Bianca Biseto", pts:300 },
  { rank:102, name:"Genilma Moura", pts:300 },
  { rank:104, name:"Adriana Wolpe", pts:250 },
  { rank:104, name:"Andreia Latreille", pts:250 },
  { rank:104, name:"Aniele", pts:250 },
  { rank:104, name:"Dolores", pts:250 },
  { rank:104, name:"Fabiana Nunes", pts:250 },
  { rank:104, name:"Fabiany Lamboia", pts:250 },
  { rank:104, name:"Isabelle Gorski", pts:250 },
  { rank:104, name:"Juliana Fukushima", pts:250 },
  { rank:104, name:"Maria Carolina Zatar", pts:250 },
  { rank:104, name:"Mayra Castro", pts:250 },
  { rank:104, name:"Rose Escudero", pts:250 },
  { rank:115, name:"Ana Murbach", pts:200 },
  { rank:115, name:"Beatriz Kohlenberger", pts:200 },
  { rank:115, name:"Daiane Santos", pts:200 },
  { rank:115, name:"Deise Correa", pts:200 },
  { rank:115, name:"Dewi", pts:200 },
  { rank:115, name:"Ericka Hattori", pts:200 },
  { rank:115, name:"Fabiana Zapzalka", pts:200 },
  { rank:115, name:"Fabricia Knaut", pts:200 },
  { rank:115, name:"Fernanda Mousfi", pts:200 },
  { rank:115, name:"Janina Z Cruz", pts:200 },
  { rank:115, name:"Marina Alcazar", pts:200 },
  { rank:115, name:"Monica Bora", pts:200 },
  { rank:115, name:"Neti", pts:200 },
  { rank:115, name:"Nicole Taciane", pts:200 },
  { rank:115, name:"Stephanie Rigon", pts:200 },
  { rank:115, name:"Thalysa Meyer", pts:200 },
  { rank:115, name:"Karizhiani Sperandio", pts:200 },
  { rank:115, name:"Kelly Ribeiro", pts:200 },
  { rank:115, name:"Stella Santana", pts:200 },
  { rank:115, name:"Alessandra Driessen", pts:200 },
  { rank:135, name:"Ana Paula Cunha", pts:150 },
  { rank:135, name:"Daniela Mengarda", pts:150 },
  { rank:135, name:"Larissa Grabowski", pts:150 },
  { rank:135, name:"Neia Corsini", pts:150 },
  { rank:135, name:"Paula Seegmueller", pts:150 },
  { rank:140, name:"Camila Neves", pts:100 },
  { rank:140, name:"Carol Brunetto", pts:100 },
  { rank:140, name:"Dana Wolf", pts:100 },
  { rank:140, name:"Fernanda Azzoni", pts:100 },
  { rank:140, name:"Fernanda Gusso", pts:100 },
  { rank:140, name:"Iris de Oliveira", pts:100 },
  { rank:140, name:"Paula Chavinski", pts:100 },
  { rank:140, name:"Paula Rupp", pts:100 },
  { rank:140, name:"Priscila Dups", pts:100 },
  { rank:140, name:"Sophia Goulart", pts:100 },
  { rank:140, name:"Tamara Heinrichs", pts:100 },
  { rank:140, name:"Tatieli Carvalho", pts:100 },
  { rank:140, name:"Patricia Bonilha", pts:100 },
  { rank:153, name:"Alana Koskodai", pts:50 },
  { rank:153, name:"Alexandra Araujo", pts:50 },
  { rank:153, name:"Aline Baldon", pts:50 },
  { rank:153, name:"Ana Baldon", pts:50 },
  { rank:153, name:"Ana Claudia", pts:50 },
  { rank:153, name:"Ana Piva", pts:50 },
  { rank:153, name:"Andressa Bassetti", pts:50 },
  { rank:153, name:"Angelica Ribeiro", pts:50 },
  { rank:153, name:"Antonella", pts:50 },
  { rank:153, name:"Arlene Borba", pts:50 },
  { rank:153, name:"Barbara P Bocutti", pts:50 },
  { rank:153, name:"Bia Molteni", pts:50 },
  { rank:153, name:"Bianca Traiano", pts:50 },
  { rank:153, name:"Bruna Greggio", pts:50 },
  { rank:153, name:"Carol Klein", pts:50 },
  { rank:153, name:"Cassiana Tonet", pts:50 },
  { rank:153, name:"Cintia Rompkovski", pts:50 },
  { rank:153, name:"Clariana Maranha", pts:50 },
  { rank:153, name:"Cleire Curkarevicz", pts:50 },
  { rank:153, name:"Daniela Assis", pts:50 },
  { rank:153, name:"Danielle Sus", pts:50 },
  { rank:153, name:"Debora Balaban", pts:50 },
  { rank:153, name:"Eliara Balaban", pts:50 },
  { rank:153, name:"Eneli Brasil", pts:50 },
  { rank:153, name:"Evelize dos Santos", pts:50 },
  { rank:153, name:"Fabiola Moraes", pts:50 },
  { rank:153, name:"Fabiula Genero", pts:50 },
  { rank:153, name:"Fernanda Escobar", pts:50 },
  { rank:153, name:"Fernanda Xavier", pts:50 },
  { rank:153, name:"Flavia Almeida Pereira", pts:50 },
  { rank:153, name:"Franciele Alarcon", pts:50 },
  { rank:153, name:"Franciele Schuarça", pts:50 },
  { rank:153, name:"Gabi Nasser", pts:50 },
  { rank:153, name:"Gabriela Bobato", pts:50 },
  { rank:153, name:"Giovana Peples", pts:50 },
  { rank:153, name:"Gisele Bet", pts:50 },
  { rank:153, name:"Iolanda", pts:50 },
  { rank:153, name:"Isadora Paulo", pts:50 },
  { rank:153, name:"Janete Dresh", pts:50 },
  { rank:153, name:"Jaqueline B.Santana", pts:50 },
  { rank:153, name:"Jo Marcolan", pts:50 },
  { rank:153, name:"Josy Moura", pts:50 },
  { rank:153, name:"Julia Dallastella", pts:50 },
  { rank:153, name:"Juliana Procopio", pts:50 },
  { rank:153, name:"Karol Boriollo", pts:50 },
  { rank:153, name:"Larissa Ferioli", pts:50 },
  { rank:153, name:"Leticia Rezende", pts:50 },
  { rank:153, name:"Liana Abatti", pts:50 },
  { rank:153, name:"Liliane Tinoco", pts:50 },
  { rank:153, name:"Luciane Eichenberger", pts:50 },
  { rank:153, name:"M Eduarda Schilickman", pts:50 },
  { rank:153, name:"Marcela Costacurta", pts:50 },
  { rank:153, name:"Mari Dumke", pts:50 },
  { rank:153, name:"Maria Cecilia Cunha", pts:50 },
  { rank:153, name:"Mariana M.Brito", pts:50 },
  { rank:153, name:"Mayra Favoretto", pts:50 },
  { rank:153, name:"Michele Guerra", pts:50 },
  { rank:153, name:"Milena Miranda", pts:50 },
  { rank:153, name:"Nathlyn Palma", pts:50 },
  { rank:153, name:"Nicole S Lima", pts:50 },
  { rank:153, name:"Pri Floriano", pts:50 },
  { rank:153, name:"Priscila Hernandes", pts:50 },
  { rank:153, name:"Rafaela Bedin", pts:50 },
  { rank:153, name:"Rafaela Sobreiro", pts:50 },
  { rank:153, name:"Regiane Cardoso", pts:50 },
  { rank:153, name:"Regielly Cognialli", pts:50 },
  { rank:153, name:"Renata Vermelho", pts:50 },
  { rank:153, name:"Roberta Dittrich", pts:50 },
  { rank:153, name:"Roberta Guimaraes", pts:50 },
  { rank:153, name:"Rosa Reis", pts:50 },
  { rank:153, name:"Rosiane Oliveira", pts:50 },
  { rank:153, name:"Taline Santos", pts:50 },
  { rank:153, name:"Tati Pangracio", pts:50 },
  { rank:153, name:"Tatiana Moro", pts:50 },
  { rank:153, name:"Vanessa Siva", pts:50 },
  { rank:153, name:"Vivian V Pereira", pts:50 },
  { rank:153, name:"Josi Carvalho", pts:50 },
  { rank:153, name:"Bruna Ribeiro", pts:50 },
  { rank:153, name:"Catiele Cava", pts:50 },
  { rank:153, name:"Harumi Watanabe", pts:50 },
];

// ─── RANKING OFICIAL Cat E (PDF — Feminina E 2026 · 14 etapas · 239 atletas) ──
const rankE = [
  { rank:1, name:"Julia de Barros", pts:4450 },
  { rank:2, name:"Genilma Moura", pts:4150 },
  { rank:3, name:"Cassiana Vieira", pts:3500 },
  { rank:4, name:"Adclis Souza", pts:3200 },
  { rank:5, name:"Elisa Andrade", pts:2950 },
  { rank:6, name:"Caroline Cunha", pts:2800 },
  { rank:7, name:"Beatriz Ogata", pts:2650 },
  { rank:7, name:"Ana Paula F. Melo", pts:2650 },
  { rank:9, name:"Liliana Camelier", pts:2450 },
  { rank:10, name:"Nastassia Yurk", pts:2400 },
  { rank:11, name:"Natalie Thome", pts:2200 },
  { rank:12, name:"Leticia Rezende", pts:1850 },
  { rank:12, name:"Luciane Melo", pts:1850 },
  { rank:14, name:"Isabela Hermont", pts:1800 },
  { rank:14, name:"Talita Fabene", pts:1800 },
  { rank:16, name:"Raquel Lucca", pts:1650 },
  { rank:17, name:"Vanessa Perez Alvarez", pts:1500 },
  { rank:17, name:"Catherine Castro", pts:1500 },
  { rank:17, name:"Stella Santana", pts:1500 },
  { rank:20, name:"Andressa Almeida", pts:1450 },
  { rank:20, name:"Maxine Vessaro", pts:1450 },
  { rank:22, name:"Janaina Torres", pts:1400 },
  { rank:23, name:"Laura Moreschi", pts:1250 },
  { rank:24, name:"Juliana Torres", pts:1200 },
  { rank:25, name:"Cristiane Favorito", pts:1150 },
  { rank:26, name:"Bruna Moribe", pts:1100 },
  { rank:26, name:"Monique De Lazari", pts:1100 },
  { rank:28, name:"Amanda Bittencourt", pts:1000 },
  { rank:29, name:"Daniele Pandini", pts:900 },
  { rank:29, name:"Francielli Scarpetta", pts:900 },
  { rank:29, name:"Karine Age", pts:900 },
  { rank:29, name:"Karol Boriolo", pts:900 },
  { rank:29, name:"Luisa Socher", pts:900 },
  { rank:29, name:"Monique Chalupe", pts:900 },
  { rank:35, name:"Rose Esudero", pts:800 },
  { rank:36, name:"Arlene Borba", pts:750 },
  { rank:37, name:"Adri Vidal", pts:700 },
  { rank:38, name:"Bruna Greggio", pts:650 },
  { rank:38, name:"Luna", pts:650 },
  { rank:38, name:"Nicole S  Lima", pts:650 },
  { rank:41, name:"Camila Dellatorre", pts:600 },
  { rank:41, name:"Eunice Munhoz", pts:600 },
  { rank:41, name:"Mari Dagostin", pts:600 },
  { rank:44, name:"Ana Baldon", pts:550 },
  { rank:44, name:"Arlene Philippsen", pts:550 },
  { rank:44, name:"Camila Casagrande", pts:550 },
  { rank:44, name:"Camila Yanaza", pts:550 },
  { rank:44, name:"Carol Raizer", pts:550 },
  { rank:44, name:"Cristiane B.Walldraf", pts:550 },
  { rank:44, name:"Cristiane Lirmann", pts:550 },
  { rank:44, name:"Elaine Oleczewski", pts:550 },
  { rank:44, name:"Eliane Fabrini", pts:550 },
  { rank:44, name:"Giovanna Beckert", pts:550 },
  { rank:44, name:"Helene Fortes", pts:550 },
  { rank:44, name:"Janete Dresh", pts:550 },
  { rank:44, name:"Jeanine Gorski", pts:550 },
  { rank:44, name:"Laura Carraro", pts:550 },
  { rank:44, name:"Luana Degraf", pts:550 },
  { rank:44, name:"Michely Matzenbacher", pts:550 },
  { rank:44, name:"Paula Silka", pts:550 },
  { rank:44, name:"Pietra Bergamini", pts:550 },
  { rank:44, name:"Tatiele Carvalho", pts:550 },
  { rank:44, name:"Renata Sartori", pts:550 },
  { rank:44, name:"Alice Bruel", pts:550 },
  { rank:65, name:"Amanda Macuco", pts:500 },
  { rank:65, name:"Jaqueline Santana", pts:500 },
  { rank:65, name:"Neia Corsini", pts:500 },
  { rank:65, name:"Rafaela Angelo", pts:500 },
  { rank:65, name:"Karine Stresser", pts:500 },
  { rank:65, name:"Leticia Gnoatto", pts:500 },
  { rank:65, name:"Tatiane Ballio", pts:500 },
  { rank:72, name:"Maria Fernanda Geara", pts:450 },
  { rank:72, name:"Brenda Leal", pts:450 },
  { rank:72, name:"Larissa Bento Villanti", pts:450 },
  { rank:75, name:"Francielli Kroetz", pts:400 },
  { rank:75, name:"Luma Dias", pts:400 },
  { rank:75, name:"Nathy Palma", pts:400 },
  { rank:75, name:"Patricia Bonilha", pts:400 },
  { rank:75, name:"Paula Fukishima", pts:400 },
  { rank:75, name:"Rafaela Tiepo", pts:400 },
  { rank:75, name:"Thais Wabesky", pts:400 },
  { rank:75, name:"Lize", pts:400 },
  { rank:83, name:"Anna Paula Tonedo", pts:350 },
  { rank:83, name:"Arizla", pts:350 },
  { rank:83, name:"Beatriz Kuinitz", pts:350 },
  { rank:83, name:"Debora Viana", pts:350 },
  { rank:83, name:"Eliziane Lara", pts:350 },
  { rank:83, name:"Gabriela Guerreiro", pts:350 },
  { rank:83, name:"Karla Ruggieri", pts:350 },
  { rank:83, name:"Leticia Re", pts:350 },
  { rank:83, name:"Liliane Tinoco", pts:350 },
  { rank:83, name:"Lorena Ordonez", pts:350 },
  { rank:83, name:"Milena Hortz", pts:350 },
  { rank:83, name:"Priscila", pts:350 },
  { rank:83, name:"Rafaela Bedin", pts:350 },
  { rank:83, name:"Silvia Schneider", pts:350 },
  { rank:83, name:"Soraya Palanicki", pts:350 },
  { rank:83, name:"Taiz Paiva", pts:350 },
  { rank:83, name:"Dolores Folador", pts:350 },
  { rank:100, name:"Adriana Azinari", pts:300 },
  { rank:100, name:"Nicole Ewert", pts:300 },
  { rank:102, name:"Aniele", pts:250 },
  { rank:102, name:"Evandra Schickmann", pts:250 },
  { rank:102, name:"Julia Licnevski", pts:250 },
  { rank:102, name:"Tatiana Salvinski", pts:250 },
  { rank:102, name:"Simone Skravonski", pts:250 },
  { rank:102, name:"Soraia Steffens", pts:250 },
  { rank:108, name:"Cinta Claudino", pts:200 },
  { rank:108, name:"Daniele Teixeira", pts:200 },
  { rank:108, name:"Ediene Lara", pts:200 },
  { rank:108, name:"Gabriela Cunha", pts:200 },
  { rank:108, name:"Isabelle Gorski", pts:200 },
  { rank:108, name:"Julia Toni", pts:200 },
  { rank:108, name:"Lais Duarte", pts:200 },
  { rank:108, name:"Lara Tonet", pts:200 },
  { rank:108, name:"Monica Pzaia", pts:200 },
  { rank:108, name:"Romila Schmider", pts:200 },
  { rank:108, name:"Eneli Brasil", pts:200 },
  { rank:108, name:"Franciele Schuarça", pts:200 },
  { rank:120, name:"Adryelle Cantarella", pts:150 },
  { rank:120, name:"Carla Lemberg", pts:150 },
  { rank:120, name:"Carol Arzua", pts:150 },
  { rank:120, name:"Harumi Watanabe", pts:150 },
  { rank:120, name:"Helen Habinoski", pts:150 },
  { rank:120, name:"Angelica Hasson", pts:150 },
  { rank:126, name:"Adriana Gonçalves", pts:100 },
  { rank:126, name:"Ana Garcia", pts:100 },
  { rank:126, name:"Ana Paola Vargas", pts:100 },
  { rank:126, name:"Ana Paula Linhares", pts:100 },
  { rank:126, name:"Andressa Nuss", pts:100 },
  { rank:126, name:"Beatriz Pavelec", pts:100 },
  { rank:126, name:"Camila Torres", pts:100 },
  { rank:126, name:"Cristiane Pavelec", pts:100 },
  { rank:126, name:"Gabriela Diniz", pts:100 },
  { rank:126, name:"Gabriela Matte", pts:100 },
  { rank:126, name:"Geisa Pedroso", pts:100 },
  { rank:126, name:"Geslaine Rovaris", pts:100 },
  { rank:126, name:"Gisele Luz", pts:100 },
  { rank:126, name:"Jessica Maciel", pts:100 },
  { rank:126, name:"Julyane Brito", pts:100 },
  { rank:126, name:"Leticia Castelinho", pts:100 },
  { rank:126, name:"Manoela Sala", pts:100 },
  { rank:126, name:"Michele Dorigan", pts:100 },
  { rank:126, name:"Taisa Rossi", pts:100 },
  { rank:126, name:"Vera Regina Santos", pts:100 },
  { rank:126, name:"Carolina Calvetti", pts:100 },
  { rank:126, name:"Loren Esper", pts:100 },
  { rank:126, name:"Rafaela Macedo", pts:100 },
  { rank:126, name:"Vanessa Otovicz", pts:100 },
  { rank:150, name:"Adri Fagundes", pts:50 },
  { rank:150, name:"Ale Santi", pts:50 },
  { rank:150, name:"Alice Alkmin", pts:50 },
  { rank:150, name:"Alicia Cruz", pts:50 },
  { rank:150, name:"Aline Baldon", pts:50 },
  { rank:150, name:"Aline Marques Leutner", pts:50 },
  { rank:150, name:"Amanda Canfield", pts:50 },
  { rank:150, name:"Ana Claudia Dias", pts:50 },
  { rank:150, name:"Ana Paula Posato", pts:50 },
  { rank:150, name:"Andrea Pedroso", pts:50 },
  { rank:150, name:"Andressa Santos", pts:50 },
  { rank:150, name:"Angela Kunz", pts:50 },
  { rank:150, name:"Antonella R da Silva", pts:50 },
  { rank:150, name:"Barbara Gracheky", pts:50 },
  { rank:150, name:"Beatriz Martins", pts:50 },
  { rank:150, name:"Bianca Caselato", pts:50 },
  { rank:150, name:"Bianca Traiano", pts:50 },
  { rank:150, name:"Brenda Faria de França", pts:50 },
  { rank:150, name:"Bruna Olandoski", pts:50 },
  { rank:150, name:"Camila Tomazoni", pts:50 },
  { rank:150, name:"Camile Motta", pts:50 },
  { rank:150, name:"Carla Bortoleto", pts:50 },
  { rank:150, name:"Carla Chevonica", pts:50 },
  { rank:150, name:"Carol Ribas", pts:50 },
  { rank:150, name:"Carolina Gabardo", pts:50 },
  { rank:150, name:"Cassiana Redwitz", pts:50 },
  { rank:150, name:"Celia Frederici", pts:50 },
  { rank:150, name:"Cintia Kavilhuka", pts:50 },
  { rank:150, name:"Crislayne Plytiuk", pts:50 },
  { rank:150, name:"Dani Cwikla", pts:50 },
  { rank:150, name:"Daniela Macedo", pts:50 },
  { rank:150, name:"Daniele Preis", pts:50 },
  { rank:150, name:"Eduarda Gorski", pts:50 },
  { rank:150, name:"Erikia Desan", pts:50 },
  { rank:150, name:"Flavia Dell Osso", pts:50 },
  { rank:150, name:"Fran Schuarça", pts:50 },
  { rank:150, name:"Franciele Mesquita", pts:50 },
  { rank:150, name:"Gabriela Sivek", pts:50 },
  { rank:150, name:"Giovanna Antochevis", pts:50 },
  { rank:150, name:"Gisele Ferreira", pts:50 },
  { rank:150, name:"Helena Leal", pts:50 },
  { rank:150, name:"Ingrid Milano", pts:50 },
  { rank:150, name:"Josiane Carvalho", pts:50 },
  { rank:150, name:"Julia Waszak", pts:50 },
  { rank:150, name:"Juliana Dal Molin", pts:50 },
  { rank:150, name:"Juliana G Oliveira", pts:50 },
  { rank:150, name:"Juliana Mezzaroba", pts:50 },
  { rank:150, name:"Karine Moura", pts:50 },
  { rank:150, name:"Karizhiani", pts:50 },
  { rank:150, name:"Keytty Schinemann", pts:50 },
  { rank:150, name:"Lara Porto", pts:50 },
  { rank:150, name:"Laressa Santos", pts:50 },
  { rank:150, name:"Leticia( Castelinho)Soares", pts:50 },
  { rank:150, name:"Louise Mello", pts:50 },
  { rank:150, name:"Marcia Afonso Degani", pts:50 },
  { rank:150, name:"Marcia Ferreira", pts:50 },
  { rank:150, name:"Marcia Pizzolatti", pts:50 },
  { rank:150, name:"Maria Eduarda (Madu)", pts:50 },
  { rank:150, name:"Mariana Guerini", pts:50 },
  { rank:150, name:"Mariana Martinelli", pts:50 },
  { rank:150, name:"Mariane C. Vaz", pts:50 },
  { rank:150, name:"Mariele Zanco", pts:50 },
  { rank:150, name:"Marina Alcazar", pts:50 },
  { rank:150, name:"Marley", pts:50 },
  { rank:150, name:"Marta Ferreira", pts:50 },
  { rank:150, name:"Mayra Zaleski", pts:50 },
  { rank:150, name:"Nathalia S Araujo", pts:50 },
  { rank:150, name:"Perla Soteras", pts:50 },
  { rank:150, name:"Priscila Adad", pts:50 },
  { rank:150, name:"Priscila Gouveia", pts:50 },
  { rank:150, name:"Regina Kuradomi", pts:50 },
  { rank:150, name:"Renata Spitzner", pts:50 },
  { rank:150, name:"Rosana Lukaszewski", pts:50 },
  { rank:150, name:"Silvia Tavares", pts:50 },
  { rank:150, name:"Sonia Bombardeli", pts:50 },
  { rank:150, name:"Stephanie Padilha", pts:50 },
  { rank:150, name:"Taiz Carrion", pts:50 },
  { rank:150, name:"Talita Wicthoff", pts:50 },
  { rank:150, name:"Thais Tinoco", pts:50 },
  { rank:150, name:"Valentina", pts:50 },
  { rank:150, name:"Vanessa D.S.da Silva", pts:50 },
  { rank:150, name:"Vanessa Neuman", pts:50 },
  { rank:150, name:"Barbara Alberti", pts:50 },
  { rank:150, name:"Ameli Maluceli", pts:50 },
  { rank:150, name:"Juliana Gutz Arruda Alvin", pts:50 },
  { rank:150, name:"Mariana Castilhos", pts:50 },
  { rank:150, name:"Elonize Guimaraes", pts:50 },
  { rank:150, name:"Maria Carolina Pavarin", pts:50 },
  { rank:150, name:"Michele Moritz", pts:50 },
  { rank:150, name:"Mariana Gobetti", pts:50 },
];

// ─── RANKING OFICIAL Sub 15 (PDF — Sub 15 Feminino 2026 · 14 etapas · 20 atletas) ──
const rankSub15 = [
  { rank:1, name:"Luisa Socher", pts:1450 },
  { rank:2, name:"Giovanna Beckert", pts:750 },
  { rank:3, name:"Laura Moreschi", pts:600 },
  { rank:3, name:"Milena Hortz Eckel", pts:600 },
  { rank:5, name:"Clara Chamecki", pts:550 },
  { rank:5, name:"Gabriela", pts:550 },
  { rank:7, name:"Valentina Calgaro", pts:400 },
  { rank:8, name:"Alice Bruel", pts:350 },
  { rank:8, name:"Sofia Moreira", pts:350 },
  { rank:10, name:"Marina Perez", pts:250 },
  { rank:11, name:"Isadora Freitas", pts:200 },
  { rank:11, name:"Leticia Araujo da Silva", pts:200 },
  { rank:13, name:"Isabela Coelho", pts:100 },
  { rank:13, name:"Isabela Mattos", pts:100 },
  { rank:13, name:"Maria Julia M.da Cunha", pts:100 },
  { rank:16, name:"Duda", pts:50 },
  { rank:16, name:"Giovanna Pereira Caselato", pts:50 },
  { rank:16, name:"Lara Tonet", pts:50 },
  { rank:16, name:"Manuela Cobra Costa", pts:50 },
  { rank:16, name:"Nicole Grobe Luprin", pts:50 },
];

const rankings = { C: rankC, D: rankD, E: rankE, Sub15: rankSub15 };

// ─── LINKS DOS PDFs ──────────────────────────────────────────────
const pdfLinks = {
  C:     "https://drive.google.com/file/d/1R7o2ZSc5yzDaRpX8NZ_Bvqx8ZJaUf3Qq/view?usp=sharing",
  D:     "https://drive.google.com/file/d/1k5McI8TNxnZ638fl6fdL30fDSsD4dHL_/view?usp=sharing",
  E:     "https://drive.google.com/file/d/1J69_-RCLFrXwEP_mGnYnsllZlcakbAFm/view?usp=sharing",
  Sub15: "https://drive.google.com/file/d/1RBT2JKkOSAm1SgyqjESQWJZdI6l_VNk_/view?usp=sharing",
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
  { num:1,  data:"21/jan", local:"ARENA 3",               done:true  },
  { num:2,  data:"11/fev", local:"PAHRAGON",              done:true  },
  { num:3,  data:"12/mar", local:"WIN ECO",               done:true  },
  { num:4,  data:"26/mar", local:"ARENA 3",               done:true  },
  { num:5,  data:"25/abr", local:"INOVE",                 done:true  },
  { num:6,  data:"14/mai", local:"ARENA 3",               done:true  },
  { num:7,  data:"29/mai", local:"CBS",                   done:true  },
  { num:8,  data:"25/jun", local:"ARENA 3",               done:true  },
  { num:9,  data:"09/jul", local:"PAHRAGON",              done:true  },
  { num:10, data:"23/jul", local:"INOVE",                 done:true  },
  { num:11, data:"27/ago", local:"Arena 3",               done:true  },
  { num:12, data:"11/set", local:"CBS",                   done:true  },
  { num:13, data:"18/set", local:"Arena 3 (Dupla Fixa)",  done:true  },
  { num:14, data:"24/set", local:"PAHRAGON",              done:true  },
  { num:15, data:"15/out", local:"Pier",                  done:false },
  { num:16, data:"05/nov", local:"Arena 3",               done:false },
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
  const counts = { C: 145, D: 232, E: 239, Sub15: 20 };
  const etapasRealizadas = { C: 14, D: 14, E: 14, Sub15: 14 };
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
            <strong style={{color:Q.pinkD}}>Dados oficiais</strong> — {counts[cat]} atletas · {etapasRealizadas[cat]} etapas realizadas · 2026
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
           
