import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  edit: boolean = false;

  aux: any;

  constructor(
    private gamesServices: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gamesServices.getGame(params.id).subscribe(
        (res) => {

          console.log(res);

          // this.aux = res[0];
          // this.game = this.aux;
          // console.log(this.game);
          this.edit = true;
        },
        (err) => console.error(err)
      );
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;

    this.gamesServices.saveGame(this.game).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      (err) => console.error(err)
    );
  }

  updateGame() {
    // delete this.game.created_at;
    // delete this.game.id;

    this.gamesServices.updateGame(this.game.id, this.game).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      (err) => console.error(err)
    );
  }
}
