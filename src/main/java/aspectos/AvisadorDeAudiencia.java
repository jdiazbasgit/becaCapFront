package aspectos;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import excepciones.SinSonidoException;
import instrumentos.Instrumento;
import musicos.Musico;
import musicos.Solista;

@Component
@Aspect
public class AvisadorDeAudiencia {

	@Pointcut("execution(@anotaciones.Vigilado * *.*.*(..))")
	public void sujetador() {
			//esta vacio porque solo sujeta el PointCut
	}

	/*
	 * @Before("sujetador()") public void apagarMoviles() { System.out.
	 * println("señores apaguen los moviles que va a empezar el concierto"); }
	 * 
	 * @After("sujetador()") public void encenderMoviles() { System.out.
	 * println("señores pueden encender los moviles que el concierto ha terminado");
	 * }
	 */
	@Around("sujetador()")
	public Object hacerTodo(ProceedingJoinPoint joinPoint) throws SinSonidoException {
		Object salida = null;
		System.out.println("señores apaguen  moviles en around");
		Musico musico = (Musico) joinPoint.getTarget();
		try {
			// before
			salida = joinPoint.proceed();
			// afterReturning
			System.out.println("señores enciendan  moviles en around");
		} catch (Throwable e) {
			System.out.println("se ha roto el instrumento");
			System.out.println("señores voy a areglarlo");
			System.out.println("señores arreglado, continuamos concierto");
			if (musico.getClass().isInstance(new Solista())) {
				musico.getInstrumento().setSonido("tlan tlan " + musico.getInstrumento().getClass());
			} else {
				for (Instrumento instrumento : musico.getInstrumentos()) {
					if (instrumento.getSonido().equals("nada"))
						instrumento.setSonido("tlan tlan " + instrumento.getClass());
				}
			}
			musico.tocar();
		} finally {
			// after

		}
		return salida;
	}

}
