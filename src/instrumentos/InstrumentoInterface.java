package instrumentos;

import excepciones.SinSonidoException;

public interface InstrumentoInterface {
	
	public String sonar() throws SinSonidoException;

}
