export interface Developer {
 energy: number;
 ENERGY_PER_HOUR: number;
 sleep(hours: number): void;
 work(hours: number): void;
 start(props: { workHours: number; sleepHours: number }): void;
}
