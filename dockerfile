# Usa a imagem do Node.js para build
FROM node:18 AS build

WORKDIR /app

# Instala o Git
RUN apt-get update && apt-get install -y git

RUN npm install -g npm@9

# Clona o repositório (substitua pelo link correto)
RUN git clone https://github.com/luanftti/front-api-pessoa.git

# Instala as dependências e compila a aplicação
WORKDIR /app/front-api-pessoa
RUN npm install && npm run build --prod --no-cache --verbose

# Usa o servidor Nginx para servir a aplicação
FROM nginx:latest

# Copia os arquivos do build para o Nginx
COPY --from=build /app/dist/fron-api-pessoa /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 4200
