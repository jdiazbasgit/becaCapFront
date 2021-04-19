package musicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import anotaciones.Vigilado;
import excepciones.SinSonidoException;
import instrumentos.Instrumento;

@Component
public class HombreOrquesta extends Musico {

	@Vigilado
	@Override
	public void tocar() throws SinSonidoException {
		for (Instrumento instrumento : getInstrumentos()) {
			System.out.println(instrumento.sonar());
		}

	}
	
	
	
	@Override
	@Autowired
	@Qualifier("tocameAMi")
	public void setInstrumentos(List<Instrumento> instrumentos) {
		// TODO Auto-generated method stub
		super.setInstrumentos(instrumentos);
	}

}
