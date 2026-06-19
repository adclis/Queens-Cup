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

// ─── RANKING OFICIAL (PDF — Feminina C 2026 · 7 etapas · 91 atletas) ──
const rankC = [
  { rank:  1, name:"Vivi Coelho", pts:1900 },
  { rank:  2, name:"Carlisa Gomes", pts:1450 },
  { rank:  3, name:"Paula Feliz", pts:1400 },
  { rank:  3, name:"Fabiola Miyagima", pts:1400 },
  { rank:  5, name:"Julia Mendes", pts:1250 },
  { rank:  6, name:"Ana Lucia Alge", pts:1100 },
  { rank:  6, name:"Maria Ancila", pts:1100 },
  { rank:  8, name:"Luciana Boeira", pts:950 },
  { rank:  8, name:"Glaucia Leite", pts:950 },
  { rank:  8, name:"Gisele S Benato", pts:950 },
  { rank: 11, name:"Ana Mancini", pts:800 },
  { rank: 12, name:"Ana Paula Dallastella", pts:750 },
  { rank: 12, name:"Raiane Dias", pts:750 },
  { rank: 14, name:"Marcelina", pts:650 },
  { rank: 15, name:"Cris Casagrande", pts:600 },
  { rank: 16, name:"Erika Hattori", pts:550 },
  { rank: 16, name:"Erika Moreira", pts:550 },
  { rank: 16, name:"Fernanda Santos", pts:550 },
  { rank: 16, name:"Vanessa Stadler", pts:550 },
  { rank: 16, name:"Tati de Oliveira", pts:550 },
  { rank: 21, name:"Cassiana Tonet", pts:450 },
  { rank: 21, name:"Maira Daros", pts:450 },
  { rank: 21, name:"Vanessa Thomaz", pts:450 },
  { rank: 24, name:"Milena Mayer", pts:400 },
  { rank: 24, name:"Raissa Dias", pts:400 },
  { rank: 24, name:"Fabiana Nunes", pts:400 },
  { rank: 27, name:"Lorena Cortiani", pts:350 },
  { rank: 27, name:"Aline Gaensly", pts:350 },
  { rank: 27, name:"Maiara Leal Spiaci", pts:350 },
  { rank: 27, name:"Ana Carla M Rodrigues", pts:350 },
  { rank: 27, name:"Renata Suchek", pts:350 },
  { rank: 32, name:"Paula Ferreira", pts:300 },
  { rank: 32, name:"Fernanda Moreschi", pts:300 },
  { rank: 34, name:"Katia Gomes", pts:250 },
  { rank: 34, name:"Ana Murbach", pts:250 },
  { rank: 36, name:"Danielle Sale", pts:200 },
  { rank: 36, name:"Carla Coelho", pts:200 },
  { rank: 36, name:"Dina Santana", pts:200 },
  { rank: 36, name:"Fabiany Lamboia", pts:200 },
  { rank: 36, name:"Katiuza Brasil", pts:200 },
  { rank: 36, name:"Flavia Hass", pts:200 },
  { rank: 36, name:"Nilshely", pts:200 },
  { rank: 43, name:"Geovana Machado", pts:150 },
  { rank: 43, name:"Fernanda Escobar", pts:150 },
  { rank: 43, name:"Monica Bora", pts:150 },
  { rank: 46, name:"Rebecca", pts:100 },
  { rank: 46, name:"Fabiana Zapzalka", pts:100 },
  { rank: 46, name:"Kelly Ribeiro", pts:100 },
  { rank: 46, name:"Mylla Murta", pts:100 },
  { rank: 46, name:"Mauren Colombo", pts:100 },
  { rank: 46, name:"Rosangela Pretko", pts:100 },
  { rank: 46, name:"Amanda Nogueira", pts:100 },
  { rank: 46, name:"Karla Cunha", pts:100 },
  { rank: 54, name:"Vanessa Leandro", pts:50 },
  { rank: 54, name:"Deny Segantini", pts:50 },
  { rank: 54, name:"Bianca Belotti", pts:50 },
  { rank: 54, name:"Tatiane Belotti", pts:50 },
  { rank: 54, name:"Bruna Naday", pts:50 },
  { rank: 54, name:"Pathy Valerio", pts:50 },
  { rank: 54, name:"Lucianna Wieler", pts:50 },
  { rank: 54, name:"Ana V Rigolino", pts:50 },
  { rank: 54, name:"Danielle Konrad", pts:50 },
  { rank: 54, name:"Caroline Pasinato", pts:50 },
  { rank: 54, name:"Danile Lima", pts:50 },
  { rank: 54, name:"Fernanda Gusso", pts:50 },
  { rank: 54, name:"Ana Paula Constantino", pts:50 },
  { rank: 54, name:"Karina Menegusso", pts:50 },
  { rank: 54, name:"Patrica Farracha", pts:50 },
  { rank: 54, name:"Adriana Zaithammer", pts:50 },
  { rank: 54, name:"Vanessa Schultz", pts:50 },
  { rank: 54, name:"Gilmara Coronado", pts:50 },
  { rank: 54, name:"Juliana Fukushima", pts:50 },
  { rank: 54, name:"Dani Borba", pts:50 },
  { rank: 54, name:"Leticia Kawata", pts:50 },
  { rank: 54, name:"Marcia Nonnenmacher", pts:50 },
  { rank: 54, name:"Rafaella Krelling", pts:50 },
  { rank: 54, name:"Samantha Cim", pts:50 },
  { rank: 54, name:"Mayra Favoretto", pts:50 },
  { rank: 54, name:"Aline Henz", pts:50 },
  { rank: 54, name:"Bianca Behrens", pts:50 },
  { rank: 54, name:"Barbara Luvison", pts:50 },
  { rank: 54, name:"Leticia Girata", pts:50 },
  { rank: 54, name:"Kelen Ribeiro", pts:50 },
  { rank: 54, name:"Pri  Melo", pts:50 },
  { rank: 54, name:"Silvia Schneider", pts:50 },
  { rank: 54, name:"Fernanda Risnei", pts:50 },
  { rank: 54, name:"Sandra Evelizi", pts:50 },
  { rank: 54, name:"Valery Riechi", pts:50 },
  { rank: 54, name:"Ana Cristina Pretto", pts:50 },
  { rank: 54, name:"Arizla Fernandes", pts:50 },
  { rank: 54, name:"Aghata Wuicik", pts:50 },
];

