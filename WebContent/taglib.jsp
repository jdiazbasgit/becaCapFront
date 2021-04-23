<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@taglib prefix="curso" uri="/WEB-INF/tld/curso.tld"%>

<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
.gris {
	background-color: #cacaca
}

.rosa {
	background-color: #fabada
}
</style>
</head>
<body>
	<ul>
		<curso:repeticiones texto="texto1" cantidad="5">
			<li><curso:verTexto /></li>
		</curso:repeticiones>
	</ul>


	<c:set var="estilo" value="gris" />

	<c:set var="fila" value="0" />


	<table border="1">
		<curso:repeticiones texto="texto2" cantidad="5">
			<c:choose>
				<c:when test="${fila mod 2 eq 0}">
			${estilo="rosa" }
			</c:when>
				<c:otherwise>
			${estilo="gris" }
			</c:otherwise>

			</c:choose>

			<c:set var="fila" value="${fila +1 }"></c:set>

			<tr class="${estilo }">
				<td><curso:verTexto /></td>
			</tr>
		</curso:repeticiones>
	</table>
</body>
</html>




