package com.example.Gestion.du.ferme.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Planning {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="id_planning")
	private Long id;
	
	private double poids_vif;
	private String animal_name;
	private double potentiel_de_prod;
	private double quantite_fourrage;
	private double quantite_complement;
	
	public Planning(Long id, double poids_vif, String animal_name, double potentiel_de_prod, double quantite_fourrage,
			double quantite_complement) {
		super();
		this.id = id;
		this.poids_vif = poids_vif;
		this.animal_name = animal_name;
		this.potentiel_de_prod = potentiel_de_prod;
		this.quantite_fourrage = quantite_fourrage;
		this.quantite_complement = quantite_complement;
	}

	public Planning() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getPoids_vif() {
		return poids_vif;
	}

	public void setPoids_vif(double poids_vif) {
		this.poids_vif = poids_vif;
	}

	public String getAnimal_name() {
		return animal_name;
	}

	public void setAnimal_name(String animal_name) {
		this.animal_name = animal_name;
	}

	public double getPotentiel_de_prod() {
		return potentiel_de_prod;
	}

	public void setPotentiel_de_prod(double potentiel_de_prod) {
		this.potentiel_de_prod = potentiel_de_prod;
	}

	public double getQuantite_fourrage() {
		return quantite_fourrage;
	}

	public void setQuantite_fourrage(double quantite_fourrage) {
		this.quantite_fourrage = quantite_fourrage;
	}

	public double getQuantite_complement() {
		return quantite_complement;
	}

	public void setQuantite_complement(double quantite_complement) {
		this.quantite_complement = quantite_complement;
	}
	
	

	@Override
	public String toString() {
		return "Planning [id=" + id + ", poids_vif=" + poids_vif + ", animal_name=" + animal_name
				+ ", potentiel_de_prod=" + potentiel_de_prod + ", quantite_fourrage=" + quantite_fourrage
				+ ", quantite_complement=" + quantite_complement + "]";
	}

	
	
}
