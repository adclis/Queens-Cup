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
  { rank: 1, name:"Vivi Coelho",             pts:1900 },
  { rank: 2, name:"Carlisa Gomes",           pts:1450 },
  { rank: 3, name:"Paula Feliz",             pts:1400 },
  { rank: 3, name:"Fabiola Miyagima",        pts:1400 },
  { rank: 5, name:"Julia Mendes",            pts:1250 },
  { rank: 6, name:"Ana Lucia Alge",          pts:1100 },
  { rank: 6, name:"Maria Ancila",            pts:1100 },
  { rank: 8, name:"Luciana Boeira",          pts:950  },
  { rank: 8, name:"Glaucia Leite",           pts:950  },
  { rank: 8, name:"Gisele S Benato",         pts:950  },
  { rank:11, name:"Ana Mancini",             pts:800  },
  { rank:12, name:"Ana Paula Dallastella",   pts:750  },
  { rank:12, name:"Raiane Dias",             pts:750  },
  { rank:14, name:"Marcelina",               pts:650  },
  { rank:15, name:"Cris Casagrande",         pts:600  },
  { rank:16, name:"Erika Hattori",           pts:550  },
  { rank:16, name:"Erika Moreira",           pts:550  },
  { rank:16, name:"Fernanda Santos",         pts:550  },
  { rank:16, name:"Vanessa Stadler",         pts:550  },
  { rank:16, name:"Tati de Oliveira",        pts:550  },
  { rank:21, name:"Cassiana Tonet",          pts:450  },
  { rank:21, name:"Maira Daros",             pts:450  },
  { rank:21, name:"Vanessa Thomaz",          pts:450  },
  { rank:24, name:"Milena Mayer",            pts:400  },
  { rank:24, name:"Raissa Dias",             pts:400  },
  { rank:24, name:"Fabiana Nunes",           pts:400  },
  { rank:27, name:"Lorena Cortiani",         pts:350  },
  { rank:27, name:"Aline Gaensly",           pts:350  },
  { rank:27, name:"Maiara Leal Spiaci",      pts:350  },
  { rank:27, name:"Ana Carla M Rodrigues",   pts:350  },
  { rank:27, name:"Renata Suchek",           pts:350  },
  { rank:32, name:"Paula Ferreira",          pts:300  },
  { rank:32, name:"Fernanda Moreschi",       pts:300  },
  { rank:34, name:"Katia Gomes",             pts:250  },
  { rank:34, name:"Ana Murbach",             pts:250  },
  { rank:36, name:"Danielle Sale",           pts:200  },
  { rank:36, name:"Carla Coelho",            pts:200  },
  { rank:36, name:"Dina Santana",            pts:200  },
  { rank:36, name:"Fabiany Lamboia",         pts:200  },
  { rank:36, name:"Katiuza Brasil",          pts:200  },
  { rank:36, name:"Flavia Hass",             pts:200  },
  { rank:36, name:"Nilshely",                pts:200  },
  { rank:43, name:"Geovana Machado",         pts:150  },
  { rank:43, name:"Fernanda Escobar",        pts:150  },
  { rank:43, name:"Monica Bora",             pts:150  },
  { rank:46, name:"Rebecca",                 pts:100  },
  { rank:46, name:"Fabiana Zapzalka",        pts:100  },
  { rank:46, name:"Kelly Ribeiro",           pts:100  },
  { rank:46, name:"Mylla Murta",             pts:100  },
  { rank:46, name:"Mauren Colombo",          pts:100  },
  { rank:46, name:"Rosangela Pretko",        pts:100  },
  { rank:46, name:"Amanda Nogueira",         pts:100  },
  { rank:46, name:"Karla Cunha",             pts:100  },
  { rank:54, name:"Vanessa Leandro",         pts:50   },
  { rank:54, name:"Deny Segantini",          pts:50   },
  { rank:54, name:"Bianca Belotti",          pts:50   },
  { rank:54, name:"Tatiane Belotti",         pts:50   },
  { rank:54, name:"Bruna Naday",             pts:50   },
  { rank:54, name:"Pathy Valerio",           pts:50   },
  { rank:54, name:"Lucianna Wieler",         pts:50   },
  { rank:54, name:"Ana V Rigolino",          pts:50   },
  { rank:54, name:"Danielle Konrad",         pts:50   },
  { rank:54, name:"Caroline Pasinato",       pts:50   },
  { rank:54, name:"Danile Lima",             pts:50   },
  { rank:54, name:"Fernanda Gusso",          pts:50   },
  { rank:54, name:"Ana Paula Constantino",   pts:50   },
  { rank:54, name:"Karina Menegusso",        pts:50   },
  { rank:54, name:"Patrica Farracha",        pts:50   },
  { rank:54, name:"Adriana Zaithammer",      pts:50   },
  { rank:54, name:"Vanessa Schultz",         pts:50   },
  { rank:54, name:"Gilmara Coronado",        pts:50   },
  { rank:54, name:"Juliana Fukushima",       pts:50   },
  { rank:54, name:"Dani Borba",              pts:50   },
  { rank:54, name:"Leticia Kawata",          pts:50   },
  { rank:54, name:"Marcia Nonnenmacher",     pts:50   },
  { rank:54, name:"Rafaella Krelling",       pts:50   },
  { rank:54, name:"Samantha Cim",            pts:50   },
  { rank:54, name:"Mayra Favoretto",         pts:50   },
  { rank:54, name:"Aline Henz",              pts:50   },
  { rank:54, name:"Bianca Behrens",          pts:50   },
  { rank:54, name:"Barbara Luvison",         pts:50   },
  { rank:54, name:"Leticia Girata",          pts:50   },
  { rank:54, name:"Kelen Ribeiro",           pts:50   },
  { rank:54, name:"Pri Melo",                pts:50   },
  { rank:54, name:"Silvia Schneider",        pts:50   },
  { rank:54, name:"Fernanda Risnei",         pts:50   },
  { rank:54, name:"Sandra Evelizi",          pts:50   },
  { rank:54, name:"Valery Riechi",           pts:50   },
  { rank:54, name:"Ana Cristina Pretto",     pts:50   },
  { rank:54, name:"Arizla Fernandes",        pts:50   },
  { rank:54, name:"Aghata Wuicik",           pts:50   },
];

