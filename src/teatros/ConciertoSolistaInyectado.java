package teatros;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import excepciones.SinSonidoException;
import musicos.MusicoInterface;
import musicos.Solista;

public class ConciertoSolistaInyectado {
	
	public static void main(String[] args) {
		ApplicationContext contexto= new ClassPathXmlApplicationContext("spring.xml");
		MusicoInterface solista=(MusicoInterface) contexto.getBean("solista");
		try {
			solista.tocar();
		} catch (SinSonidoException e) {
			System.out.println("señores se ha roto el instrumento, se ha terminado el cicierto");
		}

	}
}
