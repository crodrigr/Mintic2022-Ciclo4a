package mintic2022.unab.edu.co.c4g23.facturador.models.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="regiones")
public class Region implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private Long id;
	
	private String nombre;
	
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}



	public String getNombre() {
		return nombre;
	}



	public void setNombre(String nombre) {
		this.nombre = nombre;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

}
