import { Injectable } from '@nestjs/common';

//✅ Good
//Either class or an interface
//Class is better since it's a javascript object
export abstract class PricingService {
  //This allows us to have different implementations
  //Thus substitute implementations very easily
  public calculatePrice(basePrice: number) {
    return basePrice;
  }
}