// ─── RANKING OFICIAL Cat D (PDF — Feminina D 2026 · 7 etapas · 89 atletas) ──
const rankD = [
  { rank:  1, name:"Camila Almeida", pts:3450 },
  { rank:  2, name:"Eliane Fabrini", pts:2200 },
  { rank:  3, name:"Gabriela Bossardi", pts:1900 },
  { rank:  4, name:"Cristiane Lirmann", pts:1800 },
  { rank:  5, name:"Daniele Pandini", pts:1750 },
  { rank:  6, name:"Fernanda Moreira", pts:1600 },
  { rank:  7, name:"Julliane Azevedo", pts:1550 },
  { rank:  8, name:"Patricia Cruz", pts:1450 },
  { rank:  8, name:"Malu Lincher", pts:1450 },
  { rank: 10, name:"Vanessa Thomaz", pts:1400 },
  { rank: 11, name:"Adri Vidal", pts:1350 },
  { rank: 12, name:"Julia Torres", pts:1200 },
  { rank: 12, name:"Ale Nunes", pts:1200 },
  { rank: 14, name:"Patty Calgaro", pts:1150 },
  { rank: 14, name:"Aline Henz", pts:1150 },
  { rank: 16, name:"Dayane Ramos", pts:1100 },
  { rank: 17, name:"Rafaela Almeida", pts:1050 },
  { rank: 17, name:"Cintia Claudino", pts:1050 },
  { rank: 19, name:"Elisiane Berno", pts:950 },
  { rank: 20, name:"Arizla Fernandes", pts:800 },
  { rank: 21, name:"Danielle Konrad", pts:750 },
  { rank: 21, name:"Fatima Santos", pts:750 },
  { rank: 21, name:"Samara Mazetto", pts:750 },
  { rank: 24, name:"Tatiana Stadler", pts:700 },
  { rank: 24, name:"Raquel Lucca", pts:700 },
  { rank: 24, name:"Gabriela Sivek", pts:700 },
  { rank: 27, name:"Luciana V Souto", pts:650 },
  { rank: 27, name:"Jacqueline Saldanha", pts:650 },
  { rank: 27, name:"Mauren Colmbo", pts:650 },
  { rank: 30, name:"Dani Moro", pts:600 },
  { rank: 30, name:"Karine Age", pts:600 },
  { rank: 32, name:"Alexandra Forillo", pts:550 },
  { rank: 32, name:"Mylla Murta", pts:550 },
  { rank: 32, name:"Juliana Coelho", pts:550 },
  { rank: 32, name:"Liana", pts:550 },
  { rank: 32, name:"Flavia Ibrahim", pts:550 },
  { rank: 32, name:"Gabriela Aguiar", pts:550 },
  { rank: 32, name:"Andrea Slonski", pts:550 },
  { rank: 32, name:"Carolina Mocelin", pts:550 },
  { rank: 32, name:"Katyulce Ribas", pts:550 },
  { rank: 32, name:"Sara Vidal", pts:550 },
  { rank: 32, name:"Isabela Rodrigues", pts:550 },
  { rank: 32, name:"Camila Teodosio", pts:550 },
  { rank: 32, name:"Caroline Ruppel", pts:550 },
  { rank: 32, name:"Aimee Garcias", pts:550 },
  { rank: 46, name:"Julia Barros", pts:500 },
  { rank: 47, name:"Silvia Schneider", pts:450 },
  { rank: 47, name:"Maria Cristina Lima", pts:450 },
  { rank: 47, name:"Jessica Pavin", pts:450 },
  { rank: 50, name:"Erika Moreira", pts:400 },
  { rank: 50, name:"Francieli Procopio", pts:400 },
  { rank: 52, name:"Maisa", pts:350 },
  { rank: 52, name:"Adclis Souza", pts:350 },
  { rank: 52, name:"Gisselli Badoch", pts:350 },
  { rank: 52, name:"Alessandra Arruda", pts:350 },
  { rank: 52, name:"Karla Cunha", pts:350 },
  { rank: 52, name:"Nina", pts:350 },
  { rank: 52, name:"Isadora Cirico", pts:350 },
  { rank: 52, name:"Bianca Maiorki", pts:350 },
  { rank: 52, name:"Milena Mayer", pts:350 },
  { rank: 52, name:"Emilly Alves", pts:350 },
  { rank: 52, name:"Apoenna Castro", pts:350 },
  { rank: 52, name:"Monique de Lazzari", pts:350 },
  { rank: 52, name:"Amanda Capellani", pts:350 },
  { rank: 52, name:"Eliana Vieira", pts:350 },
  { rank: 52, name:"Carolilne Rosa", pts:350 },
  { rank: 52, name:"Lara Nogueira", pts:350 },
  { rank: 68, name:"Alessandra Gabardo", pts:300 },
  { rank: 68, name:"Bianca Biseto", pts:300 },
  { rank: 68, name:"Arlene Philipsen", pts:300 },
  { rank: 71, name:"Cleide Bruel", pts:250 },
  { rank: 71, name:"Genilma Moura", pts:250 },
  { rank: 71, name:"Fabiany Lamboia", pts:250 },
  { rank: 71, name:"Thais Wabesky", pts:250 },
  { rank: 71, name:"Andreia Latreille", pts:250 },
  { rank: 76, name:"Ana Murbach", pts:200 },
  { rank: 76, name:"Aniele", pts:200 },
  { rank: 76, name:"Ericka Hattori", pts:200 },
  { rank: 76, name:"Daiane Santos", pts:200 },
  { rank: 76, name:"Marina Alcazar", pts:200 },
  { rank: 76, name:"Fabiana Zapzalka", pts:200 },
  { rank: 76, name:"Mayra Castro", pts:200 },
  { rank: 76, name:"Fabricia Knaut", pts:200 },
  { rank: 76, name:"Dewi", pts:200 },
  { rank: 76, name:"Monica Bora", pts:200 },
  { rank: 76, name:"Stehanie Rigon", pts:200 },
  { rank: 76, name:"Fabiana Nunes", pts:200 },
  { rank: 76, name:"Deise Correa", pts:200 },
  { rank: 76, name:"Fernanda Mousfi", pts:200 },
  { rank: 76, name:"Larissa Murakami", pts:200 },
  { rank: 76, name:"Rosmary Krasinski", pts:200 },
  { rank: 92, name:"Iris de Oliveira", pts:150 },
  { rank: 92, name:"Juliana Fukushima", pts:150 },
  { rank: 92, name:"Dolores", pts:150 },
  { rank: 92, name:"Perla Soteras", pts:150 },
  { rank: 96, name:"Fernanda Gusso", pts:100 },
  { rank: 96, name:"Paula Chavinski", pts:100 },
  { rank: 96, name:"Paula Seegmueller", pts:100 },
  { rank: 96, name:"Daisy Pereira", pts:100 },
  { rank: 96, name:"Ana Paula Cunha", pts:100 },
  { rank:101, name:"Giovna Peples", pts:50 },
  { rank:101, name:"Kelly Ribeiro", pts:50 },
  { rank:101, name:"Roberta Guimaraes", pts:50 },
  { rank:101, name:"Rosiane Oliveira", pts:50 },
  { rank:101, name:"Sophia Goulart", pts:50 },
  { rank:101, name:"Luciane Eichenberger", pts:50 },
  { rank:101, name:"Fernanda Xavier", pts:50 },
  { rank:101, name:"Mayra Favoretto", pts:50 },
  { rank:101, name:"Vivian V Pereira", pts:50 },
  { rank:101, name:"Ana Claudia", pts:50 },
  { rank:101, name:"Rafaela Sobreiro", pts:50 },
  { rank:101, name:"Karol Boriollo", pts:50 },
  { rank:101, name:"Maria Carolina Zatar", pts:50 },
  { rank:101, name:"Josy Moura", pts:50 },
  { rank:101, name:"Rosa Reis", pts:50 },
  { rank:101, name:"Danielle Sus", pts:50 },
  { rank:101, name:"Gabi Nasser", pts:50 },
  { rank:101, name:"Tati Pangracio", pts:50 },
  { rank:101, name:"Cintia Rompkovski", pts:50 },
  { rank:101, name:"Pri Floriano", pts:50 },
  { rank:101, name:"Adriana Wolpe", pts:50 },
  { rank:101, name:"Bruna Greggio", pts:50 },
  { rank:101, name:"Karizhiani Sperandio", pts:50 },
  { rank:101, name:"Laressa Bassetti", pts:50 },
  { rank:101, name:"Michele Guerra", pts:50 },
  { rank:101, name:"Camila Neves", pts:50 },
  { rank:101, name:"Kelly Ribeiro", pts:50 },
  { rank:101, name:"Angelica Ribeiro", pts:50 },
  { rank:101, name:"Milena Miranda", pts:50 },
  { rank:101, name:"Iolanda", pts:50 },
  { rank:101, name:"Isadora Paulo", pts:50 },
  { rank:101, name:"Jo Marcolan", pts:50 },
  { rank:101, name:"Vanessa Siva", pts:50 },
  { rank:101, name:"Regiane Cardoso", pts:50 },
  { rank:101, name:"Liliane Tinoco", pts:50 },
  { rank:101, name:"Paula Rupp", pts:50 },
  { rank:101, name:"Julia Dallastella", pts:50 },
  { rank:101, name:"Arlene Borba", pts:50 },
  { rank:101, name:"Priscila Dups", pts:50 },
  { rank:101, name:"Regielly Cognialli", pts:50 },
  { rank:101, name:"Franciele Schuarça", pts:50 },
  { rank:101, name:"Paula Werle", pts:50 },
  { rank:101, name:"Tamara Heinrichs", pts:50 },
  { rank:101, name:"Dana Wolf", pts:50 },
  { rank:101, name:"Tatiana Moro", pts:50 },
  { rank:101, name:"Juliana Procopio", pts:50 },
  { rank:101, name:"Neti", pts:50 },
  { rank:101, name:"Rose Escudero", pts:50 },
  { rank:101, name:"Sarah Leal", pts:50 },
  { rank:101, name:"Antonella", pts:50 },
  { rank:101, name:"Debora Balaban", pts:50 },
  { rank:101, name:"Tatieli Carvalho", pts:50 },
  { rank:101, name:"Fabiula Genero", pts:50 },
  { rank:101, name:"Cleire Curkarevicz", pts:50 },
  { rank:101, name:"Priscila Hernandes", pts:50 },
  { rank:101, name:"Stella Santana", pts:50 },
  { rank:101, name:"Neia Corsini", pts:50 },
];

