<%@page language="java" import="java.sql.*" %>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Consulta JSP</title>
        <style>
            tr:nth-child(even){
                background-color: lightgray ;
            }
            tr:hover{
                background-color: #F5F5DC ;
            }
        </style>
    </head>
    <body>
        <%
            //variaveis para acessar o banco de dados
            String banco    = "veterinaria";
            String endereco = "jdbc:mysql://localhost:3306/" + banco ;
            String usuario  = "root" ;
            String senha    = "";

            //variavel para o Driver
            String driver = "com.mysql.jdbc.Driver" ;
    
            //Carregar o driver na memória
            Class.forName( driver ) ;
    
            //Cria a variavel para conectar com o banco de dados
            Connection conexao ;
    
            //Abrir a conexao com o banco de dados
            conexao = DriverManager.getConnection( endereco, usuario, senha ) ;
    
            String name = request.getParameter("name");
            String subject = request.getParameter("subject");
            String details = request.getParameter("details");
    
            String sql = "INSERT INTO Contatos(nome, assunto, detalhes) VALUES('"+name+"', '"+subject+"', '"+details+"')" ;
    
            //Cria o statement para executar o comando do banco
            PreparedStatement stm = conexao.prepareStatement(sql) ;
    
            int result = stm.executeUpdate() ;
            out.print("Rows affected: " + result);
            response.getWriter().write("Contato inserido com sucesso!");
        %>
    </body>
</html>