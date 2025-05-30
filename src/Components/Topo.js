import React from "react";

export default function Topo() {
  const imagemInicial =
    "https://wallpapers.com/images/hd/smiling-bloody-trafalgar-law-one-piece-fanart-44bsvjb9q10npjlr.jpg";

  const [nome, setNome] = React.useState("");
  const [avatar, setAvatar] = React.useState(imagemInicial);

  function InserirNome() {
    const nomeDigitado = prompt("Qual o seu nome?");
    setNome(nomeDigitado);
  }
  function mudaAvatar() {
    const linkAvatar = prompt("Insira o Url da Imagem");
    setAvatar(linkAvatar ? linkAvatar : imagemInicial);
  }

  return (
    <div className="topo">
      <h1>FilmesFlix</h1>
      <div>
        <button onClick={InserirNome}>Inserir nome</button>
        <p>
          {!nome ? "Seja bem vindo(a) ao site!" : `Seja bem vindo(a), ${nome}!`}
        </p>
        <img onClick={mudaAvatar} src={avatar} />
      </div>
    </div>
  );
}
