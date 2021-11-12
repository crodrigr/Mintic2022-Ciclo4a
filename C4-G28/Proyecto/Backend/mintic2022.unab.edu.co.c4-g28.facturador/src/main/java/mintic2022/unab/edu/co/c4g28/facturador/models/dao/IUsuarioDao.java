package mintic2022.unab.edu.co.c4g28.facturador.models.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario,Long> {
	
	public Usuario findByUsername(String username);
	
	@Query("select u from Usuario u where u.username")	
	public Usuario findByUsername2(String username);

}
