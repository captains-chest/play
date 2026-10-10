import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameCard } from './game-card/game-card';
import { games } from './games/constants';

@Component({
  selector: 'play-root',
  imports: [GameCard],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly games = games;
}
