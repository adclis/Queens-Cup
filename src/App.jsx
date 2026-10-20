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

// ─── LOGO SVG ─────────────────────────────────────────────────────
function QueensLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="68" cy="30" rx="22" ry="22" fill={Q.pink} />
      <circle cx="62" cy="24" r="3" fill="white" opacity=".8"/>
      <circle cx="70" cy="24" r="3" fill="white" opacity=".8"/>
      <circle cx="78" cy="24" r="3" fill="white" opacity=".8"/>
      <circle cx="62" cy="32" r="3" fill="white" opacity=".8"/>
      <circle cx="70" cy="32" r="3" fill="white" opacity=".8"/>
      <circle cx="78" cy="32" r="3" fill="white" opacity=".8"/>
      <circle cx="66" cy="40" r="3" fill="white" opacity=".8"/>
      <circle cx="74" cy="40" r="3" fill="white" opacity=".8"/>
      <rect x="44" y="48" width="8" height="28" rx="4" fill={Q.pink} transform="rotate(-35 44 48)"/>
      <path d="M10 55 L10 42 L20 50 L30 35 L40 50 L50 42 L50 55 Z" fill={Q.lime}/>
      <circle cx="10" cy="40" r="3" fill={Q.lime}/>
      <circle cx="30" cy="33" r="3" fill={Q.lime}/>
      <circle cx="50" cy="40" r="3" fill={Q.lime}/>
      <rect x="8" y="55" width="44" height="7" rx="3" fill={Q.lime}/>
      <path d="M5 68 Q35 62 75 65" stroke={Q.pink} strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ─── RANKING OFICIAL Cat C (Feminina C 2026 · 15 etapas · 150 atletas) ──
