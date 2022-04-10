package com.example.Gestion.du.ferme.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion.du.ferme.models.Animal;
import com.example.Gestion.du.ferme.repositories.AnimalRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*", maxAge = 3600)

public class AnimalController {
	
	
		@Autowired
		private AnimalRepository animalRepository ;
		
		@PostMapping("/animal")
		public Animal add(@RequestBody Animal animal )  {
			return animalRepository.save(animal);
			}

		@GetMapping("/animal")
		public List<Animal> animals() {
			return animalRepository.findAll();
		}
		
		
		@GetMapping("/animal/{id}")
		public  Animal Animal(@PathVariable(value="id")long id){
			return animalRepository.findById(id);
		}
		
		
		
	    @PutMapping("/animal/{id}")
	    public ResponseEntity<Animal> updateAnimal(
	            @PathVariable(value = "id") long id,
	             @RequestBody Animal animalDetails){
		          Animal animal = animalRepository.findById(id);
		
		    animal.setAnimal_key(animalDetails.getAnimal_key());
		    animal.setName(animalDetails.getName());
		    animal.setRace(animalDetails.getRace());
		    animal.setAnimal_category(animalDetails.getAnimal_category());
	        final Animal updatedAnimal = animalRepository.save(animal);
	        return ResponseEntity.ok(updatedAnimal);
	    
	    }
		
		 @DeleteMapping("/animal/{id}")
		 @PreAuthorize("hasRole('USER')")
		 public String deleteAnimal(@PathVariable("id") long id, Model model) {
			  Animal animal = animalRepository.findById(id);
			    animalRepository.delete(animal);
			    return "deleted";
			}
		    
		 
}



