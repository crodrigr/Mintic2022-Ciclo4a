package mintic2022.unab.edu.co.c4g23.facturador.controllers;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import mintic2022.unab.edu.co.c4g23.facturador.models.entity.Cliente;
import mintic2022.unab.edu.co.c4g23.facturador.models.service.IClienteService;


@CrossOrigin(origins= {"http://localhost:4200","*"})
@RestController
@RequestMapping("/api")
public class ClienteRestController {
	
	@Autowired
	private IClienteService clienteService;
	
	
	@GetMapping("/clientes")
	public List<Cliente> index(){
		return clienteService.findAll();
	}
	
	@Secured({"ROLE_ADMIN","ROLE_USER"})
	@GetMapping("/cliente/{Id}")
	public Cliente show(@PathVariable Long Id) {
		return clienteService.findById(Id);
	}
	
	@Secured({"ROLE_ADMIN"})
	@PostMapping("/clientes")	
	public ResponseEntity<?> create(@Valid @RequestBody  Cliente cliente, BindingResult result){
		
		Cliente clienteNew=null;		
		Map<String, Object> response=new HashMap<>();		
		if(result.hasErrors()){
			
			List<String> errors= result.getFieldErrors()
			          .stream()
			          .map(err-> "El campo "+ err.getField() +" "+err.getDefaultMessage())
			          .collect(Collectors.toList());
			
			response.put("errors", errors);
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.BAD_REQUEST);
			
		}		
		try {			
			clienteNew=this.clienteService.save(cliente);		
		}catch(DataAccessException e){
		  response.put("mensaje","Error al realizar el insert en la base de datos" );
		  response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
		  return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);			
		}
		
		response.put("mensaje","El cliente ha sido creado con éxito!" );
		response.put("cliente",clienteNew);
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
		
		
	}
	
	@Secured({"ROLE_ADMIN"})
	@DeleteMapping("/clientes/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id){
		
		Map<String, Object>  response=new HashMap<>();
		
		try {
			
			Cliente cliente= this.clienteService.findById(id);	
			this.clienteService.delete(cliente);
			
		}catch(DataAccessException e){
			response.put("mensaje","Error al elminar el cliente de la base de datos" );	
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);	
		}
		response.put("mensaje","El cliente elminado con éxito");		
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
		
	}
	
	@Secured({"ROLE_ADMIN"})
    @PutMapping("cliente/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> update(@Valid @RequestBody  Cliente cliente,@PathVariable Long id, BindingResult result) {

    	Cliente currentCliente=this.clienteService.findById(id);
    	
    	Cliente clienteUpdate=null;
    	
    	Map<String, Object>  response=new HashMap<>();
    	
	   if(result.hasErrors()){
			
			List<String> errors= result.getFieldErrors()
			          .stream()
			          .map(err-> "El campo "+ err.getField() +" "+err.getDefaultMessage())
			          .collect(Collectors.toList());
			
			response.put("errors", errors);
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.BAD_REQUEST);
			
		}
	   
	   if(currentCliente==null){
		   response.put("mensaje","Error: no se puede editar, el cliente Id:".concat(id.toString()).concat("no existe en la base de datos"));
		   return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		   
	   }
    	
	   try {
		   currentCliente.setNombre(cliente.getNombre());
	       currentCliente.setApellido(cliente.getApellido());
	       currentCliente.setEmail(cliente.getEmail());
	       currentCliente.setDireccion(cliente.getEmail());
	       clienteUpdate=this.clienteService.save(currentCliente); 
		   
	   }catch(DataAccessException e){
		   response.put("mensaje","Error al actulizar el cliente de la base de datos" );	
		   response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
		   return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);	   
	   }
    	
	    response.put("mensaje","El cliente ha sido actulizado con éxito!" );
		response.put("cliente",clienteUpdate);
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
    	
    	
    	
    }
	

}
