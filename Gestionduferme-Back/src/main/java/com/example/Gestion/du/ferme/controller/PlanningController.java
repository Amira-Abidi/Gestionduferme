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

import com.example.Gestion.du.ferme.models.Planning;
import com.example.Gestion.du.ferme.repositories.PlanningRepository;


@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PlanningController {
	
	@Autowired
	private PlanningRepository planningRepository ;
	
	@PostMapping("/planning")
	public Planning add(@RequestBody Planning planning )  {
		return planningRepository.save(planning);
		}

	@GetMapping("/planning")
	public List<Planning> planning() {
		return planningRepository.findAll();
	}
	
	
	@GetMapping("/planning/{id}")
	public  Planning Planning(@PathVariable(value="id")long id){
		return planningRepository.findById(id);
	}
	
	
    @PutMapping("/planning/{id}")
    public ResponseEntity<Planning> updatePlanning(
            @PathVariable(value = "id") long id,
             @RequestBody Planning planningDetails){
    		 Planning plan = planningRepository.findById(id);
	
    		 plan.setPoids_vif(planningDetails.getPoids_vif());
    		 plan.setAnimal_name(planningDetails.getAnimal_name());
    		 plan.setQuantite_fourrage(planningDetails.getQuantite_fourrage());
    		 plan.setQuantite_complement(planningDetails.getQuantite_complement());
    		 plan.setPotentiel_de_prod(planningDetails.getPotentiel_de_prod());

    		 
        final Planning updatedPlanning = planningRepository.save(plan);
        return ResponseEntity.ok(updatedPlanning);
    
    }
	
	 @DeleteMapping("/planning/{id}")
	 public String deletePlanning(@PathVariable("id") long id, Model model) {
		  Planning planning = planningRepository.findById(id);
		    planningRepository.delete(planning);
		    return "deleted";
		}
	    

}
