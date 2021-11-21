package mintic2022.unab.edu.co.c4g28.facturador.models.services;

import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Cliente;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Usuario;

public interface IUsuarioService {
	
	public Usuario findByUsername(String username);
	
	public void delete(Usuario Usuario);

}
