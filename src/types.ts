export interface DeveloperInterface {
 energy: number;
 ENERGY_PER_HOUR: number;
 sleep(hours: number): void;
 work(hours: number): void;
 start(props: { workHours: number; sleepHours: number }): void;
}

declare global {
 interface Window {
  developerInstance: DeveloperInterface;
 }
}
