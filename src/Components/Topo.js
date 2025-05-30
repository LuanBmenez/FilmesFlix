import React from "react";

export default function Topo() {
  const imagemInicial = "https://i.pinimg.com/736x/40/1f/47/401f47f4ab436ce9a78cf6ade9fbc8d7.jpg";

  const [nome, setNome] = React.useState("");
  const [avatar, setAvatar] = React.useState(imagemInicial);


    

  function InserirNome() {
     const nomeDigitado = prompt("Qual o seu nome?");
     setNome(nomeDigitado);
  }
  function mudaAvatar() {
     const linkAvatar = prompt("Qual o seu nome?");
     setAvatar(linkAvatar);
  }


  
  return (
    <div className="topo">
      <h1>Netflix</h1>
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
