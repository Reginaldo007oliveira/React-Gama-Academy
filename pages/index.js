import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu } from "../src/lib/vibeKutCommons";
import { Fragment } from "react";
function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "33px" }}
      />
    </Box>
  );
}

export default function Home() {
  const usuarioAleatorio = "peas";
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "felipefialho",
  ];

  return (
    <Fragment>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>Bem vindo</Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <Box>
            <h2 className="smallTitle">
              Pessoas na Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Box>
        </div>
      </MainGrid>
    </Fragment>
  );
}
