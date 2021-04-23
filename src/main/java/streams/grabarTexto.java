package streams;

import java.io.FileOutputStream;
import java.io.PrintWriter;

public class grabarTexto {

	public static void main(String[] args) {

		try (FileOutputStream fileOutputStream = new FileOutputStream("curso.txt",true);
				PrintWriter printWriter = new PrintWriter(fileOutputStream)) {

			printWriter.println("binvenidos al curso");
			printWriter.flush();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