const rankE = [
  { rank:  1, name:"Genilma Moura", pts:2400 },
  { rank:  2, name:"Adclis Souza", pts:1850 },
  { rank:  3, name:"Julia de Barros", pts:1200 },
  { rank:  4, name:"Monique De Lazari", pts:1100 },
  { rank:  5, name:"Nastassia Yurk", pts:1000 },
  { rank:  5, name:"Elisa Andrade", pts:1000 },
  { rank:  5, name:"Leticia Rezende", pts:1000 },
  { rank:  8, name:"Karol Boriolo", pts:900 },
  { rank:  8, name:"Daniele Pandini", pts:900 },
  { rank:  8, name:"Karine Age", pts:900 },
  { rank:  8, name:"Isabela Hermont", pts:900 },
  { rank:  8, name:"Maxine Vessaro", pts:900 },
  { rank: 13, name:"Laura Moreschi", pts:850 },
  { rank: 14, name:"Cristiane Favorito", pts:750 },
  { rank: 15, name:"Talita Fabene", pts:700 },
  { rank: 15, name:"Caroline Cunha", pts:700 },
  { rank: 17, name:"Andressa Almeida", pts:600 },
  { rank: 17, name:"Rose Esudero", pts:600 },
  { rank: 17, name:"Stella Santana", pts:600 },
  { rank: 17, name:"Mari Dagostin", pts:600 },
  { rank: 21, name:"Eliane Fabrini", pts:550 },
  { rank: 21, name:"Nicole Lima", pts:550 },
  { rank: 21, name:"Helene Fortes", pts:550 },
  { rank: 21, name:"Cristiane Lirmann", pts:550 },
  { rank: 21, name:"Liliana Camelier", pts:550 },
  { rank: 21, name:"Bruna Moribe", pts:550 },
  { rank: 21, name:"Laura Carraro", pts:550 },
  { rank: 21, name:"Arlene Borba", pts:550 },
  { rank: 21, name:"Arlene Philippsen", pts:550 },
  { rank: 21, name:"Michely Matzenbacher", pts:550 },
  { rank: 21, name:"Camila Dellatorre", pts:550 },
  { rank: 21, name:"Paula Silka", pts:550 },
  { rank: 21, name:"Tatiele Carvalho", pts:550 },
  { rank: 21, name:"Ana Paula F. Melo", pts:550 },
  { rank: 21, name:"Beatriz Ogata", pts:550 },
  { rank: 21, name:"Camila Casagrande", pts:550 },
  { rank: 21, name:"Eunice Munhoz", pts:550 },
  { rank: 38, name:"Raquel Lucca", pts:500 },
  { rank: 39, name:"Amanda Macuco", pts:400 },
  { rank: 39, name:"Maria Fernanda Geara", pts:400 },
  { rank: 41, name:"Anna Paula Tonedo", pts:350 },
  { rank: 41, name:"Priscila", pts:350 },
  { rank: 41, name:"Silvia Schneider", pts:350 },
  { rank: 41, name:"Leticia Re", pts:350 },
  { rank: 41, name:"Gabriela Guerreiro", pts:350 },
  { rank: 41, name:"Arizla", pts:350 },
  { rank: 41, name:"Taiz Paiva", pts:350 },
  { rank: 41, name:"Eliziane Lara", pts:350 },
  { rank: 41, name:"Elaine Oleczewski", pts:350 },
  { rank: 41, name:"Karla Ruggieri", pts:350 },
  { rank: 51, name:"Janaina Torres", pts:300 },
  { rank: 51, name:"Dolores Folador", pts:300 },
  { rank: 51, name:"Natalie Thome", pts:300 },
  { rank: 54, name:"Tatiana Salvinski", pts:250 },
  { rank: 54, name:"Aniele", pts:250 },
  { rank: 54, name:"Luciane Melo", pts:250 },
  { rank: 57, name:"Cinta Claudino", pts:200 },
  { rank: 57, name:"Rose Esudero", pts:200 },
  { rank: 57, name:"Julia Licnevski", pts:200 },
  { rank: 57, name:"Romila Schmider", pts:200 },
  { rank: 57, name:"Francielli Scarpetta", pts:200 },
  { rank: 57, name:"Daniele Teixeira", pts:200 },
  { rank: 57, name:"Tatiane Ballio", pts:200 },
  { rank: 57, name:"Gabriela Cunha", pts:200 },
  { rank: 57, name:"Ediene Lara", pts:200 },
  { rank: 57, name:"Vanessa Perez Alvarez", pts:200 },
  { rank: 57, name:"Jaqueline Santana", pts:200 },
  { rank: 57, name:"Neia Corsini", pts:200 },
  { rank: 57, name:"Patricia Bonilha", pts:200 },
  { rank: 70, name:"Carla Lemberg", pts:150 },
  { rank: 70, name:"Lara Tonet", pts:150 },
  { rank: 70, name:"Adriana Azinari", pts:150 },
  { rank: 73, name:"Geisa Pedroso", pts:100 },
  { rank: 73, name:"Gisele Luz", pts:100 },
  { rank: 73, name:"Gabriela Diniz", pts:100 },
  { rank: 73, name:"Jessica Maciel", pts:100 },
  { rank: 73, name:"Geslaine Rovaris", pts:100 },
  { rank: 73, name:"Leticia Castelinho", pts:100 },
  { rank: 73, name:"Manoela Sala", pts:100 },
  { rank: 73, name:"Carol Arzua", pts:100 },
  { rank: 73, name:"Francielli Scarpetta", pts:100 },
  { rank: 73, name:"Gabriela Matte", pts:100 },
  { rank: 73, name:"Cassiana Vieira", pts:100 },
  { rank: 73, name:"Eneli Brasil", pts:100 },
  { rank: 73, name:"Rafaela Bedin", pts:100 },
  { rank: 73, name:"Paula Fukishima", pts:100 },
  { rank: 73, name:"Renata Sartori", pts:100 },
  { rank: 73, name:"Andressa Nuss", pts:100 },
  { rank: 89, name:"Laressa Santos", pts:50 },
  { rank: 89, name:"Andressa Santos", pts:50 },
  { rank: 89, name:"Gabriela Sivek", pts:50 },
  { rank: 89, name:"Keytty Schinemann", pts:50 },
  { rank: 89, name:"Adri Vidal", pts:50 },
  { rank: 89, name:"Luma Dias", pts:50 },
  { rank: 89, name:"Marley", pts:50 },
  { rank: 89, name:"Camila Torres", pts:50 },
  { rank: 89, name:"Taisa Rossi", pts:50 },
  { rank: 89, name:"Marcia Pizzolatti", pts:50 },
  { rank: 89, name:"Camile Motta", pts:50 },
  { rank: 89, name:"Vanessa D.S.da Silva", pts:50 },
  { rank: 89, name:"Ana Paula Posato", pts:50 },
  { rank: 89, name:"Bianca Caselato", pts:50 },
  { rank: 89, name:"Lara Porto", pts:50 },
  { rank: 89, name:"Valentina", pts:50 },
  { rank: 89, name:"Beatriz Martins", pts:50 },
  { rank: 89, name:"Francielli Kroetz", pts:50 },
  { rank: 89, name:"Bruna Greggio", pts:50 },
  { rank: 89, name:"Vera Regina Santos", pts:50 },
  { rank: 89, name:"Taiz Carrion", pts:50 },
  { rank: 89, name:"Karine Moura", pts:50 },
  { rank: 89, name:"Ana Claudia Dias", pts:50 },
  { rank: 89, name:"Helena Leal", pts:50 },
  { rank: 89, name:"Ale Santi", pts:50 },
  { rank: 89, name:"Erikia Desan", pts:50 },
  { rank: 89, name:"Leticia( Castelinho)Soares", pts:50 },
  { rank: 89, name:"Harumi Watanabe", pts:50 },
  { rank: 89, name:"Julyane Brito", pts:50 },
  { rank: 89, name:"Andrea Pedroso", pts:50 },
  { rank: 89, name:"Adryelle Cantarella", pts:50 },
  { rank: 89, name:"Alicia Cruz", pts:50 },
  { rank: 89, name:"Marina Alcazar", pts:50 },
  { rank: 89, name:"Mariane C. Vaz", pts:50 },
  { rank: 89, name:"Mariele Zanco", pts:50 },
  { rank: 89, name:"Ana Paula Vargas", pts:50 },
  { rank: 89, name:"Luna", pts:50 },
  { rank: 89, name:"Juliana Torres", pts:50 },
  { rank: 89, name:"Juliana Mezzaroba", pts:50 },
  { rank: 89, name:"Marta Ferreira", pts:50 },
  { rank: 89, name:"Angela Kunz", pts:50 },
  { rank: 89, name:"Josiane Carvalho", pts:50 },
  { rank: 89, name:"Dani Cwikla", pts:50 },
  { rank: 89, name:"Helen Habinoski", pts:50 },
  { rank: 89, name:"Marcia Afonso Degani", pts:50 },
  { rank: 89, name:"Larissa Bento Villanti", pts:50 },
  { rank: 89, name:"Silvia Tavares", pts:50 },
  { rank: 89, name:"Cristiane Pavelec", pts:50 },
  { rank: 89, name:"Beatriz Pavelec", pts:50 },
  { rank: 89, name:"Talita Wicthoff", pts:50 },
  { rank: 89, name:"Brenda Leal", pts:50 },
  { rank: 89, name:"Vanessa Neuman", pts:50 },
  { rank: 89, name:"Karizhiani", pts:50 },
  { rank: 89, name:"Celia Frederici", pts:50 },
  { rank: 89, name:"Ana Garcia", pts:50 },
  { rank: 89, name:"Carla Bortoleto", pts:50 },
  { rank: 89, name:"Nathy Palma", pts:50 },
  { rank: 89, name:"Adriana Gonçalves", pts:50 },
  { rank: 89, name:"Rafaela Tepo", pts:50 },
];