const rankC = [
  { rank:1, name:"Vivi Coelho", pts:4050 },
  { rank:2, name:"Ana Lucia Alge", pts:3000 },
  { rank:3, name:"Raiane Dias", pts:2850 },
  { rank:4, name:"Julia Mendes", pts:2600 },
  { rank:5, name:"Luciana Boeira", pts:2350 },
  { rank:5, name:"Maria Ancila", pts:2350 },
  { rank:7, name:"Paula Feliz", pts:2300 },
  { rank:8, name:"Carlisa Gomes", pts:2200 },
  { rank:9, name:"Raissa Dias", pts:2150 },
  { rank:10, name:"Fabiola Miyagima", pts:1950 },
  { rank:10, name:"Brenda Marques", pts:1950 },
  { rank:12, name:"Gisele S Benato", pts:1700 },
  { rank:13, name:"Ana Paula Dallastella", pts:1650 },
  { rank:14, name:"Carla Coelho", pts:1550 },
  { rank:15, name:"Ana Mancini", pts:1200 },
  { rank:16, name:"Maiara Leal Spiaci", pts:1150 },
  { rank:16, name:"Fernanda Santos", pts:1150 },
  { rank:18, name:"Monica Bora", pts:1000 },
  { rank:19, name:"Glaucia Leite", pts:950 },
  { rank:19, name:"Fernanda Moreschi", pts:950 },
  { rank:21, name:"Ana Anjos", pts:900 },
  { rank:22, name:"Paula Ferreira", pts:750 },
  { rank:23, name:"Mariane Salvalaggio", pts:700 },
  { rank:23, name:"Erika Hattori", pts:700 },
  { rank:25, name:"Caroline Pasinato", pts:650 },
  { rank:25, name:"Cassiana Tonet", pts:650 },
  { rank:27, name:"Cris Casagrande", pts:600 },
  { rank:27, name:"Erika Moreira", pts:600 },
  { rank:27, name:"Fernanda Escobar", pts:600 },
  { rank:27, name:"Vanessa Stadler", pts:600 },
  { rank:31, name:"Dayane Ramos", pts:550 },
  { rank:31, name:"Elis Benetti", pts:550 },
  { rank:31, name:"Maisa Kataiama", pts:550 },
  { rank:31, name:"Mariana Nogueira", pts:550 },
  { rank:31, name:"Milena Mayer", pts:550 },
  { rank:31, name:"Renata Suchek", pts:550 },
  { rank:31, name:"Tati de Oliveira", pts:550 },
  { rank:31, name:"Valquiria Martins", pts:550 },
  { rank:31, name:"Vanessa Thomaz", pts:550 },
  { rank:31, name:"Regielly Coanialli", pts:550 },
  { rank:41, name:"Fabiana Nunes", pts:500 },
  { rank:41, name:"Mauren Colombo", pts:500 },
  { rank:43, name:"Maira Daros", pts:450 },
  { rank:43, name:"Marcelina", pts:450 },
  { rank:43, name:"Silvia Schneider", pts:450 },
  { rank:46, name:"Isabela Rodrigues", pts:400 },
  { rank:46, name:"Martina Hffrichter", pts:400 },
  { rank:48, name:"Aline Gaensly", pts:350 },
  { rank:48, name:"Ana Carla M Rodrigues", pts:350 },
  { rank:48, name:"Cinta Liz", pts:350 },
  { rank:48, name:"Eliane Vieira", pts:350 },
  { rank:48, name:"Lorena Cortiani", pts:350 },
  { rank:48, name:"Roberta Marder", pts:350 },
  { rank:48, name:"Lara Macedo", pts:350 },
  { rank:55, name:"Ana Murbach", pts:300 },
  { rank:55, name:"Karla Cunha", pts:300 },
  { rank:55, name:"Katiuza Brasil", pts:300 },
  { rank:58, name:"Adriana Zaithammer", pts:250 },
  { rank:58, name:"Elaine Maiorki", pts:250 },
  { rank:58, name:"Fabiany Lamboia", pts:250 },
  { rank:58, name:"Katia Gomes", pts:250 },
  { rank:58, name:"Sandra Evelizi", pts:250 },
  { rank:63, name:"Camile Trezub", pts:200 },
  { rank:63, name:"Danielle Sale", pts:200 },
  { rank:63, name:"Dina Santana", pts:200 },
  { rank:63, name:"Flavia Hass", pts:200 },
  { rank:63, name:"Maria Luisa Lincher (Malu)", pts:200 },
  { rank:63, name:"Monique Lazzari", pts:200 },
  { rank:63, name:"Nilshely", pts:200 },
  { rank:70, name:"Dani Borba", pts:150 },
  { rank:70, name:"Geovana Machado", pts:150 },
  { rank:70, name:"Kelen Ribeiro", pts:150 },
  { rank:70, name:"Vanessa Schultz", pts:150 },
  { rank:70, name:"Ana V Rigolino", pts:150 },
  { rank:75, name:"Alicia Moss", pts:100 },
  { rank:75, name:"Aline Henz", pts:100 },
  { rank:75, name:"Amanda Nogueira", pts:100 },
  { rank:75, name:"Barbara Luvison", pts:100 },
  { rank:75, name:"Bianca Behrens", pts:100 },
  { rank:75, name:"Danielle Konrad", pts:100 },
  { rank:75, name:"Danile Lima", pts:100 },
  { rank:75, name:"Fabiana Mendes", pts:100 },
  { rank:75, name:"Fabiana Zapzalka", pts:100 },
  { rank:75, name:"Fernanda Gusso", pts:100 },
  { rank:75, name:"Gabriela Sivek", pts:100 },
  { rank:75, name:"Joelly Michelle", pts:100 },
  { rank:75, name:"Karine Duarte", pts:100 },
  { rank:75, name:"Kelly Ribeiro", pts:100 },
  { rank:75, name:"Leticia Girata", pts:100 },
  { rank:75, name:"Maria Emilia Staczuk", pts:100 },
  { rank:75, name:"Mylla Murta", pts:100 },
  { rank:75, name:"Rebecca", pts:100 },
  { rank:75, name:"Rosangela Pretko", pts:100 },
  { rank:75, name:"Sara Vdal", pts:100 },
  { rank:75, name:"Thais Wabesky", pts:100 },
  { rank:75, name:"Katyulce Ribas", pts:100 },
  { rank:97, name:"Aghata Wuicik", pts:50 },
  { rank:97, name:"Ale Nunes", pts:50 },
  { rank:97, name:"Alice Losso", pts:50 },
  { rank:97, name:"Ana Cristina Pretto", pts:50 },
  { rank:97, name:"Ana Paula Constantino", pts:50 },
  { rank:97, name:"Andreia Latreille", pts:50 },
  { rank:97, name:"Arizla Fernandes", pts:50 },
  { rank:97, name:"Bianca Belotti", pts:50 },
  { rank:97, name:"Bruna Naday", pts:50 },
  { rank:97, name:"Camila Almeida", pts:50 },
  { rank:97, name:"Daisy Pereira", pts:50 },
  { rank:97, name:"Debora Balaban", pts:50 },
  { rank:97, name:"Deny Segantini", pts:50 },
  { rank:97, name:"Erika Cassotti", pts:50 },
  { rank:97, name:"Fabiana Kropernicki", pts:50 },
  { rank:97, name:"Felicita Sade", pts:50 },
  { rank:97, name:"Fernanda Mariano", pts:50 },
  { rank:97, name:"Fernanda Risnei", pts:50 },
  { rank:97, name:"Flavia Santos", pts:50 },
  { rank:97, name:"Gilmara Coronado", pts:50 },
  { rank:97, name:"Giselle Duarte", pts:50 },
  { rank:97, name:"Juliana Fukushima", pts:50 },
  { rank:97, name:"Kamile Enzo", pts:50 },
  { rank:97, name:"Karina Menegusso", pts:50 },
  { rank:97, name:"Leidi Brancher", pts:50 },
  { rank:97, name:"Leila Caetano", pts:50 },
  { rank:97, name:"Leticia Kawata", pts:50 },
  { rank:97, name:"Lucianna Wieler", pts:50 },
  { rank:97, name:"Marcia Nonnenmacher", pts:50 },
  { rank:97, name:"Maria Claudia Rebelato", pts:50 },
  { rank:97, name:"Mariana Kroernicki", pts:50 },
  { rank:97, name:"Marina Nero", pts:50 },
  { rank:97, name:"Mayra Favoretto", pts:50 },
  { rank:97, name:"Pathy Valerio", pts:50 },
  { rank:97, name:"Patrica Farracha", pts:50 },
  { rank:97, name:"Patricia Calgaro", pts:50 },
  { rank:97, name:"Paula Requiao", pts:50 },
  { rank:97, name:"Pri Melo", pts:50 },
  { rank:97, name:"Pri Santiago", pts:50 },
  { rank:97, name:"Rafaella Krelling", pts:50 },
  { rank:97, name:"Renata Emy Kuradomi", pts:50 },
  { rank:97, name:"Roberta R. Dias", pts:50 },
  { rank:97, name:"Samantha Cim", pts:50 },
  { rank:97, name:"Tatiane Balbinotti", pts:50 },
  { rank:97, name:"Tatiane Belotti", pts:50 },
  { rank:97, name:"Thais Cassoti", pts:50 },
  { rank:97, name:"Valery Riechi", pts:50 },
  { rank:97, name:"Vanessa Leandro", pts:50 },
  { rank:97, name:"Tatiane Tosato", pts:50 },
  { rank:97, name:"Betania Donatao", pts:50 },
  { rank:97, name:"Camila Nobell", pts:50 },
  { rank:97, name:"Maira Campos", pts:50 },
  { rank:97, name:"Cindi Carmelo", pts:50 },
  { rank:97, name:"Carol Westphalen", pts:50 },
];

