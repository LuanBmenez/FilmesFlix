export default function Conteudo() {
  const filmes = [
    {
      nome: "The Avengers",
      imagem:
        "https://upload.wikimedia.org/wikipedia/pt/6/69/The_Avengers_Cartaz.jpg",
    },
    {
      nome: "Avengers Age of ultron",
      imagem:
        "https://upload.wikimedia.org/wikipedia/pt/2/22/OsVingadores2.jpg",
    },
    {
      nome: "Avengers Infinity war",
      imagem:
        "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Infinity_War.jpg",
    },
    {
      nome: "One Piece Gold",
      imagem:
        "https://br.web.img2.acsta.net/pictures/16/09/09/15/54/101079.jpg",
    },
    {
      nome: "One Piece Red",
      imagem:
        "https://ucicinemas.com.br/Content/Upload/Filmes/Posters/11060/filme_11060.jpg",
    },
    {
      nome: "Koe no Katachi",
      imagem:
        "https://br.web.img3.acsta.net/pictures/17/10/12/19/35/2068130.jpg",
    },
    {
      nome: "A rede social",
      imagem:
        "https://portal.ifrn.edu.br/media/images/13886_Sabado_Letivo_presencial_exibe_o_filme_A.width-500.jpg",
    },
  ];

  return (
    <ul className="conteudo">
      {filmes.map((filme) => (
        <Filme nome={filme.nome} imagem={filme.imagem} />
      ))}
    </ul>
  );
}

function Filme(props) {
  return (
    <li className="filme">
      <img src={props.imagem} />
      <p>{props.nome}</p>
    </li>
  );
}
