FROM node

WORKDIR /app

COPY . .

CMD ["node","two-pointer/arraySum.js"]