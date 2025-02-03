# Etapa 1: Construção da aplicação Angular
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala dependências do sistema necessárias para o Git
RUN apk add --no-cache git

# Clona o repositório (substitua pelo link correto)
RUN git clone https://github.com/luanftti/front-api-pessoa.git

# Define o diretório do projeto Angular
WORKDIR /app/front-api-pessoa

# Instala as dependências e faz o build
RUN npm install && npm run build --verbose

# Etapa 2: Servindo a aplicação com Nginx
FROM nginx:latest

# Copia os arquivos do build Angular para o diretório de publicação do Nginx
COPY --from=build /app/front-api-pessoa/dist/front-pessoa /usr/share/nginx/html

# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta correta (Nginx usa a 80)
EXPOSE 80 4201


# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
