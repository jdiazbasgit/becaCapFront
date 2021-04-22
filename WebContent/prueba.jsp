<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%!int contador=0;%>
<%String texto=request.getParameter("texto"); %>
<%session.setAttribute("ejemplo", "Emmanuel"); %>
<h1 style="color:#ff0000">Has escrito: <%=texto.toUpperCase()%> y tiene <%=texto.length()%> letras</h1>
 en sintaxis reducida<br><br>
 <%contador=contador+1; %>
 <h1>Eres el visitante numero: <%=contador%></h1>
 
 
 <%
 if(session.getAttribute("visitas")==null) {
		session.setAttribute("visitas", 1);
		
	}
	else {
		
		int visitas1=(int) session.getAttribute("visitas");
		session.setAttribute("visitas", visitas1+1);
	}
 %>
   
 <h1>Tu has venido a verme <%=session.getAttribute("visitas")%> veces</h1>
</html>




