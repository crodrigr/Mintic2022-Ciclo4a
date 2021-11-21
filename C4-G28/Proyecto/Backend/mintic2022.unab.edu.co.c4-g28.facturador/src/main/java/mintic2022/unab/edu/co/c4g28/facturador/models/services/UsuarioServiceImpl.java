package mintic2022.unab.edu.co.c4g28.facturador.models.services;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mintic2022.unab.edu.co.c4g28.facturador.models.dao.IUsuarioDao;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Cliente;
import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Usuario;

@Service
public class UsuarioServiceImpl implements IUsuarioService, UserDetailsService {
	
	private Logger logger = LoggerFactory.getLogger(UsuarioServiceImpl.class);

	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Override
	@Transactional(readOnly=true)
	public Usuario findByUsername(String username) {
		return usuarioDao.findByUsername(username);
	}
	@Override
	@Transactional
	public void delete(Usuario usuario) {
		usuarioDao.delete(usuario);
		
	}


	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Usuario usuario=usuarioDao.findByUsername(username);
		
		if(usuario==null){
		  logger.error("Error en el login: no existe el usuario "+username+" en el sistema!");
		  throw new UsernameNotFoundException("Error en el login: no existe el usuario " +username+ " en el sistema!");
		}
		
		List<GrantedAuthority> authorities = usuario.getRoles()
				.stream()
				.map(role-> new SimpleGrantedAuthority(role.getNombre()))
				.peek(authority-> logger.info("Role: "+authority.getAuthority()))
				.collect(Collectors.toList());
		
		return new User(usuario.getUsername(),usuario.getPassword(),usuario.getEnabled(),true,true,true,authorities);
		
		
	}

}
