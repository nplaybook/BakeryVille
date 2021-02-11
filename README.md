# BakeryVille

I create this mini project to practice what I've learnt about express and ORM. Here's my step-by-step how I get this mini project done:

1. Firstly, we need to design our database based on our project's scope.
2. From our database design, we can start create object table using `sequelize` instead of directly creating those tables on top of SQL script within SQL editor such as pgAdmin. We will save the script in **models** folder and for each table we will have its dedicated js file.
3. Once we are done with the table, we will start creating the end-point. On this project, I will create several end-points for CRUD operation which are:
   - Create shop
   - Create employee
   - Edit employee
   - Create position
