package com.example.Gestion.du.ferme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.du.ferme.models.Aliment;


@Repository
public interface AlimentRepository extends JpaRepository<Aliment,Long> {
	
	Aliment findById(long id);

}
