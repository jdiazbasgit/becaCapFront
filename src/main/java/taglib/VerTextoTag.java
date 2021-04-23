package taglib;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.TagSupport;

public class VerTextoTag extends TagSupport {

	@Override
	public int doStartTag() throws JspException {
		return SKIP_BODY;
	}

	@Override
	public int doEndTag() throws JspException {
		//RepeticionesBodyTag papa= (RepeticionesBodyTag) getParent();
		RepeticionesBodyTag papa=null;
		try {
			papa = (RepeticionesBodyTag) findAncestorWithClass(this, Class.forName("taglib.RepeticionesBodyTag"));
			System.out.println(papa);
		} catch (ClassNotFoundException e1) {
			System.out.println(papa);
			
		}
		
		try {
			pageContext.getOut().println(papa.getVuelta()+" - "+papa.getTexto());
			return EVAL_PAGE;
		} catch (IOException e) {
			e.printStackTrace();
			return SKIP_PAGE;
		}
	}

}
