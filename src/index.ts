import { DeveloperInterface } from "./types";

class Developer implements DeveloperInterface {
 energy = 100;
 ENERGY_PER_HOUR = 10;

 start(props: { workHours: number; sleepHours: number }) {
  for (let i = 0; i < 5; i++) {
   if (this.energy > props.workHours * this.ENERGY_PER_HOUR) {
    this.work(props.workHours);
    this.sleep(props.sleepHours);
   } else {
    return console.error("Not enough energy!");
   }
  }

  console.log("You have successfully completed your work week!");
 }

 sleep(hours: number) {
  this.energy += hours * this.ENERGY_PER_HOUR;
 }

 work(hours: number) {
  this.energy -= hours * this.ENERGY_PER_HOUR;
 }
}

const developerInstance = new Developer();

window.developerInstance = developerInstance;
