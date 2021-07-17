//createServer .. serve para criar servidores ..
//metodo listen
//roteamento mais de uma forma de acessar o serviço de uma api
//retornar coisas .. usar o obj response
//   default retorna qualquer coisa que não seja status
//PORT=3000 npm run start para rodar na porta 3000
//até aqui está rodando na porta 3 mil http://127.0.0.1:3000/status se não for status então cai no default 404
//até aqui foi encodado com querystring

import { createServer } from "http";
import { readFile } from "fs";
import { resolve } from "path";
import { parse } from "querystring";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ status: "É nois" }));
      response.end();
      break;
    }

    case "/sign-in": {
      const path = resolve(__dirname, "./pages/sign-in.html");

      readFile(path, (error, file) => {
        if (error) {
          response.writeHead(500, "Can't process HTML FILE");
          response.end();
          return;
        }
        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }
    //padrão de eventos data é um evento que le os pedaços do buffer de dados
    //redirecionar para a area de rota
    // let data string vazia .. chunk vai somar ao data

    case "/home": {
      const path = resolve(__dirname, "./pages/home.html");
      readFile(path, (error, file) => {
        if (error) {
          response.writeHead(500, "Can't process HTML FILE");
          response.end();
          return;
        }
        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }

    case "/authenticate": {
      let data = "";
      request.on("data", (chunk) => {
        data += chunk;
      });
      request.on("end", () => {
        const params = parse(data);
        response.writeHead(301, {
          Location: "/home",
        });
        response.end();
      });

      break;
    }

    default: {
      response.writeHead(404, "Service not found");

      response.end();
    }
  }
});
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://127.0.0.1:${PORT}.`);
});
