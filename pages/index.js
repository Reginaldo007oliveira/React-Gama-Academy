import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/aluraKutCommons";
//ProfileRelationsBoxWrapper da uma juntada nas coisas do box
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
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
  const usuarioAleatorio = "reginaldo007oliveira";
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
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas na Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <h2 className="smallTitle">
                      <a
                        href={`https://github.com/${itemAtual}`}
                        key={itemAtual}
                      >
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </h2>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </Fragment>
  );
}
