# ✅ CHECKLIST PADRÃO — FRONT-END + API

## 🧩 Planejamento e Estrutura
- [ ] Definir escopo e funcionalidades principais  
- [ ] Escolher stack tecnológica (React, Node, PostgreSQL...)  
- [ ] Criar repositórios Git e `.gitignore`  

## 💻 Backend / API
- [ ] Iniciar projeto e instalar dependências principais  
- [ ] Configurar servidor base (`app.js` ou `server.ts`)  
- [ ] Criar estrutura de pastas padrão (routes, controllers, services...)  
src/
  ├─ routes/
  ├─ controllers/
  ├─ services/
  ├─ entities/ (ou models/)
  ├─ middlewares/
  ├─ utils/
- [ ] Rodar comandos de instalação padrão
npm install bcryptjs express dotenv cors multer jsonwebtoken express-validator nodemon
npm install --save-dev @types/node

- [ ] Adicionar comando para rodar com no servejs dentro de script  "server": "nodemon app.js"
- [ ] Se usar o typescript configurar o typescript no node
- [ ] Configurar o app.js ou .ts
- [ ] Configurar banco de dados (TypeORM, Prisma...)  
- [ ] Criar models/entities e migrations  
- [ ] Implementar autenticação (JWT)  
- [ ] Implementar rotas CRUD e validações de dados  
- [ ] Tratar erros e implementar middleware global  

## Arquivo app.js ou .ts

## 🧾 Checklist – Adicionar TypeScript ao projeto Node.js

- [ ] Instalar dependências principais: npm install typescript ts-node @types/node @types/express --save-dev
- [ ] Criar o arquivo de configuração do TypeScript: npx tsc --init
- [ ] No tsconfig.json, ajustar as opções principais: {
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}



## 🎨 Frontend
- [ ] Criar projeto (Vite, React, Next.js...)  
- [ ] Configurar ESLint, Prettier e `.env`  
- [ ] Criar estrutura de pastas padrão (components, pages...)  
- [ ] Implementar integração com API (Axios ou Fetch)  
- [ ] Criar hooks e contextos personalizados  
- [ ] Desenvolver layout base e componentes reutilizáveis  
- [ ] Garantir responsividade e UX  
- [ ] Realizar build e deploy (Vercel, Netlify...)  

## 📦 Testes e Entrega
- [ ] Testar fluxo completo entre front e API  
- [ ] Validar todas as rotas e respostas HTTP  
- [ ] Revisar responsividade e UX final  
- [ ] Documentar projeto e instruções de uso  
