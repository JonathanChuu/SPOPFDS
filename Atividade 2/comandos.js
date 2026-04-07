const container = document.querySelector('.container');

const comandos = `comando 1
ls
comando utilizado para ver qual o conteúdo dentro de uma pasta

2
man + comando
mostra para que serve determinado comando

3
clear ou "ctrl + l"
serve para limpar o terminar

4
mkdir
cria diretórios sendo
mkdir + nome do diretório

5 
cd 
navegar dentro de uma pasta sendo
cd + nome da pasta

6 
pwd
imprimi o diretório de trabalho, ou seja, mostra o caminho
completo do que você está dentro

7
whoami
diz o usuário que você está

8
>>
pega o resultado de um  comando e joga em um arquivo
whoami >> dialinux.txt
nesse ex, pega a informação que o comando (whoami) da e joga no arquivo (diaolinux.txt)

9
>
Como criar pasta com nome composto?
caso vc use o comando dessa forma > mkdir pasta de trabalho
você estará criando 3 pastas: (pasta), (de) e (trabalho) 
mas fazendo dessa forma > mkdir "pasta de trabalho"
você cria apenas uma pasta: pasta de trabalho

10
touch
cria arquivos

11
nano
é um editor de texto, tal qual um bloco de notas

12
cat
serve para contatenar arquivos, e é muito usada para ler arquivos pequenos

13
mv
serve para modificar o nome dos arquivos
mv nomearquivo novonomearquivo


14
cp
copia uma arquivo para outra pasta
cp nomearquivo caminho para outra pasta

15
find
encontra arquivos dentro de diretórios
find . -name nomearquivo
usado com esse ".", ele procura a partir do diretório em que você esta e em todos
os outros a partir dele

16
head e tail
head é ultizada para mostrar as primeiras linhas de um arquivo
tail é utilizada para mostrar a parte final de um arquivo

17
less
mostra a parte inicial do arquivo, e vai carregando o restando conforme você segue descendo

18
rm e rmdir
rm remove um arquivo
rmdir remove um diretório
mas não pode remover diretório que contenham arquivos dentro

rm possui o parâmetro rf, que se usado apaga o diretorio e tudo dentro dele

19
hostname
usado para saber o nome da sua maquina
alem de mostrar seu ip

20 
ip
ao usá-lo mostra alguns complementos que voce precisa por
se quiser ver todas as informações de ip utilize
ip a

21 
grep
é um programa de filtragem
no ex ip a | grep inet
o resultado do "ip a" sera filtrado para so as informações coom "inet"

22
ping
ping + site
revela em quantos ms o site responde

23
free-h e free-m
servem para mostrar um resumo da memória ram (total, usada, livre...)
free-h mostra valores mais simples de se entender
free-m mostra valores em megabites

24
top
traz varias informações do sistema
tal qual cpu

25
htop
mesma função do top, mas com entendimento mais facil

26
ps
mostra os processos que estão rodando na sua instância do terminal
possui diversos parametros para mostrar mais processos

27
kill
gerencia processos
podendo ser usado para fechar processos

28
df -h
informações do armazenamento livre do computador

29
ncdu
usada para analisar o uso de espaço em disco de forma interativa
quais pastas/arquivos estão ocupando mais espaço e
permite navegar como se fosse um explorador de arquivos

30
uname
traz informações do kernel que voce esta usando

31
lscpu
traz informações a respeito do seu processador

32
history
historico dos comandos usados
`

const blocos = comandos.trim().split(/\n\s*\n/);

blocos.forEach(bloco => {
  const linhas = bloco.split('\n');
  const numero = linhas[0].replace('comando', '').trim();
  const comando = linhas[1];
  const descricao = linhas.slice(2).join('<br>');

  if (comando) {
    const card = `
    <div class = "command-card">
      <span class = "num"> Item #${numero}</span>
      <div class="cmd-name">${comando}</div>
      <div class="description">${descricao}</div>
    </div>
    `;
    container.innerHTML += card;
  }
})

