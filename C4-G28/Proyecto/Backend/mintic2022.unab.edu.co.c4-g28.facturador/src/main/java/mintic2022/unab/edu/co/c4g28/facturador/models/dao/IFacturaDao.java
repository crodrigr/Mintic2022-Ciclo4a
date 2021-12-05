package mintic2022.unab.edu.co.c4g28.facturador.models.dao;

import org.springframework.data.repository.CrudRepository;

import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Factura;

public interface IFacturaDao extends CrudRepository<Factura, Long> {

}