// ─── RANKING OFICIAL Cat D (PDF — Feminina D 2026 · 7 etapas · 89 atletas) ──
const rankD = [
  { rank: 1,  name:"Camila Almeida",         pts:3450 },
  { rank: 2,  name:"Eliane Fabrini",         pts:2200 },
  { rank: 3,  name:"Gabriela Bossardi",      pts:1900 },
  { rank: 4,  name:"Cristiane Lirmann",      pts:1800 },
  { rank: 5,  name:"Daniele Pandini",        pts:1750 },
  { rank: 6,  name:"Fernanda Moreira",       pts:1600 },
  { rank: 7,  name:"Julliane Azevedo",       pts:1550 },
  { rank: 8,  name:"Malu Lincher",           pts:1450 },
  { rank: 8,  name:"Patricia Cruz",          pts:1450 },
  { rank:10,  name:"Vanessa Thomaz",         pts:1400 },
  { rank:11,  name:"Adri Vidal",             pts:1350 },
  { rank:12,  name:"Ale Nunes",              pts:1200 },
  { rank:12,  name:"Julia Torres",           pts:1200 },
  { rank:14,  name:"Aline Henz",             pts:1150 },
  { rank:14,  name:"Patty Calgaro",          pts:1150 },
  { rank:16,  name:"Dayane Ramos",           pts:1100 },
  { rank:17,  name:"Cintia Claudino",        pts:1050 },
  { rank:17,  name:"Rafaela Almeida",        pts:1050 },
  { rank:19,  name:"Elisiane Berno",         pts:950  },
  { rank:20,  name:"Arizla Fernandes",       pts:800  },
  { rank:21,  name:"Danielle Konrad",        pts:750  },
  { rank:21,  name:"Fatima Santos",          pts:750  },
  { rank:21,  name:"Samara Mazetto",         pts:750  },
  { rank:24,  name:"Gabriela Sivek",         pts:700  },
  { rank:24,  name:"Raquel Lucca",           pts:700  },
  { rank:24,  name:"Tatiana Stadler",        pts:700  },
  { rank:27,  name:"Jacqueline Saldanha",    pts:650  },
  { rank:27,  name:"Luciana V Souto",        pts:650  },
  { rank:27,  name:"Mauren Colombo",         pts:650  },
  { rank:30,  name:"Dani Moro",              pts:600  },
  { rank:30,  name:"Karine Age",             pts:600  },
  { rank:32,  name:"Alexandra Forillo",      pts:550  },
  { rank:32,  name:"Andrea Slonski",         pts:550  },
  { rank:32,  name:"Dana Wolf",              pts:550  },
  { rank:32,  name:"Flavia Ibrahim",         pts:550  },
  { rank:32,  name:"Gabriela Aguiar",        pts:550  },
  { rank:32,  name:"Juliana Coelho",         pts:550  },
  { rank:32,  name:"Liana",                  pts:550  },
  { rank:32,  name:"Mylla Murta",            pts:550  },
  { rank:32,  name:"Sara Vidal",             pts:550  },
  { rank:41,  name:"Silvia Schneider",       pts:450  },
  { rank:41,  name:"Maria Cristina Lima",    pts:450  },
  { rank:41,  name:"Jessica Pavin",          pts:450  },
  { rank:44,  name:"Erika Moreira",          pts:400  },
  { rank:44,  name:"Francieli Procopio",     pts:400  },
  { rank:46,  name:"Adclis Souza",           pts:350  },
  { rank:46,  name:"Amanda Capellani",       pts:350  },
  { rank:46,  name:"Bianca Maiorki",         pts:350  },
  { rank:46,  name:"Emilly Alves",           pts:350  },
  { rank:46,  name:"Gisselli Badoch",        pts:350  },
  { rank:46,  name:"Isadora Cirico",         pts:350  },
  { rank:46,  name:"Maisa",                  pts:350  },
  { rank:46,  name:"Milena Mayer",           pts:350  },
  { rank:46,  name:"Monique de Lazzari",     pts:350  },
  { rank:46,  name:"Nina",                   pts:350  },
  { rank:46,  name:"Paula Seegmueller",      pts:350  },
  { rank:57,  name:"Alessandra Gabardo",     pts:300  },
  { rank:57,  name:"Arlene Philippsen",      pts:300  },
  { rank:57,  name:"Bianca Biseto",          pts:300  },
  { rank:60,  name:"Cleide Bruel",           pts:250  },
  { rank:60,  name:"Fabiany Lamboia",        pts:250  },
  { rank:60,  name:"Genilma Moura",          pts:250  },
  { rank:60,  name:"Thais Wabesky",          pts:250  },
  { rank:64,  name:"Ana Murbach",            pts:200  },
  { rank:64,  name:"Aniele",                 pts:200  },
  { rank:64,  name:"Daiane Santos",          pts:200  },
  { rank:64,  name:"Dewi",                   pts:200  },
  { rank:64,  name:"Ericka Hattori",         pts:200  },
  { rank:64,  name:"Fabiana Nunes",          pts:200  },
  { rank:64,  name:"Fabiana Zapzalka",       pts:200  },
  { rank:64,  name:"Katiuza Brasil",         pts:200  },
  { rank:64,  name:"Marina Alcazar",         pts:200  },
  { rank:64,  name:"Mayra Castro",           pts:200  },
  { rank:64,  name:"Monica Bora",            pts:200  },
  { rank:64,  name:"Stehanie Rigon",         pts:200  },
  { rank:76,  name:"Dolores",                pts:150  },
  { rank:76,  name:"Iris de Oliveira",       pts:150  },
  { rank:76,  name:"Juliana Fukushima",      pts:150  },
  { rank:76,  name:"Perla Soteras",          pts:150  },
  { rank:80,  name:"Fernanda Gusso",         pts:100  },
  { rank:80,  name:"Karol Boriello",         pts:100  },
  { rank:80,  name:"Karla Cunha",            pts:100  },
  { rank:83,  name:"Giovna Peples",          pts:50   },
  { rank:83,  name:"Kelly Ribeiro",          pts:50   },
  { rank:83,  name:"Roberta Guimaraes",      pts:50   },
  { rank:83,  name:"Rosiane Oliveira",       pts:50   },
  { rank:83,  name:"Sophia Goulart",         pts:50   },
];

