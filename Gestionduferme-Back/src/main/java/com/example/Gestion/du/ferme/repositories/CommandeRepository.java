package com.example.Gestion.du.ferme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.du.ferme.models.Commande;

@Repository
public interface CommandeRepository extends JpaRepository<Commande,Long> {
	Commande findById(long id);	
}