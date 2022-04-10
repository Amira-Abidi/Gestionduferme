package com.example.Gestion.du.ferme.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Commande {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private double quantite;
	
	private Date date;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JsonBackReference
	@JsonIgnore
    Set<User> users=  new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JsonBackReference
	@JsonIgnore
    Set<Aliment> aliments=  new HashSet<>();



	public Commande(Long id, double quantite, Date date, Set<User> users, Set<Aliment> aliments) {
		super();
		this.id = id;
		this.quantite = quantite;
		this.date = date;
		this.users = users;
		this.aliments = aliments;
	}


	public Object findById(Long idp) {
		
		return null;
	}
	
	
	public Commande() {
		super();
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getQuantite() {
		return quantite;
	}

	public void setQuantite(double quantite) {
		this.quantite = quantite;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Set<Aliment> getAliments() {
		return aliments;
	}

	public void setAliments(Set<Aliment> aliments) {
		this.aliments = aliments;
	}


	@Override
	public String toString() {
		return "Commande [id=" + id + ", quantite=" + quantite + ", date=" + date + ", users=" + users + ", aliments="
				+ aliments + "]";
	}
	
	
	
	

}
