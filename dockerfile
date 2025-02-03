# Usa a imagem do Node.js para build
FROM node:latest AS build

WORKDIR /app

# Instala o Git
RUN apt-get update && apt-get install -y git

# Clona o repositório (substitua pelo link correto)
RUN git clone https://github.com/luanftti/front-api-pessoa.git


# Instala as dependências e compila a aplicação
WORKDIR /app/front-api-pessoa
RUN npm install && npm run build --production --no-cache --verbose

# Usa o servidor Nginx para servir a aplicação
FROM nginx:latest

# Copia os arquivos do build para o Nginx
COPY --from=build /app/front-api-pessoa/dist/front-pessoa /usr/share/nginx/html

# Expõe a porta
EXPOSE 4201
