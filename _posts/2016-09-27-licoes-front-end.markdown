---
layout: post
title:  "Lições de Front-end"
subtitle: "buscando uma metodologia"
date:   2016-09-27 21:00:00 -0300
categories: frontend front licoes
---
Imagine a situação: você chega do trabalho cansadae e com fome mas não tem comida pronta então você vai até a cozinha pensando em preparar alguma coisa e descobre que só tem uma panela limpa, um prato e alguns talheres, o resto esta dentro da pia, numa pilha de louça suja, esperando pra ser lavada. São dez da noite de uma terça feira e você, no desespero, provavelmente vai sujar a última panela, o último prato, uns talheres e uns copos - e ter dó do seu 'eu' de amanhã. É exatamente assim que eu me sinto quando tenho que lidar com o projeto em que estou trabalhando agora. Todo dia tenho que decidir entre passar fome mas lavar a louça ou matar minha fome mas acumular mais trabalho pra depois.

O mais curioso dessa analogia é que todos nós sabemos que o melhor jeito é sempre lavar a louça na hora que usamos, pra não acumular, e sempre refatorar e reorganizar o seu código de tempos em tempos, mas parece que sempre estamos fazendo a decisão errada. No caso do desenvolvimento a coisa é pior ainda pois raramente depende apenas da nossa vontade reestruturar as coisas e é preciso mais do que estar 'decidido' pra conseguir botar ordem num código legado bagunçado: é preciso *método*.

Tenho passado os últimos dias lendo e conversando com desenvolvedores de front-end na tentativa de pensar um jeito de colocar ordem no código em que estou trabalhando, e sem sombra de dúvida a única unanimidade entre as opiniões é que eu terei que testar algumas coisas e descobrir o que funciona melhor pra mim neste projeto agora. Então eu estou traçando um plano de ação e vou começar a esboçá-lo um pouco neste post.

### O mundo ideal

No mundo ideal eu gostaria que meu projeto tivesse as seguintes características:

#### Nomenclatura de classes e ids consistente
Creio que as duas convenções mais famosas que existem são [BEM](http://getbem.com/naming/) e [SUIT](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md). Não vou entrar em detalhes aqui sobre a diferença entre elas porque no fim das contas me parece que o mais importante é ter um padrão consistente, independente de qual seja (com ressalvas).

#### Javascript testado
Eu conheço duas ferramentas que podem me ajudar nisso: [Jasmine](http://jasmine.github.io/) e [Karma](https://karma-runner.github.io/1.0/index.html). Não decidi qual delas usar mas, novamente, num primeiro momento meu foco é usar ALGUMA, e isso é melhor do que não ter nenhum teste no front.

#### Um catálogo de design
Este catálogo serve pra ajudar no diálogo entre design e frontend. Ele deve conter as cores principais do site, as fontes e tamanhos dos principais elementos e, talvez mais importante que tudo isso, os elementos básicos do site como botões, box de imagem, etc. Isso ajuda tanto a equipe de design quanto a de front a manterem um padrão tanto no estilo quanto no código.

#### Nomes dos ids e classes que 'conectem' javascript e css
Inicialmente eu estava convencido a ir na direção contrária a esta: a de desacoplar css e javscript. Os dois jeitos de fazer isso que eu encontrei em muitas referências são adicionando uma classe separado para ser usada pelo javascript ou adicionar um data-something='true', também pra ser usado só pelo javascript. Essas duas abordagens servem para que, se uma classe precisar ser modificada por conta de design, o script não seja afetado.

Eu mudei minha opinião sobre esse assunto ao ler o úlltimo comentário [deste post](https://coderwall.com/p/qktuzw/decouple-javascript-classes-from-css-ones-by-using-prefix). Basicamente a ideia é que não faz sentido desacoplar 'forma e função'. Quando você fala que uma caneca, por ser uma caneca, deve ter um formato específico pra poder conter liquidos, ela consequentemente te permite algumas ações (como beber algo nela) e a forma e a função estão conectadas e o jeito de evitar problemas de javascript é simplesmente tendo um código de javascript bem testado.

O lema aqui deve ser: se é pra manter javascript e css acoplados, isso deve ser feito usando classes que acoplem bem esses dois aspectos do elemento.

### O mundo real

Como na realidade o que eu tenho é uma cozinha bagunçada, é preciso escolher um jeito de caminhar na direção deste cenário ideal e que me permita, em paralelo, continuar trabalhando e continuar fazendo o projeto crescer. O meu plano de ação daqui pra frente é:

- Escolher alguma convenção de nomenclatura de pras classes e ids e escrever isso em algum lugar. A partir de então, todo código novo tem que sair dentro dessa nomenclatura e aos poucos o código velho tem que ser revisto.

- Escolher uma framework de teste pra javascript e começar a usá-la. Escrever só alguns poucos teste no começo mas, daí pra frente, nenhum código pode sair sem teste pra produção.

- Fazer um catálogo ligando design e front. Esse catálogo **deve** ser feito com a colaboração da equipe de design, pois ele serve pra **melhorar** a comunicação. No começo basta colocar alguns poucos elementos mas, a partir da hora que o catálogo estive pronto, toda vez que uma tarefa usar algum elemento que ainda não existe no catálogo, ele deve ser adicionado lá - e com o passar do tempo tanto a equipe de design quanto a de front devem policiar a si mesmas e uns aos outros para não haver desvios indesejados.

- Todo novo javascript que for escrito deve usar classes que façam sentido de acordo com esse 'acoplamento' de css e javascript. Por exemplo, se um elemento tem três classes: .button, .active e .green, um script que determina ações de botão deve chamar a primeira classe e não a segunda ou terceira.

### De volta para o futuro
Se isso for feito direito, conforme o tempo passa alguns elementos velhos 'indesejados' irão ficar obsoletos (eu já observei isso acontencedo) e daí basta eliminá-los. O projeto pode até nunca chegar naquele mundo ideal, mas eu espero que entre três e seis meses eu conseguirei ter um projeto muito mais organizado e bem estruturado.
