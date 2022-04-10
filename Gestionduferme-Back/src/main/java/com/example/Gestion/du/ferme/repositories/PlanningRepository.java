package com.example.Gestion.du.ferme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.du.ferme.models.Planning;

@Repository
public interface PlanningRepository extends JpaRepository<Planning,Long> {
	
	Planning findById(long id);

}
