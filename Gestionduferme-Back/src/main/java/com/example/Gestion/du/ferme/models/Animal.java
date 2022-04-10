package com.example.Gestion.du.ferme.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Animal  {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name ="id_animal")
	private Long id;

	private String animal_key;
	private String name;
	private String race;
	private String animal_category;
	
	public Animal(Long id, String animal_key, String name, String race, String animal_category) {
		super();
		this.id = id;
		this.animal_key = animal_key;
		this.name = name;
		this.race = race;
		this.animal_category = animal_category;
	}

	public Animal() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id= id;
	}

	public String getAnimal_key() {
		return animal_key;
	}

	public void setAnimal_key(String animal_key) {
		this.animal_key = animal_key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRace() {
		return race;
	}

	public void setRace(String race) {
		this.race = race;
	}


	public String getAnimal_category() {
		return animal_category;
	}

	public void setAnimal_category(String animal_category) {
		this.animal_category = animal_category;
	}

	public Animal save(Animal animal) {
		return null;
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", animal_key=" + animal_key + ", name=" + name + ", race=" + race
				+ ", animal_category=" + animal_category + "]";
	}

	
	
}
