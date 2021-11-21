package mintic2022.unab.edu.co.c4g28.facturador.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Cliente;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Region;

public interface IClienteDao extends CrudRepository<Cliente,Long> {
	
	@Query("from Region")
	public List<Region> findAllRegiones();

}