const rankings = { C: rankC, D: rankD, E: rankE };

// ─── LINKS DOS PDFs ──────────────────────────────────────────────
const pdfLinks = {
  C: "https://drive.google.com/file/d/1NkChnkFCLotrPMI2soFdY6xYmd6nmZr4/view?usp=drive_link",
  D: "https://drive.google.com/file/d/1ggo8vdUoMbbyEhOEmXsZE_ARQGalJyVx/view?usp=drive_link",
  E: "https://drive.google.com/file/d/1U6eVxDh4sIR-q56uPHaMHH1NdsmhOIke/view?usp=drive_link",
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
  { num:8,  data:"25/jun",    local:"ARENA 3",   done:false },
  { num:9,  data:"10/jul",    local:"PAHRAGON",  done:false },
  { num:10, data:"23/jul",    local:"INOVE",     done:false },
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
  const counts = { C: rankC.length, D: rankD.length, E: rankE.length };

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

      <div style={{ display:"flex", gap:8, marginBottom:18 }}>
        {["C","D","E"].map(c=>(
          <button key={c} onClick={()=>setCat(c)} style={{
            flex:1, padding:"11px 0", border:"none", cursor:"pointer", borderRadius:12,
            background: cat===c
              ? `linear-gradient(135deg,${Q.pink},${Q.pinkD})`
              : Q.grayL,
            color: cat===c ? Q.white : Q.gray,
            fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2,
            boxShadow: cat===c?`0 4px 14px ${Q.pink}55`:"none",
            transition:"all .2s",
          }}>CAT {c}</button>
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
            <strong style={{color:Q.pinkD}}>Dados oficiais</strong> — {counts[cat]} atletas · 7 etapas realizadas · 2026
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
        >📥 BAIXAR RANKING COMPLETO — CAT {cat}</a>
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
