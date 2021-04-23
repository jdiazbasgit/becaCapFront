package streams;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Agenda  implements Serializable{
	
	private String nombre;
	
	private  String telefono;
	
	
	private transient String direccion;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

}