// ─── RANKING OFICIAL Cat D (Feminina D 2026 · 15 etapas · 247 atletas) ──
const rankD = [
  { rank:1, name:"Dayane Ramos", pts:6900 },
  { rank:2, name:"Camila Almeida", pts:5800 },
  { rank:3, name:"Cristiane Lirmann", pts:5100 },
  { rank:4, name:"Eliane Fabrini", pts:4650 },
  { rank:5, name:"Julliane Azevedo", pts:3450 },
  { rank:6, name:"Gabriela Bossardi", pts:3200 },
  { rank:7, name:"Mauren Colombo", pts:3150 },
  { rank:8, name:"Ale Nunes", pts:3000 },
  { rank:9, name:"Patty Calgaro", pts:2950 },
  { rank:10, name:"Aimee Garcias", pts:2900 },
  { rank:11, name:"Soraya Palanicki", pts:2700 },
  { rank:12, name:"Rafaela Almeida", pts:2600 },
  { rank:13, name:"Aline Henz", pts:2550 },
  { rank:13, name:"Danielle Konrad", pts:2550 },
  { rank:15, name:"Fernanda Moreira", pts:2400 },
  { rank:16, name:"Cintia Claudino", pts:2350 },
  { rank:17, name:"Tatiana Stadler", pts:2300 },
  { rank:18, name:"Julia Torres", pts:2200 },
  { rank:19, name:"Adri Vidal", pts:2050 },
  { rank:20, name:"Vanessa Thomaz", pts:1900 },
  { rank:21, name:"Daniele Pandini", pts:1800 },
  { rank:22, name:"Cleide Bruel", pts:1650 },
  { rank:23, name:"Patricia Cruz", pts:1550 },
  { rank:23, name:"Julia Barros", pts:1550 },
  { rank:23, name:"Daisy Pereira", pts:1550 },
  { rank:26, name:"Malu Lincher", pts:1450 },
  { rank:27, name:"Adclis Souza", pts:1350 },
  { rank:28, name:"Elisiane Berno", pts:1250 },
  { rank:29, name:"Francieli Procopio", pts:1200 },
  { rank:29, name:"Karine Age", pts:1200 },
  { rank:31, name:"Isadora Cirico", pts:1100 },
  { rank:32, name:"Monique de Lazzari", pts:1050 },
  { rank:33, name:"Arizla Fernandes", pts:1000 },
  { rank:33, name:"Jessica Pavin", pts:1000 },
  { rank:33, name:"Fatima Santos", pts:1000 },
  { rank:36, name:"Thais Wabesky", pts:950 },
  { rank:37, name:"Katyulce Ribas", pts:900 },
  { rank:37, name:"Raquel Lucca", pts:900 },
  { rank:37, name:"Silvia Schneider", pts:900 },
  { rank:37, name:"Carol Raizer", pts:900 },
  { rank:41, name:"Gabriela Sivek", pts:800 },
  { rank:42, name:"Luciana V Souto", pts:750 },
  { rank:42, name:"Samara Mazetto", pts:750 },
  { rank:42, name:"Elaine Oleczewski", pts:750 },
  { rank:42, name:"Nicole Taciane", pts:750 },
  { rank:46, name:"Jacqueline Saldanha", pts:700 },
  { rank:46, name:"Rosmary Krasinski", pts:700 },
  { rank:48, name:"Juliana Coelho", pts:650 },
  { rank:48, name:"Perla Soteras", pts:650 },
  { rank:48, name:"Sarah Leal", pts:650 },
  { rank:51, name:"Alexandra Forillo", pts:600 },
  { rank:51, name:"Dani Moro", pts:600 },
  { rank:51, name:"Liana", pts:600 },
  { rank:51, name:"Monique Chalupe", pts:600 },
  { rank:51, name:"Leidi Brancher", pts:600 },
  { rank:56, name:"Andrea Slonski", pts:550 },
  { rank:56, name:"Andresa R da Silva", pts:550 },
  { rank:56, name:"Camila Teodosio", pts:550 },
  { rank:56, name:"Carolina Mocelin", pts:550 },
  { rank:56, name:"Caroline Ruppel", pts:550 },
  { rank:56, name:"Daniela Zarichta", pts:550 },
  { rank:56, name:"Elisa Andrade", pts:550 },
  { rank:56, name:"Flavia Ibrahim", pts:550 },
  { rank:56, name:"Gabriela Aguiar", pts:550 },
  { rank:56, name:"Isabela Rodrigues", pts:550 },
  { rank:56, name:"Mariana Zoller", pts:550 },
  { rank:56, name:"Mayra Rebello", pts:550 },
  { rank:56, name:"Mylla Murta", pts:550 },
  { rank:56, name:"Sara Vidal", pts:550 },
  { rank:56, name:"Paula Silka", pts:550 },
  { rank:56, name:"Mayan Malatesta", pts:550 },
  { rank:72, name:"Alessandra Gabardo", pts:500 },
  { rank:72, name:"Laressa Bassetti", pts:500 },
  { rank:74, name:"Erika Moreira", pts:450 },
  { rank:74, name:"Maria Cristina Lima", pts:450 },
  { rank:74, name:"Maria Fernanda Geara", pts:450 },
  { rank:74, name:"Larissa Murakami", pts:450 },
  { rank:74, name:"Arlene Philipsen", pts:450 },
  { rank:79, name:"Glendha Silva", pts:400 },
  { rank:79, name:"Lara Nogueira", pts:400 },
  { rank:79, name:"Martina Mayer", pts:400 },
  { rank:79, name:"Paula Werle", pts:400 },
  { rank:79, name:"Karla Cunha", pts:400 },
  { rank:79, name:"Liliana Camelier", pts:400 },
  { rank:85, name:"Amanda Capellani", pts:350 },
  { rank:85, name:"Andressa Roberto", pts:350 },
  { rank:85, name:"Apoenna Castro", pts:350 },
  { rank:85, name:"Bianca Maiorki", pts:350 },
  { rank:85, name:"Bruna Moribe", pts:350 },
  { rank:85, name:"Carolilne Rosa", pts:350 },
  { rank:85, name:"Eliana Vieira", pts:350 },
  { rank:85, name:"Eliziane Lara", pts:350 },
  { rank:85, name:"Emilly Alves", pts:350 },
  { rank:85, name:"Gisselli Badoch", pts:350 },
  { rank:85, name:"Isabela Hermont", pts:350 },
  { rank:85, name:"Maisa", pts:350 },
  { rank:85, name:"Milena Mayer", pts:350 },
  { rank:85, name:"Monique Milfont", pts:350 },
  { rank:85, name:"Nina", pts:350 },
  { rank:85, name:"Sandra Toloti", pts:350 },
  { rank:85, name:"Rayara Gaboardi Cavali", pts:350 },
  { rank:85, name:"Luana Degraf", pts:350 },
  { rank:85, name:"Jenifer Chee", pts:350 },
  { rank:85, name:"Andrea Rodrigues", pts:350 },
  { rank:85, name:"Sonia Bombardeli", pts:350 },
  { rank:106, name:"Bianca Biseto", pts:300 },
  { rank:106, name:"Genilma Moura", pts:300 },
  { rank:106, name:"Rose Escudero", pts:300 },
  { rank:109, name:"Adriana Wolpe", pts:250 },
  { rank:109, name:"Andreia Latreille", pts:250 },
  { rank:109, name:"Aniele", pts:250 },
  { rank:109, name:"Dolores", pts:250 },
  { rank:109, name:"Fabiana Nunes", pts:250 },
  { rank:109, name:"Fabiany Lamboia", pts:250 },
  { rank:109, name:"Isabelle Gorski", pts:250 },
  { rank:109, name:"Juliana Fukushima", pts:250 },
  { rank:109, name:"Maria Carolina Zatar", pts:250 },
  { rank:109, name:"Mayra Castro", pts:250 },
  { rank:109, name:"Neti", pts:250 },
  { rank:109, name:"Jaqueline B.Santana", pts:250 },
  { rank:109, name:"Taline Santos", pts:250 },
  { rank:122, name:"Ana Murbach", pts:200 },
  { rank:122, name:"Beatriz Kohlenberger", pts:200 },
  { rank:122, name:"Daiane Santos", pts:200 },
  { rank:122, name:"Deise Correa", pts:200 },
  { rank:122, name:"Dewi", pts:200 },
  { rank:122, name:"Ericka Hattori", pts:200 },
  { rank:122, name:"Fabiana Zapzalka", pts:200 },
  { rank:122, name:"Fabricia Knaut", pts:200 },
  { rank:122, name:"Fernanda Mousfi", pts:200 },
  { rank:122, name:"Janina Z Cruz", pts:200 },
  { rank:122, name:"Marina Alcazar", pts:200 },
  { rank:122, name:"Monica Bora", pts:200 },
  { rank:122, name:"Stephanie Rigon", pts:200 },
  { rank:122, name:"Thalysa Meyer", pts:200 },
  { rank:122, name:"Karizhiani Sperandio", pts:200 },
  { rank:122, name:"Kelly Ribeiro", pts:200 },
  { rank:122, name:"Stella Santana", pts:200 },
  { rank:122, name:"Alessandra Driessen", pts:200 },
  { rank:122, name:"Daniela Mengarda", pts:200 },
  { rank:122, name:"Leticia Dávilla", pts:200 },
  { rank:142, name:"Ana Paula Cunha", pts:150 },
  { rank:142, name:"Larissa Grabowski", pts:150 },
  { rank:142, name:"Neia Corsini", pts:150 },
  { rank:142, name:"Paula Seegmueller", pts:150 },
  { rank:142, name:"Fernanda Azzoni", pts:150 },
  { rank:147, name:"Camila Neves", pts:100 },
  { rank:147, name:"Carol Brunetto", pts:100 },
  { rank:147, name:"Dana Wolf", pts:100 },
  { rank:147, name:"Fernanda Gusso", pts:100 },
  { rank:147, name:"Iris de Oliveira", pts:100 },
  { rank:147, name:"Paula Chavinski", pts:100 },
  { rank:147, name:"Paula Rupp", pts:100 },
  { rank:147, name:"Priscila Dups", pts:100 },
  { rank:147, name:"Sophia Goulart", pts:100 },
  { rank:147, name:"Tamara Heinrichs", pts:100 },
  { rank:147, name:"Tatieli Carvalho", pts:100 },
  { rank:147, name:"Patricia Bonilha", pts:100 },
  { rank:147, name:"Franciele Schuarça", pts:100 },
  { rank:147, name:"Liliane Tinoco", pts:100 },
  { rank:161, name:"Alana Koskodai", pts:50 },
  { rank:161, name:"Alexandra Araujo", pts:50 },
  { rank:161, name:"Aline Baldon", pts:50 },
  { rank:161, name:"Ana Baldon", pts:50 },
  { rank:161, name:"Ana Claudia", pts:50 },
  { rank:161, name:"Ana Piva", pts:50 },
  { rank:161, name:"Andressa Bassetti", pts:50 },
  { rank:161, name:"Angelica Ribeiro", pts:50 },
  { rank:161, name:"Antonella", pts:50 },
  { rank:161, name:"Arlene Borba", pts:50 },
  { rank:161, name:"Barbara P Bocutti", pts:50 },
  { rank:161, name:"Bia Molteni", pts:50 },
  { rank:161, name:"Bianca Traiano", pts:50 },
  { rank:161, name:"Bruna Greggio", pts:50 },
  { rank:161, name:"Carol Klein", pts:50 },
  { rank:161, name:"Cassiana Tonet", pts:50 },
  { rank:161, name:"Cintia Rompkovski", pts:50 },
  { rank:161, name:"Clariana Maranha", pts:50 },
  { rank:161, name:"Cleire Curkarevicz", pts:50 },
  { rank:161, name:"Daniela Assis", pts:50 },
  { rank:161, name:"Danielle Sus", pts:50 },
  { rank:161, name:"Debora Balaban", pts:50 },
  { rank:161, name:"Eliara Balaban", pts:50 },
  { rank:161, name:"Eneli Brasil", pts:50 },
  { rank:161, name:"Evelize dos Santos", pts:50 },
  { rank:161, name:"Fabiola Moraes", pts:50 },
  { rank:161, name:"Fabiula Genero", pts:50 },
  { rank:161, name:"Fernanda Escobar", pts:50 },
  { rank:161, name:"Fernanda Xavier", pts:50 },
  { rank:161, name:"Flavia Almeida Pereira", pts:50 },
  { rank:161, name:"Franciele Alarcon", pts:50 },
  { rank:161, name:"Gabi Nasser", pts:50 },
  { rank:161, name:"Gabriela Bobato", pts:50 },
  { rank:161, name:"Giovana Peples", pts:50 },
  { rank:161, name:"Gisele Bet", pts:50 },
  { rank:161, name:"Iolanda", pts:50 },
  { rank:161, name:"Isadora Paulo", pts:50 },
  { rank:161, name:"Janete Dresh", pts:50 },
  { rank:161, name:"Jo Marcolan", pts:50 },
  { rank:161, name:"Josy Moura", pts:50 },
  { rank:161, name:"Julia Dallastella", pts:50 },
  { rank:161, name:"Juliana Procopio", pts:50 },
  { rank:161, name:"Karol Boriollo", pts:50 },
  { rank:161, name:"Larissa Ferioli", pts:50 },
  { rank:161, name:"Leticia Rezende", pts:50 },
  { rank:161, name:"Liana Abatti", pts:50 },
  { rank:161, name:"Luciane Eichenberger", pts:50 },
  { rank:161, name:"M Eduarda Schilickman", pts:50 },
  { rank:161, name:"Marcela Costacurta", pts:50 },
  { rank:161, name:"Mari Dumke", pts:50 },
  { rank:161, name:"Maria Cecilia Cunha", pts:50 },
  { rank:161, name:"Mariana M.Brito", pts:50 },
  { rank:161, name:"Mayra Favoretto", pts:50 },
  { rank:161, name:"Michele Guerra", pts:50 },
  { rank:161, name:"Milena Miranda", pts:50 },
  { rank:161, name:"Nathlyn Palma", pts:50 },
  { rank:161, name:"Nicole S Lima", pts:50 },
  { rank:161, name:"Pri Floriano", pts:50 },
  { rank:161, name:"Priscila Hernandes", pts:50 },
  { rank:161, name:"Rafaela Bedin", pts:50 },
  { rank:161, name:"Rafaela Sobreiro", pts:50 },
  { rank:161, name:"Regiane Cardoso", pts:50 },
  { rank:161, name:"Regielly Cognialli", pts:50 },
  { rank:161, name:"Renata Vermelho", pts:50 },
  { rank:161, name:"Roberta Dittrich", pts:50 },
  { rank:161, name:"Roberta Guimaraes", pts:50 },
  { rank:161, name:"Rosa Reis", pts:50 },
  { rank:161, name:"Rosiane Oliveira", pts:50 },
  { rank:161, name:"Tati Pangracio", pts:50 },
  { rank:161, name:"Tatiana Moro", pts:50 },
  { rank:161, name:"Vanessa Siva", pts:50 },
  { rank:161, name:"Vivian V Pereira", pts:50 },
  { rank:161, name:"Josi Carvalho", pts:50 },
  { rank:161, name:"Bruna Ribeiro", pts:50 },
  { rank:161, name:"Catiele Cava", pts:50 },
  { rank:161, name:"Harumi Watanabe", pts:50 },
  { rank:161, name:"Maxine Vessaro", pts:50 },
  { rank:161, name:"Karina Talamini", pts:50 },
  { rank:161, name:"Evelyn Gretervil", pts:50 },
  { rank:161, name:"Amanda Bittencourt", pts:50 },
  { rank:161, name:"Leticia Otto", pts:50 },
  { rank:161, name:"Vanessa Perez", pts:50 },
  { rank:161, name:"Rafa Tiepo", pts:50 },
  { rank:161, name:"Caroline Staine", pts:50 },
  { rank:161, name:"Larumi Watanabe", pts:50 },
  { rank:161, name:"Giovana Libretti", pts:50 },
  { rank:161, name:"Talita Cantarella", pts:50 },
];

