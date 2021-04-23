package streams;

import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class leerObjeto {

	public static void main(String[] args) {

		try (FileInputStream inputStream= new FileInputStream("pepe.agenda");
				ObjectInputStream objectInputStream= new ObjectInputStream(inputStream);
				){
			Agenda pepe=(Agenda) objectInputStream.readObject();
			System.out.println("nombre:"+pepe.getNombre());
			System.out.println("telefono:"+pepe.getTelefono());
			System.out.println("direccion:"+pepe.getDireccion());

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
