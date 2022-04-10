package com.example.Gestion.du.ferme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

import com.example.Gestion.du.ferme.models.Aliment;
import com.example.Gestion.du.ferme.repositories.AlimentRepository;


@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AlimentController {

	@Autowired
	private AlimentRepository alimentRepository ;
	
	@PostMapping("/aliment")
	public Aliment add(@RequestBody Aliment aliment )  {
		return alimentRepository.save(aliment);
		}

	@GetMapping("/aliment")
	public List<Aliment> aliments() {
		return alimentRepository.findAll();
	}
	
	
	@GetMapping("/aliment/{id}")
	public  Aliment Aliment(@PathVariable(value="id")long id){
		return alimentRepository.findById(id);
	}
	
	
	
    @PutMapping("/aliment/{id}")
    public ResponseEntity<Aliment> updateAliment(
            @PathVariable(value = "id") long id,
             @RequestBody Aliment alimentDetails){
	          Aliment aliment = alimentRepository.findById(id);
	
	    aliment.setCa(alimentDetails.getCa());
	    aliment.setCellulose_brute(alimentDetails.getCellulose_brute());
	    aliment.setEM(alimentDetails.getEM());
	    aliment.setMAT(alimentDetails.getMAT());
	    aliment.setMS(alimentDetails.getMS());
	    aliment.setName(alimentDetails.getName());
	    aliment.setType(alimentDetails.getType());
	    aliment.setUFL(alimentDetails.getUFL());
	    aliment.setUFV(alimentDetails.getUFV());
	    aliment.setPrix(alimentDetails.getPrix());
	    aliment.setP(alimentDetails.getP());
        final Aliment updatedAliment = alimentRepository.save(aliment);
        return ResponseEntity.ok(updatedAliment);
    
    }
	
	 @DeleteMapping("/aliment/{id}")
	 @PreAuthorize("hasRole('USER')")
	 public String deleteAliment(@PathVariable("id") long id, Model model) {
		  Aliment aliment = alimentRepository.findById(id);
		    alimentRepository.delete(aliment);
		    return "deleted";
		}
	    
	
}