// ─── RANKING OFICIAL Cat E (Feminina E 2026 · 15 etapas · 249 atletas) ──
const rankE = [
  { rank:1, name:"Julia de Barros", pts:5000 },
  { rank:2, name:"Genilma Moura", pts:4500 },
  { rank:3, name:"Cassiana Vieira", pts:4050 },
  { rank:4, name:"Adclis Souza", pts:3250 },
  { rank:5, name:"Elisa Andrade", pts:2950 },
  { rank:6, name:"Caroline Cunha", pts:2850 },
  { rank:7, name:"Beatriz Ogata", pts:2650 },
  { rank:7, name:"Ana Paula F. Melo", pts:2650 },
  { rank:9, name:"Liliana Camelier", pts:2500 },
  { rank:10, name:"Nastassia Yurk", pts:2400 },
  { rank:10, name:"Leticia Rezende", pts:2400 },
  { rank:12, name:"Natalie Thome", pts:2250 },
  { rank:13, name:"Janaina Torres", pts:1950 },
  { rank:14, name:"Luciane Melo", pts:1900 },
  { rank:15, name:"Talita Fabene", pts:1850 },
  { rank:16, name:"Isabela Hermont", pts:1800 },
  { rank:17, name:"Raquel Lucca", pts:1700 },
  { rank:17, name:"Stella Santana", pts:1700 },
  { rank:19, name:"Andressa Almeida", pts:1650 },
  { rank:20, name:"Vanessa Perez Alvarez", pts:1550 },
  { rank:20, name:"Catherine Castro", pts:1550 },
  { rank:22, name:"Maxine Vessaro", pts:1450 },
  { rank:22, name:"Laura Moreschi", pts:1450 },
  { rank:22, name:"Monique Chalupe", pts:1450 },
  { rank:25, name:"Juliana Torres", pts:1250 },
  { rank:26, name:"Cristiane Favorito", pts:1150 },
  { rank:27, name:"Bruna Moribe", pts:1100 },
  { rank:27, name:"Monique De Lazari", pts:1100 },
  { rank:29, name:"Amanda Bittencourt", pts:1000 },
  { rank:30, name:"Francielli Scarpetta", pts:950 },
  { rank:31, name:"Daniele Pandini", pts:900 },
  { rank:31, name:"Karine Age", pts:900 },
  { rank:31, name:"Karol Boriolo", pts:900 },
  { rank:31, name:"Luisa Socher", pts:900 },
  { rank:35, name:"Leticia Gnoatto", pts:850 },
  { rank:36, name:"Rose Esudero", pts:800 },
  { rank:37, name:"Arlene Borba", pts:750 },
  { rank:37, name:"Adri Vidal", pts:750 },
  { rank:37, name:"Paula Fukishima", pts:750 },
  { rank:37, name:"Isabelle Gorski", pts:750 },
  { rank:41, name:"Bruna Greggio", pts:650 },
  { rank:41, name:"Luna", pts:650 },
  { rank:41, name:"Nicole S Lima", pts:650 },
  { rank:44, name:"Camila Dellatorre", pts:600 },
  { rank:44, name:"Eunice Munhoz", pts:600 },
  { rank:44, name:"Mari Dagostin", pts:600 },
  { rank:47, name:"Ana Baldon", pts:550 },
  { rank:47, name:"Arlene Philippsen", pts:550 },
  { rank:47, name:"Camila Casagrande", pts:550 },
  { rank:47, name:"Camila Yanaza", pts:550 },
  { rank:47, name:"Carol Raizer", pts:550 },
  { rank:47, name:"Cristiane B.Walldraf", pts:550 },
  { rank:47, name:"Cristiane Lirmann", pts:550 },
  { rank:47, name:"Elaine Oleczewski", pts:550 },
  { rank:47, name:"Eliane Fabrini", pts:550 },
  { rank:47, name:"Giovanna Beckert", pts:550 },
  { rank:47, name:"Helene Fortes", pts:550 },
  { rank:47, name:"Janete Dresh", pts:550 },
  { rank:47, name:"Jeanine Gorski", pts:550 },
  { rank:47, name:"Laura Carraro", pts:550 },
  { rank:47, name:"Luana Degraf", pts:550 },
  { rank:47, name:"Michely Matzenbacher", pts:550 },
  { rank:47, name:"Paula Silka", pts:550 },
  { rank:47, name:"Pietra Bergamini", pts:550 },
  { rank:47, name:"Tatiele Carvalho", pts:550 },
  { rank:47, name:"Renata Sartori", pts:550 },
  { rank:47, name:"Alice Bruel", pts:550 },
  { rank:47, name:"Tatiane Ballio", pts:550 },
  { rank:69, name:"Amanda Macuco", pts:500 },
  { rank:69, name:"Jaqueline Santana", pts:500 },
  { rank:69, name:"Neia Corsini", pts:500 },
  { rank:69, name:"Rafaela Angelo", pts:500 },
  { rank:69, name:"Karine Stresser", pts:500 },
  { rank:74, name:"Maria Fernanda Geara", pts:450 },
  { rank:74, name:"Brenda Leal", pts:450 },
  { rank:74, name:"Larissa Bento Villanti", pts:450 },
  { rank:77, name:"Francielli Kroetz", pts:400 },
  { rank:77, name:"Luma Dias", pts:400 },
  { rank:77, name:"Nathy Palma", pts:400 },
  { rank:77, name:"Patricia Bonilha", pts:400 },
  { rank:77, name:"Rafaela Tiepo", pts:400 },
  { rank:77, name:"Thais Wabesky", pts:400 },
  { rank:77, name:"Lize", pts:400 },
  { rank:77, name:"Rafaela Bedin", pts:400 },
  { rank:85, name:"Anna Paula Tonedo", pts:350 },
  { rank:85, name:"Arizla", pts:350 },
  { rank:85, name:"Beatriz Kuinitz", pts:350 },
  { rank:85, name:"Debora Viana", pts:350 },
  { rank:85, name:"Eliziane Lara", pts:350 },
  { rank:85, name:"Gabriela Guerreiro", pts:350 },
  { rank:85, name:"Karla Ruggieri", pts:350 },
  { rank:85, name:"Leticia Re", pts:350 },
  { rank:85, name:"Liliane Tinoco", pts:350 },
  { rank:85, name:"Lorena Ordonez", pts:350 },
  { rank:85, name:"Milena Hortz", pts:350 },
  { rank:85, name:"Priscila", pts:350 },
  { rank:85, name:"Silvia Schneider", pts:350 },
  { rank:85, name:"Soraya Palanicki", pts:350 },
  { rank:85, name:"Taiz Paiva", pts:350 },
  { rank:85, name:"Dolores Folador", pts:350 },
  { rank:85, name:"Ana Paula M Macedo", pts:350 },
  { rank:85, name:"Maria Julia Pedrosa", pts:350 },
  { rank:85, name:"Priscila Toyama", pts:350 },
  { rank:104, name:"Adriana Azinari", pts:300 },
  { rank:104, name:"Nicole Ewert", pts:300 },
  { rank:106, name:"Aniele", pts:250 },
  { rank:106, name:"Evandra Schickmann", pts:250 },
  { rank:106, name:"Julia Licnevski", pts:250 },
  { rank:106, name:"Tatiana Salvinski", pts:250 },
  { rank:106, name:"Simone Skravonski", pts:250 },
  { rank:106, name:"Soraia Steffens", pts:250 },
  { rank:112, name:"Cinta Claudino", pts:200 },
  { rank:112, name:"Daniele Teixeira", pts:200 },
  { rank:112, name:"Ediene Lara", pts:200 },
  { rank:112, name:"Gabriela Cunha", pts:200 },
  { rank:112, name:"Julia Toni", pts:200 },
  { rank:112, name:"Lais Duarte", pts:200 },
  { rank:112, name:"Lara Tonet", pts:200 },
  { rank:112, name:"Monica Pzaia", pts:200 },
  { rank:112, name:"Romila Schmider", pts:200 },
  { rank:112, name:"Eneli Brasil", pts:200 },
  { rank:112, name:"Franciele Schuarça", pts:200 },
  { rank:112, name:"Adryelle Cantarella", pts:200 },
  { rank:112, name:"Helen Habinoski", pts:200 },
  { rank:112, name:"Angelica Hasson", pts:200 },
  { rank:112, name:"Karina Talamini Soares", pts:200 },
  { rank:112, name:"Marcela Costacurta", pts:200 },
  { rank:112, name:"Fernanda Roesler", pts:200 },
  { rank:129, name:"Carla Lemberg", pts:150 },
  { rank:129, name:"Carol Arzua", pts:150 },
  { rank:129, name:"Harumi Watanabe", pts:150 },
  { rank:129, name:"Carolina Calvetti", pts:150 },
  { rank:133, name:"Adriana Gonçalves", pts:100 },
  { rank:133, name:"Ana Garcia", pts:100 },
  { rank:133, name:"Ana Paola Vargas", pts:100 },
  { rank:133, name:"Ana Paula Linhares", pts:100 },
  { rank:133, name:"Andressa Nuss", pts:100 },
  { rank:133, name:"Beatriz Pavelec", pts:100 },
  { rank:133, name:"Camila Torres", pts:100 },
  { rank:133, name:"Cristiane Pavelec", pts:100 },
  { rank:133, name:"Gabriela Diniz", pts:100 },
  { rank:133, name:"Gabriela Matte", pts:100 },
  { rank:133, name:"Geisa Pedroso", pts:100 },
  { rank:133, name:"Geslaine Rovaris", pts:100 },
  { rank:133, name:"Gisele Luz", pts:100 },
  { rank:133, name:"Jessica Maciel", pts:100 },
  { rank:133, name:"Julyane Brito", pts:100 },
  { rank:133, name:"Leticia Castelinho", pts:100 },
  { rank:133, name:"Manoela Sala", pts:100 },
  { rank:133, name:"Michele Dorigan", pts:100 },
  { rank:133, name:"Taisa Rossi", pts:100 },
  { rank:133, name:"Vera Regina Santos", pts:100 },
  { rank:133, name:"Loren Esper", pts:100 },
  { rank:133, name:"Rafaela Macedo", pts:100 },
  { rank:133, name:"Vanessa Otovicz", pts:100 },
  { rank:133, name:"Franciele Mesquita", pts:100 },
  { rank:133, name:"Renata Spitzner", pts:100 },
  { rank:158, name:"Adri Fagundes", pts:50 },
  { rank:158, name:"Ale Santi", pts:50 },
  { rank:158, name:"Alice Alkmin", pts:50 },
  { rank:158, name:"Alicia Cruz", pts:50 },
  { rank:158, name:"Aline Baldon", pts:50 },
  { rank:158, name:"Aline Marques Leutner", pts:50 },
  { rank:158, name:"Amanda Canfield", pts:50 },
  { rank:158, name:"Ana Claudia Dias", pts:50 },
  { rank:158, name:"Ana Paula Posato", pts:50 },
  { rank:158, name:"Andrea Pedroso", pts:50 },
  { rank:158, name:"Andressa Santos", pts:50 },
  { rank:158, name:"Angela Kunz", pts:50 },
  { rank:158, name:"Antonella R da Silva", pts:50 },
  { rank:158, name:"Barbara Gracheky", pts:50 },
  { rank:158, name:"Beatriz Martins", pts:50 },
  { rank:158, name:"Bianca Caselato", pts:50 },
  { rank:158, name:"Bianca Traiano", pts:50 },
  { rank:158, name:"Brenda Faria de França", pts:50 },
  { rank:158, name:"Bruna Olandoski", pts:50 },
  { rank:158, name:"Camila Tomazoni", pts:50 },
  { rank:158, name:"Camile Motta", pts:50 },
  { rank:158, name:"Carla Bortoleto", pts:50 },
  { rank:158, name:"Carla Chevonica", pts:50 },
  { rank:158, name:"Carol Ribas", pts:50 },
  { rank:158, name:"Carolina Gabardo", pts:50 },
  { rank:158, name:"Cassiana Redwitz", pts:50 },
  { rank:158, name:"Celia Frederici", pts:50 },
  { rank:158, name:"Cintia Kavilhuka", pts:50 },
  { rank:158, name:"Crislayne Plytiuk", pts:50 },
  { rank:158, name:"Dani Cwikla", pts:50 },
  { rank:158, name:"Daniela Macedo", pts:50 },
  { rank:158, name:"Daniele Preis", pts:50 },
  { rank:158, name:"Eduarda Gorski", pts:50 },
  { rank:158, name:"Erikia Desan", pts:50 },
  { rank:158, name:"Flavia Dell Osso", pts:50 },
  { rank:158, name:"Fran Schuarça", pts:50 },
  { rank:158, name:"Gabriela Sivek", pts:50 },
  { rank:158, name:"Giovanna Antochevis", pts:50 },
  { rank:158, name:"Gisele Ferreira", pts:50 },
  { rank:158, name:"Helena Leal", pts:50 },
  { rank:158, name:"Ingrid Milano", pts:50 },
  { rank:158, name:"Josiane Carvalho", pts:50 },
  { rank:158, name:"Julia Waszak", pts:50 },
  { rank:158, name:"Juliana Dal Molin", pts:50 },
  { rank:158, name:"Juliana G Oliveira", pts:50 },
  { rank:158, name:"Juliana Mezzaroba", pts:50 },
  { rank:158, name:"Karine Moura", pts:50 },
  { rank:158, name:"Karizhiani", pts:50 },
  { rank:158, name:"Keytty Schinemann", pts:50 },
  { rank:158, name:"Lara Porto", pts:50 },
  { rank:158, name:"Laressa Santos", pts:50 },
  { rank:158, name:"Louise Mello", pts:50 },
  { rank:158, name:"Marcia Afonso Degani", pts:50 },
  { rank:158, name:"Marcia Ferreira", pts:50 },
  { rank:158, name:"Marcia Pizzolatti", pts:50 },
  { rank:158, name:"Maria Eduarda (Madu)", pts:50 },
  { rank:158, name:"Mariana Guerini", pts:50 },
  { rank:158, name:"Mariana Martinelli", pts:50 },
  { rank:158, name:"Mariane C. Vaz", pts:50 },
  { rank:158, name:"Mariele Zanco", pts:50 },
  { rank:158, name:"Marina Alcazar", pts:50 },
  { rank:158, name:"Marley", pts:50 },
  { rank:158, name:"Marta Ferreira", pts:50 },
  { rank:158, name:"Mayra Zaleski", pts:50 },
  { rank:158, name:"Nathalia S Araujo", pts:50 },
  { rank:158, name:"Perla Soteras", pts:50 },
  { rank:158, name:"Priscila Adad", pts:50 },
  { rank:158, name:"Priscila Gouveia", pts:50 },
  { rank:158, name:"Regina Kuradomi", pts:50 },
  { rank:158, name:"Rosana Lukaszewski", pts:50 },
  { rank:158, name:"Silvia Tavares", pts:50 },
  { rank:158, name:"Sonia Bombardeli", pts:50 },
  { rank:158, name:"Stephanie Padilha", pts:50 },
  { rank:158, name:"Taiz Carrion", pts:50 },
  { rank:158, name:"Talita Wicthoff", pts:50 },
  { rank:158, name:"Thais Tinoco", pts:50 },
  { rank:158, name:"Valentina", pts:50 },
  { rank:158, name:"Vanessa D.S.da Silva", pts:50 },
  { rank:158, name:"Vanessa Neuman", pts:50 },
  { rank:158, name:"Barbara Alberti", pts:50 },
  { rank:158, name:"Ameli Maluceli", pts:50 },
  { rank:158, name:"Juliana Gutz Arruda Alvin", pts:50 },
  { rank:158, name:"Mariana Castilhos", pts:50 },
  { rank:158, name:"Elonize Guimaraes", pts:50 },
  { rank:158, name:"Maria Carolina Pavarin", pts:50 },
  { rank:158, name:"Michele Moritz", pts:50 },
  { rank:158, name:"Mariana Gobetti", pts:50 },
  { rank:158, name:"Priscila Talamini", pts:50 },
  { rank:158, name:"Camilly Vitoria da Silva", pts:50 },
  { rank:158, name:"Wendy Andreatta", pts:50 },
  { rank:158, name:"Michele Sallum", pts:50 },
  { rank:158, name:"Gisele Mendes", pts:50 },
];

