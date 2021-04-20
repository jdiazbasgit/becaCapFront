package musicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import anotaciones.Vigilado;
import excepciones.SinSonidoException;
import instrumentos.Instrumento;

@Component
public class Solista extends Musico {

	@Override
	@Vigilado
	public void tocar() throws SinSonidoException {
		
		System.out.println(getInstrumento().sonar());

	}
	
	
	@Override
	@Autowired
	@Qualifier("miGuitarra")
	public void setInstrumento(Instrumento instrumento) {
		super.setInstrumento(instrumento);
	}

}
