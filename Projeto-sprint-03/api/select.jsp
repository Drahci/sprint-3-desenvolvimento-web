<%@page language="java" import="java.sql.*" %>


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

    String sql = "SELECT * FROM Contatos ORDER BY id DESC" ;

    //Cria o statement para executar o comando do banco
    PreparedStatement stm = conexao.prepareStatement(sql) ;

    ResultSet result = stm.executeQuery() ;

    while(result.next()){
        String name = result.getString("nome");
        String subject = result.getString("assunto");
        String details = result.getString("detalhes");
        out.print("<tr> <td class='name'>" + name + "</td> <td class='subject'>" + subject + "</td> <td class='details'>" + details + "</td> </tr>");
    }
%>