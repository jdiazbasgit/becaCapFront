<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%//response.sendRedirect("s2.jsp"); %>

<%//getServletContext().getRequestDispatcher("/s2.jsp").forward(request, response); %>

<jsp:forward page="/s1.jsp"/>

</body>
</html>