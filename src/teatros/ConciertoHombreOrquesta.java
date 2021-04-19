package teatros;

import java.util.ArrayList;

import excepciones.SinSonidoException;
import instrumentos.Instrumento;
import musicos.HombreOrquesta;

public class ConciertoHombreOrquesta {

	
	public static void main(String[] args) {
		
		Instrumento tambor= new Instrumento();
		Instrumento guitarra= new Instrumento();
		Instrumento trompeta= new Instrumento();
		tambor.setSonido("pom, pom,pom");
		guitarra.setSonido("tlan, tlan, tlan");
		trompeta.setSonido("tuuu, tuuu,tuuu");
		
		HombreOrquesta hombreOrquesta= new HombreOrquesta();
		hombreOrquesta.setInstrumentos(new ArrayList<Instrumento>());
		hombreOrquesta.getInstrumentos().add(trompeta);
		hombreOrquesta.getInstrumentos().add(tambor);
		hombreOrquesta.getInstrumentos().add(guitarra);
		try {
			hombreOrquesta.tocar();
		} catch (SinSonidoException e) {
			System.out.println("señores se ha roto el instrumento, se ha terminado el cicierto");
		}
		
	}
}
