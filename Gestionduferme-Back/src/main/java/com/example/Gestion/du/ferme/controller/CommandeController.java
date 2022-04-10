package com.example.Gestion.du.ferme.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion.du.ferme.models.Commande;
import com.example.Gestion.du.ferme.repositories.CommandeRepository;


@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CommandeController {
	

	@Autowired
	private CommandeRepository commandeRepository ;
	
	@PostMapping("/commande")
	public Commande add(@RequestBody Commande commande)  {
		commande.setAliments(commande.getAliments());
		commande.setUsers(commande.getUsers());
		return commandeRepository.save(commande);
		}

	@GetMapping("/commande")
	public List<Commande> commandes() {
		return commandeRepository.findAll();
	}
	
	
	@GetMapping("/commande/{id}")
	public  Commande Commande(@PathVariable(value="id")long id){
		return commandeRepository.findById(id);
	}
	
	
	
    @PutMapping("/commande/{id}")
    public ResponseEntity<Commande> updateCommande(
            @PathVariable(value = "id") long id,
             @RequestBody Commande commandeDetails){
	          Commande commande = commandeRepository.findById(id);
	
	    commande.setQuantite(commandeDetails.getQuantite());
	    commande.setDate(commandeDetails.getDate());
	    commande.setAliments(commandeDetails.getAliments());
	    commande.setUsers(commandeDetails.getUsers());
        final Commande updatedCommande = commandeRepository.save(commande);
        return ResponseEntity.ok(updatedCommande);
    
    }
	
	 @DeleteMapping("/commande/{id}")
	 public String deleteCommande(@PathVariable("id") long id, Model model) {
		  Commande commande = commandeRepository.findById(id);
		  commandeRepository.delete(commande);
		    return "deleted";
		}
	    

}
