export default function Menu() {
  const menu = [
    {
      texto: "Home",
      link: "./home.html",
      imagem: "https://img.icons8.com/m_rounded/200/FFFFFF/home.png",
    },
    {
      texto: "Favoritos",
      link: "./favoritos.html",
      imagem:
        "https://www.citypng.com/public/uploads/preview/hd-white-large-heart-icon-png-701751695055693o3xchntlzu.png",
    },
    {
      texto: "Contato",
      link: "./contatos.html",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN80zsXwJyV0zZLwIx8uIVlDcY1wtku5l0iQ&s",
    },
  ];

  return (
    <ul className="menu">
      {menu.map((m, index) => (
        <MenuItems
          texto={m.texto}
          link={m.link}
          imagem={m.imagem}
          key={index}
        ></MenuItems>
      ))}
    </ul>
  );
}

function MenuItems({texto, link, imagem, key}) {
  return (
    <li>
      <img src={imagem} alt="imagem"/>
      <a href={link}>{texto}</a>
    </li>
  );
}
