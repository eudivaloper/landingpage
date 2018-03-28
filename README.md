# landingpage
Hackers - Assignment #1!

Codar 1 landing-page usando:
- Javascript;
- HTML;
- CSS.

Sua landing-page deve ser/ter:
- "One page concept";
- Responsiva;
- 3 blocos de conteúdo;
- 1 bloco de conversão para captura dos campos: nome completo, e-mail e empresa;
- Persistência de dados;
- Validação automática de nome completo, e-mail e campos nulos/em branco;

Observações:
- O código deverá estar num repositório (SCM) público único;
- O código deverá estar versionado (utilize Git);
- Para "upload" do código no servidor, NÃO utilize FTP;
- No README do seu repositório, detalhe como realizou o "upload" do código para o servidor;
- Não utilize frameworks Js e css (JQuery, Bootstrap, etc.);
- Não é necessário comprar domínio;
- Cada participante deve ter sua entrega individual.

Upload do projeto

1 Crie um novo repositório no GitHub. Para evitar erros, não inicialize o novo repositório com README , licença ou gitignorearquivos. Você pode adicionar esses arquivos após o envio do seu projeto para o GitHub.

2 Abra o Git Bash .

3 Altere o diretório de trabalho atual para o seu projeto local.

4 Inicialize o diretório local como um repositório Git.
$ git init
# Adiciona o arquivo ao seu repositório local e o prepara para commit. Para desassociar um arquivo, use 'git reset HEAD YOUR-FILE '.

5 Adicione os arquivos em seu novo repositório local. Isso os prepara para o primeiro commit.
$ git add. 
# Adiciona os arquivos no repositório local e os organiza para consolidação. Para desassociar um arquivo, use 'git reset HEAD YOUR-FILE '.
Confirme os arquivos que você colocou no seu repositório local.

6 Confirme os arquivos que você colocou no seu repositório local.
$ git commit -m "Primeiro commit" 
# Confirma as mudanças rastreadas e as prepara para serem enviadas para um repositório remoto. Para remover este commit e modificar o arquivo, use 'git reset --soft HEAD ~ 1' e confirme e adicione o arquivo novamente.

7 No topo da página Quick Setup do seu repositório GitHub, clique em  para copiar o URL do repositório remoto.

8 No prompt de comando, adicione a URL para o repositório remoto onde seu repositório local será enviado.
$ git remote add origin URL do repositório remoto
# Define o novo remoto 
$ git remoto -v 
# Verifica o novo URL remoto

9 Empurre as alterações no seu repositório local para o GitHub.
$ git push origin master 
# Envia as alterações no seu repositório local até o repositório remoto especificado como origem
