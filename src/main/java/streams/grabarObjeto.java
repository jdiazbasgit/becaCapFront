package streams;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class grabarObjeto {

	public static void main(String[] args) {
		
		try(FileOutputStream outputStream= new FileOutputStream("pepe.agenda");
				ObjectOutputStream objectOutputStream= new ObjectOutputStream(outputStream);
				) {
			Agenda pepe = new Agenda();
			pepe.setNombre("pepe garcia");
			pepe.setTelefono("6878888988");
			pepe.setDireccion("mi casa");
			objectOutputStream.writeObject(pepe);
			objectOutputStream.flush();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
