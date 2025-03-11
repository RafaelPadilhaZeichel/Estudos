para fazer a compilação do TypeScript para js para assim poder rodar no browser é necessário fazer a configuração manual.

No React já vamos conseguir configurar com o TypeScript deis do inicio do projeto

1. Inicializando um projeto Node.js

Npm Init e dar enter nas próximas etapas

2. Instalar o TypeScript

    2.1. Instação Global
            pode ser intalado na máquina e é possível utilizar em qualquer projeto, mas é ruim por conta das possíveis atualizações!
            `npm install -g typescript`


    2.2. Instalação local (Dentro do projeto)
            `npm install typescript -D`

TypeScript só serve durante o desenvolvimento do código, quando estiver em produção vai ser em Js

3. Utilizar o TypeScript instalado para transpilar o nosso código (Convereter o nosso código TS para JS).
    `npx tsc typescript.ts`

    `npx tsc typescript.ts --watch` ele ficara assistindo as mudanças para não ter que fazer o comando toda vez que alterar o código

4. Configurando o Ts
    `npx tsc --init`
    esse comando é para criar o arquivo onde vamos fazer as mudanças (tsconfig.json)