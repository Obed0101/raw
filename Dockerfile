# Imagen base oficial con Node
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Crear directorio de datos
RUN mkdir -p /app/data

# Copia los archivos del proyecto (excepto lo que esté en .dockerignore)
COPY . .

# Fuerza la instalación de dependencias
RUN npm install --force

# Compila la aplicación
RUN npm run build

# Expón el puerto (ajústalo si usas otro)
EXPOSE 5000

# Definir el volumen de datos
VOLUME ["/app/data"]

# Establecer variable de entorno para ubicar el directorio de datos
ENV DATA_DIR=/app/data

# Comando por defecto para arrancar tu app
CMD ["npm", "run", "preview"]