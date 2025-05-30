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
    {
      nome: "Harry Potter e a Pedra Filosofal",
      imagem:
        "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg",
    },
    {
      nome: "Harry Potter e a câmara secreta ",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi73pnJ3wDlpVgB3LWWqU-kEQnQ2yqQRtwAw&s",
    },
    {
      nome: "Harry Potter e o prisioneiro de azkaban ",
      imagem:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Harry_Potter_Prisioneiro_Azkaban_2004.jpg/250px-Harry_Potter_Prisioneiro_Azkaban_2004.jpg",
    },
    {
      nome: "Harry Potter e o Cálice de Fogo",
      imagem:
        "https://br.web.img3.acsta.net/medias/nmedia/18/93/87/95/20282862.jpg",
    },
  ];

  return (
    <ul className="conteudo">
      {filmes.map((filme, index) => (
        <Filme nome={filme.nome} imagem={filme.imagem} key={index} />
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
