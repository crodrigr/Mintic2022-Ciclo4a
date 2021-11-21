package mintic2022.unab.edu.co.c4g28.facturador.models.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mintic2022.unab.edu.co.c4g28.facturador.models.dao.IClienteDao;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Cliente;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Region;

@Service
public class ClienteServiceImpl implements IClienteService {

	@Autowired
	private IClienteDao clienteDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<Cliente> findAll() {		
		return (List<Cliente>) clienteDao.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public Cliente findById(Long id) {
		return  clienteDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Cliente save(Cliente cliente) {
	   return clienteDao.save(cliente);
		
	}

	@Override
	@Transactional
	public void delete(Cliente cliente) {
		clienteDao.delete(cliente);
		
	}
	
	@Override
	@Transactional(readOnly = true)
	public List<Region> findAllRegiones() {
		return clienteDao.findAllRegiones();
	}

}
