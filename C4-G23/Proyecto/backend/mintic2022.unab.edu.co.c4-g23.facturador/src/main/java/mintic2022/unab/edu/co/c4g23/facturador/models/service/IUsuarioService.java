package mintic2022.unab.edu.co.c4g23.facturador.models.service;

import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Usuario;

public interface IUsuarioService {
	
	public Usuario findByUsername(String username);
	

}
