# STEP 0

install typescript
```
npm i -g typescript
```

initial project

```
npm init -y
```

install fastify

```
npm i fastify -S
```

install typings
```
npm i -D typescript @types/node
```

initial typescript project
```
tsc --init 
```

create `src` folder

create `typings` folder

edit `tsconfig.json`

create `.gitignore`

create `server.ts`

edit `pacakge.json` for start `nodemone` with command `npm start`

start server with command `npm start`

open `http://127.0.0.1:8080`

# Step 1

## MVC Structure

- Create `controllers` folder
- Create `models` folder
- Create `router.ts` file
- Create `app.ts` for main configuration file
- Change `server.ts` for controllers
- Create routes 

# Step 2 Basic of Routing (CRUD routing)

- Create `controllers/demo.ts`
- Update `route.ts`
- add `fastify-cors`
- add `fastify-formbody`

- Create `POST` route
- Create `GET` route
- Create `PUT` route
- Create `DELETE` route

# Step 3 Database settings
- install `knexjs`
```
npm install fastify-knexjs knex mysql2 --save
```
- configure fastify-knexjs plugin
- Create database/table
- Test connection
  - Create test model
  - Create test route
  - Create typings `typings/fastify.d.ts`

  # Step 4 CREATE
  - Create user
    - Create `models/user.ts`
    - Create `controllers/users.ts`
    - Update `route.ts`
  
  # Step 5 READ
  - Update `models/user.ts`
  - Update `controllers/users.ts`
    - read all
    - query

  # Step 6 UPDATE (Update info/password)
  - Update `models/user.ts`
  - Update `controllers/users.ts`

  # Step 7 DELETE
    - Update `models/user.ts`
    - Update `controllers/users.ts`

  # Step 8 JWT and Login
    - Install JWT package
    
    ```
    npm i fastify-jwt jsonwebtoken --save 
    npm i @types/jsonwebtoken --save-dev
    ```
    
    - Create plugin folder/file
    - Configure JWT
    - Testing JWT (`controllers/index.ts`)
    - Enable JWT protect route
      - Sign
      - Access protected route
      - Verify at `https://www.jwt.io`
    - Login
      - Create login model (`models/login.ts`)
      - Create login route (`controllers/login.ts`)
      - Access protected route (`controllers/users.ts`)
      - Verify at `https://www.jwt.io`