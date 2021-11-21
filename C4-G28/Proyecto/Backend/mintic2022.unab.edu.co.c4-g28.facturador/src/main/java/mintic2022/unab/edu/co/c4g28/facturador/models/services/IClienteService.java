package mintic2022.unab.edu.co.c4g28.facturador.models.services;

import java.util.List;

import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Cliente;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Region;

public interface IClienteService {
	
	public List<Cliente> findAll();
	
	public Cliente findById(Long id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Cliente cliente);
	
	public List<Region> findAllRegiones();

}
