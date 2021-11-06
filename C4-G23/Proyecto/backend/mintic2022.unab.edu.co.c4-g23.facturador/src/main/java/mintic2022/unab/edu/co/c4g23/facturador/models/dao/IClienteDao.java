package mintic2022.unab.edu.co.c4g23.facturador.models.dao;

import org.springframework.data.repository.CrudRepository;

import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente,Long> {

}
