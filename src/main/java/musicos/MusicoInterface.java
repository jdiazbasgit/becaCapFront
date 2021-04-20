package musicos;

import excepciones.SinSonidoException;

public interface MusicoInterface {

	public void tocar() throws SinSonidoException;
	
}
