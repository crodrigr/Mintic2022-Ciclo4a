package mintic2022.unab.edu.co.c4g23.facturador.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Table(name = "clientes")
public class Cliente implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	
	@NotEmpty(message="no puede estar vacio")
    @Size(min=4,max=20, message="el tamaño tiene que estar entre 4 y 20 ")
	@Column(nullable=false)
	private String nombre;
	
	@NotEmpty(message="no puede estar vacio")
	private String apellido;
	
	
    @NotEmpty(message="no puede estar vacio")
    @Email(message="no es una dirección de correo bien formada")
	@Column(nullable=false, unique=true)
	private String email;
	
	private String direccion;
	
	@NotNull(message="no puede estar vacio")
	@Column(name = "create_at")
	@Temporal(TemporalType.DATE)
	private Date createAt;
	
	@NotNull(message="la región no puede ser vacia")
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="region_id")
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	private Region region;

	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}
	
	public String getFullName() {
		return this.nombre+" "+this.apellido;
		
	}
	

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
