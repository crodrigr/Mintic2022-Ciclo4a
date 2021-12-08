# Paso a paso para hacer deploy

## 1. Backend

1.1  Crear una cuenta en en heroku y crear un proyecto

  ![image](https://user-images.githubusercontent.com/31961588/145276700-c7eea050-795b-44e6-bb1e-b2f968b9de8d.png)
  
1.2  Crear una base de datos de postres para copiar las credenciales en el 

   ![image](https://user-images.githubusercontent.com/31961588/145276977-f639e851-0983-45c4-bbc5-abe96e6264a9.png)
   
1.3  Configurar el proyecto para postgrest

   1. Configura el pom.xml con el drive de postgres.
    
      ![image](https://user-images.githubusercontent.com/31961588/145278002-e17bdb76-370e-46a7-9f07-dfe2989687ae.png)
      
   2. Configurar el properties con las credenciales de la base de datos
  
      ![image](https://user-images.githubusercontent.com/31961588/145277922-a4a85136-13a5-4b72-a8b9-06d0da4fc541.png)

1.4  Cambiar la versión del compilador de java a 1.8 por que es la versión con la que correo java en Heroku

    ![image](https://user-images.githubusercontent.com/31961588/145278586-140fe8cd-f7ec-4765-9a74-f2a6b3595a71.png)
   
1.5. Descargar el CLI de Heroku desde la pagina

     ![image](https://user-images.githubusercontent.com/31961588/145278752-69ab0c0b-8a04-4ed8-8ecf-7a00214236a2.png)
     
1.6. Con del cmd ir al proyecto del backend en su local

![image](https://user-images.githubusercontent.com/31961588/145278826-137b2a91-d51f-4db2-9c53-cc9f8df2b737.png)

1.7. Hacer login 

```text
heroku login
```
1.8 Generar el jar del proyecto en el directorio target




```text
.\mvnw.cmd clean package
```
![image](https://user-images.githubusercontent.com/31961588/145279288-eca5a61a-48ed-4cdd-890e-eeb1a8e7aef7.png)
1.9 Hacer el git init

```text
git init
```
1.10 Relacionar le proyecto local con el de heroku
```text
heroku git:remote -a nombre-proyecto-heroku
```
1.11 Instalar el plugins de java en el proyecto de heroku. Esto se hace solo una vez
```text
heroku plugins:install java
```
1.12 Hacer el deploy
```text
heroku jar:deploy .\target\nombre-proyect.jar
```

1.13. Rutina para actulizar cambios del proyecto en heroku
Recuerde que debe estár logeado a heroku y tiene que haber relacionado el proyecto local con el de heroku
```text
.\mvnw.cmd clean package
```
```text
heroku jar:deploy .\target\nombre-proyect.jar
```

## 2. Deploy del front en firebase

2.1 Configurar tanto el en enviroment.ts enviroment.ts.prod la url del proyecto del back
2.2 Generar el proyecto la versión dist
```text
ng build  --prod
```
2.3 En cmd ingrese al proyecto 
![image](https://user-images.githubusercontent.com/31961588/145280869-fc19ce7c-b8f8-4edf-8d76-02b3ed750a25.png)
2.4 Cree una cuenta en firebase.
2.5 Haga la instalción del CLI firebase en forma global
```text
npm install -g firebase-tools
```
2.6 Crea una carpeta public dentro del dist y copie todo el proyecto generado en public

![image](https://user-images.githubusercontent.com/31961588/145281548-1abf7627-e97d-48a6-bf29-8be983010864.png)
2.7 Haga login a firebase
```text
firebase login
```
2.8 Ingrese al directorio dist
2.9 Ejecute el comando 
```text
firebase init
```
![image](https://user-images.githubusercontent.com/31961588/145281891-37440a78-32e3-4932-a069-3df1881b2665.png)


![image](https://user-images.githubusercontent.com/31961588/145281914-8e2e950f-3171-48d9-87ce-88fcc8d7bd04.png)


![image](https://user-images.githubusercontent.com/31961588/145281966-01cbb8af-b6bd-4cb5-826d-bcdeb1100a6e.png)


![image](https://user-images.githubusercontent.com/31961588/145281999-122b568a-4fb6-4724-b776-7130173836bb.png)


![image](https://user-images.githubusercontent.com/31961588/145282027-5115e7a0-3ce0-40e0-8f51-74fb672b84ea.png)


![image](https://user-images.githubusercontent.com/31961588/145282061-a29d292a-d6ce-4736-8bfa-03b6336f06dc.png)


![image](https://user-images.githubusercontent.com/31961588/145282096-bbfd3e45-fffd-499e-bb0e-946ae8ac7e64.png)


![image](https://user-images.githubusercontent.com/31961588/145282152-70f1d5c7-6af4-4e7d-83d3-4ee9de7e3ca4.png)


![image](https://user-images.githubusercontent.com/31961588/145282209-0f866761-583e-4e0d-9a58-20ee671752cf.png)


![image](https://user-images.githubusercontent.com/31961588/145282347-771ab2b6-c2ab-4ef5-90d6-ba4c54c843c9.png)


![image](https://user-images.githubusercontent.com/31961588/145282401-5d6f9bc5-883e-45d4-ad2e-9d1814bc3f9e.png)

# 3. Configurar en el backend el cors y hacer nuevamente el deploy


![image](https://user-images.githubusercontent.com/31961588/145282533-fd52f6f6-ce7c-4cff-8a48-3b2af06afa2a.png)


![image](https://user-images.githubusercontent.com/31961588/145282615-66aa6694-7e17-4a48-9e9f-f83af565abb5.png)


















