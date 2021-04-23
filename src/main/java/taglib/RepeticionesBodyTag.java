package taglib;

import java.io.IOException;

import javax.print.attribute.standard.Severity;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class RepeticionesBodyTag extends BodyTagSupport {
	
	private String texto;
	
	private int cantidad;
	
	private int vuelta;
	
	

	@Override
	public int doStartTag() throws JspException {
		
		setVuelta(1);
		return EVAL_BODY_BUFFERED;
	}

	

	@Override
	public int doAfterBody() throws JspException {
		if(getVuelta()<=getCantidad()) {
			
				//pageContext.getOut().println(getTexto());
				setVuelta(getVuelta()+1);
				return EVAL_BODY_AGAIN;
			
		}
		return SKIP_BODY;
	}
	
	@Override
	public int doEndTag() throws JspException {
		try {
			getBodyContent().writeOut(getPreviousOut());
			return EVAL_PAGE;
		} catch (IOException e) {
			e.printStackTrace();
			return SKIP_PAGE;
		}
	}



	public String getTexto() {
		return texto;
	}



	public void setTexto(String texto) {
		this.texto = texto;
	}



	public int getCantidad() {
		return cantidad;
	}



	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}



	public int getVuelta() {
		return vuelta;
	}



	public void setVuelta(int vuelta) {
		this.vuelta = vuelta;
	}

}
