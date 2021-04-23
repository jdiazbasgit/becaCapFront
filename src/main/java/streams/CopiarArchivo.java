package streams;

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class CopiarArchivo {

	public static void main(String[] args) {

		try(FileInputStream fileInputStream= new FileInputStream("camion.jpeg");
				FileOutputStream fileOutputStream= new FileOutputStream("copia de camion.jpg")) {
			
			byte[] b= new byte[fileInputStream.available()];
			fileInputStream.read(b);
			fileOutputStream.write(b);
			
			/*
			 * for (int i = 10; i < b.length; i++) { fileOutputStream.write(b[i]);
			 * 
			 * }
			 */
			fileOutputStream.flush();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