const rankE = [
  { rank:1, name:"Isabela Rocha",   pts:1700 },
  { rank:2, name:"Natalia Fonseca", pts:1510 },
  { rank:3, name:"Camila Prado",    pts:1290 },
  { rank:4, name:"Larissa Monte",   pts:1050 },
  { rank:5, name:"Renata Duarte",   pts:890  },
  { rank:6, name:"Silvia Gama",     pts:720  },
];

const rankings = { C: rankC, D: rankD, E: rankE };

// ─── LINKS DOS PDFs (após subir no Google Drive, cole os links aqui) ──
// Instruções: Drive → botão direito no PDF → "Compartilhar" → "Qualquer pessoa com o link" → copiar link
// Substitua os links abaixo pelos links reais do seu Google Drive
const pdfLinks = {
  C: "https://drive.google.com/file/d/1xGo3w_wz5nIwEXzBVFBcKOsTdV1fQR1j/view?usp=sharing",
  D: "https://drive.google.com/file/d/1C6TOII6R3-ZzONpInzJEiLSnF5yhhlrm/view?usp=sharing",
  E: null,
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
  { num:1, data:"21/jan", local:"Arena 3",   done:true  },
  { num:2, data:"11/fev", local:"Pahragon",  done:true  },
  { num:3, data:"12/mar", local:"WIN",       done:true  },
  { num:4, data:"26/mar", local:"Eco Arena", done:true  },
  { num:5, data:"25/abr", local:"I 9",       done:true  },
  { num:6, data:"14/mai", local:"Arena 3",   done:true  },
  { num:7, data:"29/mai", local:"CBS",       done:true  },
  { num:8, data:"21/jun", local:"Arena 3",   done:false },
  { num:9, data:"26/jul", local:"Pahragon",  done:false },
  { num:10,data:"08/nov", local:"CBS Arena", done:false },
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
      {/* logo + título */}
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
      {/* tabs */}
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
  return (
    <div style={{
      background: Q.bgCard,
      borderRadius:12, padding:"12px 14px",
      display:"flex", alignItems:"center", gap:12,
      boxShadow: i<3?"0 3px 10px rgba(255,46,173,.12)":"0 1px 4px rgba(0,0,0,.05)",
      borderLeft:`4px solid ${i===0?Q.lime:i===1?medalClr[1]:i===2?medalClr[2]:Q.border}`,
      marginBottom:7,
    }}>
      <div style={{
        width:30, height:30, borderRadius:"50%", flexShrink:0,
        background: i<3
          ? `linear-gradient(135deg,${[Q.lime,medalClr[1],medalClr[2]][i]},${Q.pinkD})`
          : Q.grayL,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontWeight:900, fontSize:13, color:i<3?Q.white:Q.gray,
      }}>{p.rank}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontWeight:700, fontSize:14, color:Q.dark }}>{p.name}</div>
      </div>
      <div style={{ textAlign:"right" }}>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:1,
          color: i===0?Q.lime:Q.pink,
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

  return (
    <div style={{ padding:"20px 16px" }}>
      {/* cabeçalho */}
      <div style={{ marginBottom:16 }}>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:3,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        }}>RANKING OFICIAL</div>
        <div style={{ color:Q.gray, fontSize:12 }}>Temporada 2026 · Feminino</div>
      </div>

      {/* categorias */}
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

      {/* badge dados reais + link PDF */}
      {cat==="C" && (
        <div style={{
          background:`linear-gradient(135deg,${Q.pink}15,${Q.lime}15)`,
          border:`1px solid ${Q.pink}44`, borderRadius:12,
          padding:"10px 14px", marginBottom:16,
        }}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <span style={{fontSize:16}}>📄</span>
            <div style={{ fontSize:11, color:Q.dark }}>
              <strong style={{color:Q.pinkD}}>Dados oficiais</strong> — {rankC.length} atletas · 7 etapas realizadas · 2026
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1xGo3w_wz5nIwEXzBVFBcKOsTdV1fQR1j/view?usp=sharing" target="_blank" rel="noreferrer" style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:6,
            background:Q.pink, color:Q.white, borderRadius:8, padding:"8px 0",
            fontSize:11, fontWeight:700, letterSpacing:.5, textDecoration:"none",
          }}>📥 BAIXAR RANKING COMPLETO — CAT C</a>
        </div>
      )}
      {cat==="D" && (
        <div style={{
          background:`linear-gradient(135deg,${Q.pink}15,${Q.lime}15)`,
          border:`1px solid ${Q.pink}44`, borderRadius:12,
          padding:"10px 14px", marginBottom:16,
        }}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <span style={{fontSize:16}}>📄</span>
            <div style={{ fontSize:11, color:Q.dark }}>
              <strong style={{color:Q.pinkD}}>Dados oficiais</strong> — {rankD.length} atletas · 7 etapas realizadas · 2026
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1C6TOII6R3-ZzONpInzJEiLSnF5yhhlrm/view?usp=sharing" target="_blank" rel="noreferrer" style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:6,
            background:Q.pink, color:Q.white, borderRadius:8, padding:"8px 0",
            fontSize:11, fontWeight:700, letterSpacing:.5, textDecoration:"none",
          }}>📥 BAIXAR RANKING COMPLETO — CAT D</a>
        </div>
      )}
      {cat==="E" && (
        <div style={{
          background:`linear-gradient(135deg,${Q.pink}15,${Q.lime}15)`,
          border:`1px solid ${Q.pink}44`, borderRadius:12,
          padding:"10px 14px", marginBottom:16,
        }}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <span style={{fontSize:16}}>📄</span>
            <div style={{ fontSize:11, color:Q.dark }}>
              <strong style={{color:Q.pinkD}}>Dados oficiais</strong> — {rankE.length} atletas · 7 etapas realizadas · 2026
            </div>
          </div>
          <a href="https://drive.google.com/file/d/SEU_LINK_PDF_E/view" target="_blank" rel="noreferrer" style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:6,
            background:Q.pink, color:Q.white, borderRadius:8, padding:"8px 0",
            fontSize:11, fontWeight:700, letterSpacing:.5, textDecoration:"none",
          }}>📥 BAIXAR RANKING COMPLETO — CAT E</a>
        </div>
      )}

      <Podium players={data.slice(0,3)} />

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

      {/* barra progresso */}
      <div style={{ background:Q.grayL, borderRadius:8, height:8, overflow:"hidden", marginBottom:20 }}>
        <div style={{
          width:`${(etapas.filter(e=>e.done).length/etapas.length)*100}%`,
          height:"100%", borderRadius:8,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          transition:"width .6s",
        }} />
      </div>

      {/* timeline */}
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

