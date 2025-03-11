// para acessar a API fetch é necessário utilizar o método fetch() que é uma função global que fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona pela rede.
// fetch() retorna uma Promise que resolve a resposta (response) a essa requisição, seja ela bem-sucedida ou não.

// fetch('https://viacep.com.br/ws/29092170/json/') // Tipo Get

// como lidar com uma promise
// then/caltch

// fetch("https://viacep.com.br/ws/29092170/json/")
//   .then((response) => {
//     response.json().then((dados) => console.log(dados));
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// assync/await

// async function buscarCep() {
//     try {
//         const resposta = await fetch("https://viacep.com.br/ws/29092170/json/");
//         const dados = await resposta.json();

//         console.log(dados);

//     } catch (erro) {
//         console.log("Deu Errado!", erro);
//     } finally {
//         console.log("Terminou a execução");
//     }

// }

// buscarCep();

// Utilizando o DummyAPI

// esse código é para buscar usuários
async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "63f77cc1b7f489f0b351b30f",
    },
  });

  const users = await resposta.json();

  console.log(users.data);
}


// esse código é para buscar um usuário específico

async function getUser() {
    const resposta = await fetch("https://dummyapi.io/data/v1/user/5f7f8c1d5f6f6e0017e2f4b0", {
        headers: {
            "app-id": "63f77cc1b7f489f0b351b30f",
        },
        }
    );

    const user = await resposta.json();

    console.log(user);
}

getUser();


// esse código é para criar um novo usuário
async function createUser() {
  const userData = {
    name: "João",
    email: "joao@gmail.com",
  };

  try {
    await fetch("https://dummyapi.io/data/v1/user?created", {
        method: "POST",
        headers: {
          "app-id": "63f77cc1b7f489f0b351b30f",
          "content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  } catch (erro) {
    console.log("Deu erro ao tentar criar um novo Usuário", erro);
  }
}
