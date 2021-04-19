package instrumentos;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import anotaciones.Vigilado;

@Component("miGuitarra")
@Qualifier("tocameAMi")
@Scope(value = "prototype")

public class Guitarra extends Instrumento {

	
	
	@Override
	@Value("nada")
	public void setSonido(String sonido) {
	
		// TODO Auto-generated method stub
		super.setSonido(sonido);
	}
}
