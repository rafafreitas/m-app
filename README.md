# Financial_UP :rocket:

​Code Challenge - Mobile (React Native) - Transactions Manager<br/>
Foi criado uma API que está hospedada no endereço: "http://api.servidordetestes.pe.hu"
Para que o aplicativo funcione tenha certeza que a url não é bloqueada em sua rede.

<p align="center">
  <img height="500" src="http://api.servidordetestes.pe.hu/uploads/img/login-home.gif">
  <img height="500" src="http://api.servidordetestes.pe.hu/uploads/img/home-transactions.gif">
</p>

Este aplicativo foi criado usando [React Native](https://github.com/facebook/react-native/) e seus testes foram escritos usando [Jest](https://jestjs.io).

## Setup :gear:
1. Antes de começar, tenha certeza que seu ambiente está pronto para o desenvolvimento React Native, de acordo com as instruções oficiais descritas aqui [https://facebook.github.io/react-native/docs/getting-started.html#content] (https://facebook.github.io/react-native/docs/getting-started.html#content).

## Como começar a desenvolver e testar este projeto :clipboard:

1. Clone esse repositório usando o comando ``` git clone < project-url.git > ```.
2. Instale as dependências do projeto usando ``` yarn ```. (Observe a sessão `Produtividade`deste arquivo, para mais scripts que ajudam no desenvolvimento)
3. Use o comando ``` yarn start ``` para iniciar um servidor local.

### Iniciando o projeto no Android :robot:

1. Inicie um device virtual pelo Android Studio.
2. Caso você nunca tenha feito isso, siga as instruções descritas [nesse link] (https://developer.android.com/studio/run/managing-avds.html#createavd).
3. Para rodar seu projeto no device virtual que você iniciou, use os comandos ``` yarn build:android && yarn android```.

### Iniciando o projeto no emulador iOS :iphone:

Atenção: só é possível iniciar o projeto no iOS caso você esteja em um ambiente macOS.

1. Instale o xcode pela App Store.
2. Instale os pods do projeto com o comando ```yarn build:ios```.
3. Para rodar o projeto no iOS, use o comando: ``` yarn ios ```.
4. Você pode especificar um device utilizando o comando `--simulator` seguido do nome do device, exemplo: `yarn ios -- --simulator="iPhone 7"`.
5. Para obter a lista de simuladores instalado na sua máquina utilize o comando: `xcrun simctl list devices`.
6. Caso queira rodar o projeto em uma versão diferente do iOs, você terá que baixar o simulador com a versão desejada em ```Xcode > Preferences... > Components```.

### Testes Unitários

Para os testes unitarios utilizamos o [Jest](https://jestjs.io)
Você pode executar os testes do projeto com o comando ``` yarn test ```.

## Produtividade

O projeto possui uma série de commandos que auxilia no dia-a-dia, quantas vezes por dia não precisamos apagar repetidas pastas ou rodar uma sequência de comandos regularmente?
Para resolver esse problema existem alguns scripts no arquivo ```package.json``` na seção ```scripts```

### Detalhando principais scripts

Sinta-se à vontade em criar e editar os scripts aqui descritos conforme as necessidades do projeto.
Lembrando que antes de cada literal de script é necessário utilizar a instrução ```yarn```.

#### build

Ele prepara o projeto para ser executado pro Android e iOS. Assim que clonar o repositório, execute ```yarn build```, tudo que precisa ser preparado para executar os dois comandos, vai ser preparado aqui.
> Você pode executar o build específico de uma plataforma, especificando no comando, como no exemplo ```yarn build:android``` ou ```yarn build:ios```.

#### clean

Esse comando vai limpar todo e qualquer tipo de arquivo gerado por build e cache no projeto, vai ser como se você tivesse acabado de clonar o repositório.
> Você pode executar o clean específico de uma plataforma, especificando no comando, como no exemplo ```yarn clean:android``` ou ```yarn clean:ios```.

#### rebuild

É a combinação dos comandos ```clean``` e ```build```. Esse comando é o mais usado durante o desenvolvimento, por garantir a montagem completa do ambiente.


## Dev

Rafael Freitas – [GitHub](https://github.com/rafafreitas/) – rafael.vasconcelos@outlook.com

Consulte a ``LICENÇA`` para mais informações.

## Contribuição

1. Fork it (<https://github.com/rafafreitas/m-api>)
2. Crie sua feature branch (`git checkout -b feature/fooBar`)
3. Commit suas mudanças (`git commit -am 'Adicione as mudanças'`)
4. Faça o Push para a branch (`git push origin feature/branch`)
5. Crie um new Pull Request