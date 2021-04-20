package instrumentos;

import excepciones.SinSonidoException;

public class Instrumento implements InstrumentoInterface {

	private String sonido;
	
	@Override
	public String sonar() throws SinSonidoException {
		if(getSonido().equals("nada"))
			throw new SinSonidoException();
		return getSonido();
	}

	public String getSonido() {
		return sonido;
	}

	public void setSonido(String sonido) {
		this.sonido = sonido;
	}

}
