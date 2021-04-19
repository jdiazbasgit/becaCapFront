package teatros;

import excepciones.SinSonidoException;
import instrumentos.Instrumento;
import musicos.Solista;

public class ConciertoSolista {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Instrumento tambor= new Instrumento();
		tambor.setSonido("pom, pom, pom");
		Solista solista= new Solista();
		solista.setInstrumento(tambor);
		try {
			solista.tocar();
		} catch (SinSonidoException e) {
			System.out.println("señores se ha roto el instrumento, se ha terminado el cicierto");
		}

	}

}