// ─── RANKING OFICIAL Sub 15 (Sub 15 Feminino 2026 · 15 etapas · 23 atletas) ──
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
  { rank:16, name:"Eduarda Nery de Souza", pts:50 },
  { rank:16, name:"Camila Yanaga", pts:50 },
  { rank:16, name:"Paola Nery de Souza", pts:50 },
];

const rankings = { C: rankC, D: rankD, E: rankE, Sub15: rankSub15 };

// ─── LINKS DOS PDFs (atualizados 20/10/2026) ────────────────────
const pdfLinks = {
  C:     "https://drive.google.com/file/d/1xEmC2I8mHtWFCK5A4k0UMEmGsSLEYLFZ/view?usp=sharing",
  D:     "https://drive.google.com/file/d/1FIwmrXdz-fZqEZEIIeYE-H9-Ns_qSZjU/view?usp=drive_link",
  E:     "https://drive.google.com/file/d/18fb252-ERWU7YuGM3eUotsjbGHUzIN7T/view?usp=drive_link",
  Sub15: "https://drive.google.com/file/d/1rUCr5oQVsHXaQXjsCBaYxqTyLESWaQgu/view?usp=drive_link",
};

// ─── TORNEIOS ─────────────────────────────────────────────────────
const torneios = [
  {
    id:1, nome:"Queen\'s Cup — Etapa Verão",
    data:"2026-06-21", dataFim:"2026-06-22",
    local:"Arena 3, Curitiba",
    cats:["C","D","E"], status:"inscricoes",
    premio:"R$ 4.000", vagas:48, vagasRestantes:18,
  },
  {
    id:2, nome:"Queen\'s Cup — Etapa Inverno",
    data:"2026-07-26", dataFim:"2026-07-27",
    local:"Pahragon Club, Londrina",
    cats:["C","D","E"], status:"breve",
    premio:"R$ 4.500", vagas:48, vagasRestantes:48,
  },
  {
    id:3, nome:"Queen\'s Cup — Grand Final",
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
  { num:15, data:"15/out", local:"Pier",                  done:true  },
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
  const counts = { C: 150, D: 247, E: 249, Sub15: 23 };
  const etapasRealizadas = { C: 15, D: 15, E: 15, Sub15: 15 };
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
