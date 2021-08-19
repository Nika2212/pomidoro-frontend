export interface IRoundTimer {
  current: number;
  max: number;
  radius: number;
  color: string;
  background: string;
  stroke: number;
  semicircle: boolean;
  clockwise: boolean;
  rounded: boolean;
  responsive: boolean;
  duration: number;
  animationDelay: number;
  onRender: () => void;
  animation: string;
}
