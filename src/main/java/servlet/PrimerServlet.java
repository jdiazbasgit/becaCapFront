package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class PrimerServlet
 */
@SuppressWarnings("serial")
public class PrimerServlet extends HttpServlet {
       
	private int contador;
	
	private int maximo;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PrimerServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setContador(getContador()+1);
		setMaximo(getMaximo()+1);
		
		String texto=request.getParameter("texto");
		
		String salida="<h1> Has escrito "+texto.toUpperCase()+" y tiene "+texto.length()+" letras</h1><br>";
		
		String visitas="<h1>Eres el visitante numero: "+getContador()+"</h1>";
		response.getWriter().print(salida);	
		response.getWriter().print(visitas);
		
		
		HttpSession sesion= request.getSession(true);
		
		if(sesion.getAttribute("visitas")==null) {
			sesion.setAttribute("visitas", 1);
			
		}
		else {
			
			int visitas1=(int) sesion.getAttribute("visitas");
			sesion.setAttribute("visitas", visitas1+1);
		}
		
		response.getWriter().println("<h1>tu has venido a verme "+ sesion.getAttribute("visitas")+ "</h1>");
		
		//sesion.invalidate();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	public int getContador() {
		return contador;
	}

	public void setContador(int contador) {
		this.contador = contador;
	}

	public int getMaximo() {
		return maximo;
	}

	public void setMaximo(int maximo) {
		this.maximo = maximo;
	}

}
