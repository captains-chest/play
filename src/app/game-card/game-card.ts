import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Game } from '../games/models';

@Component({
  selector: 'li[play-game-card]',
  templateUrl: './game-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'card' },
})
export class GameCard {
  readonly game = input.required<Game>();
}
