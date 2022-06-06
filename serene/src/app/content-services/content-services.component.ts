import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content-services",
  templateUrl: "./content-services.component.html",
  styleUrls: ["./content-services.component.scss"],
})
export class ContentServicesComponent implements OnInit {
  services = [
    "Consulting",
    "Facials with different masks",
    "Facials with different vitamins and Retinol",
    "Anti-aging facials",
    "Acne and Comedone treatment",
    "Hyperpigmentation facials with different oils",
    "Facials with Hyaluronic acid (including neck)",
    '"Me-Time"-facials (including neck, decolleté and hand massage',
    "Professional Waxing",
  ];

  constructor() {}

  ngOnInit(): void {}
}
