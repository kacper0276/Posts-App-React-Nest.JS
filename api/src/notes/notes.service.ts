import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notes } from 'src/dtos/notes.entity';
import { noteType } from 'src/types/noteType';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes) private notesService: Repository<Notes>,
  ) {}

  async getNotes() {
    console.log('Notatki');
  }

  async addNotes(noteData: noteType) {
    this.notesService.save(noteData);

    return { message: 'Dodano notatkę!' };
  }
}