function InscricoesTab() {
  const [sel,setSel]     = useState(null);
  const [form,setForm]   = useState({nome:"",dupla:"",cat:"",contato:""});
  const [ok,setOk]       = useState(false);

  const abertas = torneios.filter(t=>t.status==="inscricoes");

  if (ok) return (
    <div style={{ padding:"40px 16px", display:"flex", flexDirection:"column", alignItems:"center", gap:16, textAlign:"center" }}>
      <QueensLogo size={64}/>
      <div style={{
        fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:3,
        background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
      }}>INSCRIÇÃO REALIZADA!</div>
      <div style={{ color:Q.gray, fontSize:13 }}>Aguarde a confirmação via contato informado. 💪</div>
      <div style={{
        background:`linear-gradient(135deg,${Q.dark},#3A0030)`,
        borderRadius:16, padding:"16px 20px", width:"100%", textAlign:"left",
      }}>
        {[["Atleta",form.nome],["Dupla",form.dupla||"—"],["Torneio",torneios.find(t=>t.id===sel)?.nome],["Categoria",`Cat ${form.cat} · Feminino`],["Contato",form.contato]].map(([k,v])=>(
          <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:`1px solid rgba(255,255,255,.08)` }}>
            <span style={{ color:"rgba(255,255,255,.4)", fontSize:11 }}>{k}</span>
            <span style={{ color:Q.white, fontSize:12, fontWeight:700 }}>{v}</span>
          </div>
        ))}
      </div>
      <button onClick={()=>{setOk(false);setSel(null);setForm({nome:"",dupla:"",cat:"",contato:""}); }} style={{
        width:"100%", padding:"14px 0", borderRadius:12, border:"none",
        background:`linear-gradient(135deg,${Q.pink},${Q.pinkD})`,
        color:Q.white, fontWeight:900, fontSize:14, cursor:"pointer",
        boxShadow:`0 6px 20px ${Q.pink}44`,
      }}>← NOVA INSCRIÇÃO</button>
    </div>
  );

  if (sel) {
    const t = torneios.find(x=>x.id===sel);
    const pronto = form.nome && form.cat && form.contato;
    return (
      <div style={{ padding:"20px 16px" }}>
        <button onClick={()=>setSel(null)} style={{ background:"none",border:"none",cursor:"pointer",color:Q.pink,fontSize:13,fontWeight:700,padding:0,marginBottom:14,display:"flex",alignItems:"center",gap:4 }}>← Voltar</button>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:24, letterSpacing:2,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:4,
        }}>INSCRIÇÃO</div>
        <div style={{ color:Q.pink, fontWeight:700, fontSize:13, marginBottom:18 }}>{t.nome}</div>

        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {[{label:"Nome da atleta *",k:"nome",ph:"Seu nome completo"},{label:"Nome da dupla *",k:"dupla",ph:"Nome da parceira"},{label:"Contato (WhatsApp) *",k:"contato",ph:"(41) 99999-0000"}].map(f=>(
            <div key={f.k}>
              <label style={{ fontSize:11, fontWeight:700, color:Q.gray, letterSpacing:.5, display:"block", marginBottom:5 }}>{f.label.toUpperCase()}</label>
              <input value={form[f.k]} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))} placeholder={f.ph}
                style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:`2px solid ${form[f.k]?Q.pink:Q.border}`, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit", background:Q.white }} />
            </div>
          ))}

          <div>
            <label style={{ fontSize:11, fontWeight:700, color:Q.gray, letterSpacing:.5, display:"block", marginBottom:6 }}>CATEGORIA *</label>
            <div style={{ display:"flex", gap:8 }}>
              {t.cats.map(c=>(
                <button key={c} onClick={()=>setForm(p=>({...p,cat:c}))} style={{
                  flex:1, padding:"12px 0", borderRadius:12, cursor:"pointer", border:"none",
                  background: form.cat===c?`linear-gradient(135deg,${Q.pink},${Q.pinkD})`:Q.grayL,
                  color: form.cat===c?Q.white:Q.gray,
                  fontFamily:"'Bebas Neue',sans-serif", fontSize:20, letterSpacing:1,
                  boxShadow: form.cat===c?`0 4px 14px ${Q.pink}44`:"none",
                  transition:"all .2s",
                }}>CAT {c}</button>
              ))}
            </div>
          </div>

          <button onClick={()=>{ if(pronto) setOk(true); }} style={{
            padding:"15px 0", borderRadius:14, border:"none",
            background: pronto?`linear-gradient(135deg,${Q.pink},${Q.pinkD})`:Q.grayL,
            color: pronto?Q.white:Q.gray,
            fontWeight:900, fontSize:15, cursor:"pointer", letterSpacing:1, marginTop:4,
            boxShadow: pronto?`0 6px 20px ${Q.pink}44`:"none", transition:"all .2s",
          }}>👑 CONFIRMAR INSCRIÇÃO</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding:"20px 16px" }}>
      <div style={{ marginBottom:16 }}>
        <div style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:3,
          background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        }}>INSCRIÇÕES</div>
        <div style={{ color:Q.gray, fontSize:12 }}>Torneios com vagas abertas · Exclusivo feminino</div>
      </div>

      {abertas.length===0 ? (
        <div style={{ textAlign:"center", padding:40, color:Q.gray }}>
          <div style={{ fontSize:40, marginBottom:12 }}>👑</div>
          Nenhum torneio com inscrições abertas no momento.
        </div>
      ) : abertas.map(t=>(
        <div key={t.id} style={{
          background:Q.bgCard, borderRadius:16,
          overflow:"hidden", boxShadow:`0 4px 16px ${Q.pink}20`, marginBottom:14,
        }}>
          <div style={{ background:`linear-gradient(135deg,${Q.dark},#3A0030)`, padding:"14px 16px" }}>
            <div style={{
              fontFamily:"'Bebas Neue',sans-serif", fontSize:18, letterSpacing:1,
              background:`linear-gradient(90deg,${Q.pink},${Q.lime})`,
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            }}>{t.nome}</div>
            <div style={{ color:"rgba(255,255,255,.6)", fontSize:11, marginTop:4 }}>📍 {t.local} · {fmtDate(t.data)}</div>
          </div>
          <div style={{ padding:"14px 16px" }}>
            <div style={{ display:"flex", gap:16, marginBottom:12 }}>
              <div><div style={{ fontSize:10,color:Q.gray }}>PREMIAÇÃO</div><div style={{ fontWeight:700,color:Q.pink }}>{t.premio}</div></div>
              <div><div style={{ fontSize:10,color:Q.gray }}>VAGAS</div><div style={{ fontWeight:700,color:t.vagasRestantes<10?Q.pink:Q.dark }}>{t.vagasRestantes} restantes</div></div>
            </div>
            <div style={{ background:Q.grayL, borderRadius:8, height:5, overflow:"hidden", marginBottom:12 }}>
              <div style={{ width:`${((t.vagas-t.vagasRestantes)/t.vagas)*100}%`, height:"100%", background:`linear-gradient(90deg,${Q.pink},${Q.lime})`, borderRadius:8 }}/>
            </div>
            <button onClick={()=>setSel(t.id)} style={{
              width:"100%", padding:"13px 0", borderRadius:12, border:"none",
              background:`linear-gradient(135deg,${Q.pink},${Q.pinkD})`,
              color:Q.white, fontFamily:"'Bebas Neue',sans-serif",
              fontSize:16, letterSpacing:2, cursor:"pointer",
              boxShadow:`0 6px 20px ${Q.pink}44`,
            }}>INSCREVER-SE →</button>
          </div>
        </div>
      ))}
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
