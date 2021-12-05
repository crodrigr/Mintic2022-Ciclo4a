package mintic2022.unab.edu.co.c4g23.facturador.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Cliente;
import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Region;

public interface IClienteDao extends CrudRepository<Cliente,Long> {
	
	@Query("from Region")
	public List<Region> findAllRegiones();
   
}
