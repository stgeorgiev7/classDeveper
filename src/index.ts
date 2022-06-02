import { Developer } from "./types";

class Dev implements Developer {
 energy = 100;
 ENERGY_PER_HOUR = 10;

 start(props: { workHours: number; sleepHours: number }) {
  for (let i = 0; i < 5; i++) {
   console.log(i);
   if (this.energy > props.workHours * this.ENERGY_PER_HOUR) {
    this.work(props.workHours);
    this.sleep(props.sleepHours);
   } else {
    throw Error("Not enough energy!");
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

const dev1 = new Dev();

dev1.start({ workHours: 8, sleepHours: 6 });
