export interface Coordinate {
  id: number;
  lat: number;
  lng: number;
  heading: number;
  pitch: number;
  country: string | null;
}

export interface Guess {
  lat: number | null;
  lng: number | null;
  distance: number | null;
  score: number;
  timeout: boolean;
}

export interface Round {
  round_number: number;
  lat: number;
  lng: number;
  heading: number;
  pitch: number;
}

export interface GameSession {
  id: number;
  title: string;
  description: string;
  player_name: string;
  currentRound: number;
  totalRounds: number;
  isFinished: boolean;
  totalScore: number;
  maxScore: number;
  rounds: Round[];
}
