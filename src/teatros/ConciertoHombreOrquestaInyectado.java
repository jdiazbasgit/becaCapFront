package teatros;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import excepciones.SinSonidoException;
import instrumentos.Instrumento;
import musicos.HombreOrquesta;
import musicos.MusicoInterface;

public class ConciertoHombreOrquestaInyectado {

	public static void main(String[] args) {
		ApplicationContext contexto= new ClassPathXmlApplicationContext("spring.xml");
		MusicoInterface hombreOrquesta= (MusicoInterface) contexto.getBean("hombreOrquesta");
		
		
		try {
			hombreOrquesta.tocar();
		} catch (SinSonidoException e) {
			System.out.println("señores se ha roto el instrumento, se ha terminado el cicierto");
		}

	}

}
