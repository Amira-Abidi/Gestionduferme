package com.example.Gestion.du.ferme.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Aliment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="id")
		private Long id;

		private String name;
		private String type;
		private double  MS;
		private double MAT;
		private double Cellulose_brute;
		private double P;
		private double Ca;
		private double EM;
		private double UFL;
		private double UFV;
		private double prix;
		
		
		public Aliment(Long id, String name, String type, double mS, double mAT, double cellulose_brute, double p,
				double ca, double eM, double uFL, double uFV, double prix) {
			super();
			this.id = id;
			this.name = name;
			this.type = type;
			this.MS = mS;
			this.MAT = mAT;
			this.Cellulose_brute = cellulose_brute;
			this.P = p;
			this.Ca = ca;
			this.EM = eM;
			this.UFL = uFL;
			this.UFV = uFV;
			this.prix = prix;
			
		}
		
		
		public Aliment() {
			super();
		}
		
		public Aliment(long id) {
			this.id= id;
		}


		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		
		
		public String getType() {
			return type;
		}


		public void setType(String type) {
			this.type = type;
		}


		public double getMS() {
			return MS;
		}
		public void setMS(double mS) {
			MS = mS;
		}
		public double getMAT() {
			return MAT;
		}
		public void setMAT(double mAT) {
			MAT = mAT;
		}
		public double getCellulose_brute() {
			return Cellulose_brute;
		}
		public void setCellulose_brute(double cellulose_brute) {
			Cellulose_brute = cellulose_brute;
		}
		public double getP() {
			return P;
		}
		public void setP(double p) {
			P = p;
		}
		public double getCa() {
			return Ca;
		}
		public void setCa(double ca) {
			Ca = ca;
		}
		public double getEM() {
			return EM;
		}
		public void setEM(double eM) {
			EM = eM;
		}
		public double getUFL() {
			return UFL;
		}
		public void setUFL(double uFL) {
			UFL = uFL;
		}
		public double getUFV() {
			return UFV;
		}
		public void setUFV(double uFV) {
			UFV = uFV;
		}
		
		
	
		public double getPrix() {
			return prix;
		}


		public void setPrix(double prix) {
			this.prix = prix;
		}


		@Override
		public String toString() {
			return "Aliment [id=" + id + ", name=" + name + ", type=" + type + ", MS=" + MS + ", MAT=" + MAT
					+ ", Cellulose_brute=" + Cellulose_brute + ", P=" + P + ", Ca=" + Ca + ", EM=" + EM + ", UFL=" + UFL
					+ ", UFV=" + UFV + ", prix=" + prix + "]";
		}


	
}
