package streams;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

public class leerTexxto {

	public static void main(String[] args) {

		try (FileInputStream fileInputStream = new FileInputStream("curso.txt");
				InputStreamReader reader = new InputStreamReader(fileInputStream);
				BufferedReader bufferedReader = new BufferedReader(reader)) {
			while (bufferedReader.ready())
				System.out.println(bufferedReader.readLine());

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
