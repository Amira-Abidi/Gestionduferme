package com.example.Gestion.du.ferme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.du.ferme.models.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal,Long>  {

	Animal findById(long id);
}

