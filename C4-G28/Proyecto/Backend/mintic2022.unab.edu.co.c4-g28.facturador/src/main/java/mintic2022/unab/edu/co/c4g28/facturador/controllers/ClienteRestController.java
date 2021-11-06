package mintic2022.unab.edu.co.c4g28.facturador.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import mintic2022.unab.edu.co.c4g28.facturador.models.entites.Cliente;
import mintic2022.unab.edu.co.c4g28.facturador.models.services.IClienteService;


@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ClienteRestController {
	
	@Autowired
	private IClienteService clienteService;
	
	@GetMapping("/clientes")
	public List<Cliente> index(){
		return clienteService.findAll();		
		
	}
	
	@GetMapping("/cliente/{id}")
	public Cliente show(@PathVariable Long id){
		return clienteService.findById(id);
	}
	
	@PostMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@Valid @RequestBody Cliente cliente, BindingResult result){
		
		Cliente clienteNew=null;
		
		Map<String, Object> response=new HashMap<>();
		
		if(result.hasErrors()) {		
			List<String> errors= result.getFieldErrors()
					.stream()
					.map(err -> "El campo " +err.getField() +" "+err.getDefaultMessage())
			        .collect(Collectors.toList());	
		
		response.put("errors",errors);
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.BAD_REQUEST);
		
		}
		
		try {
			clienteNew= this.clienteService.save(cliente);
		}catch(DataAccessException e) {
		  response.put("mensaje", "Error al realizar el insert en la base de datos");
		  response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));	
		  return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje","El cliente ha sido creado con éxito!");
		response.put("cliente", clienteNew);
		
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
		
		
		
		
	}
	
	@PutMapping("/cliente/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente update(@RequestBody Cliente cliente,@PathVariable  Long id){
		Cliente currentCliente=this.clienteService.findById(id);
		currentCliente.setNombre(cliente.getNombre());
		currentCliente.setApellido(cliente.getApellido());
		currentCliente.setEmail(cliente.getEmail());
		this.clienteService.save(currentCliente);
		return currentCliente;	
	}
	
	@DeleteMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id){
		Cliente cliente=this.clienteService.findById(id);
		this.clienteService.delete(cliente);
	}
	
	

}
