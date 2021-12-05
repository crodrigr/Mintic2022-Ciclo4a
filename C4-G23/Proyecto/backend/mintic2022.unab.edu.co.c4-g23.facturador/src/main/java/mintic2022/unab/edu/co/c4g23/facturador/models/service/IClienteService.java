package mintic2022.unab.edu.co.c4g23.facturador.models.service;

import java.util.List;

import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Cliente;
import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Region;

public interface IClienteService {
	
	public List<Cliente> findAll();
	
	public Cliente findById(Long Id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Cliente cliente);
	
	public List<Region> findAllRegiones();
	

}
