import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-details.component.html',
})
export class CharacterDetailsComponent {
  characterId: number | null = null;
  character: any = null;
  error: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  fetchCharacter() {
    this.error = null;
    this.character = null;

    if (!this.characterId || this.characterId <= 0) {
      this.error = 'Please enter a positive integer ID.';
      return;
    }

    this.rickAndMortyService.getCharacterById(this.characterId).subscribe({
      next: (data) => {
        this.character = data;
      },
      error: () => {
        this.error = 'Character not found.';
      },
    });
  }
}
