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

  async getNotes(username: string) {
    const notesUser = await this.notesService.findBy({
      username: username,
    });

    return { notes: notesUser };
  }

  async addNotes(noteData: noteType) {
    this.notesService.save(noteData);

    return { message: 'Dodano notatkę!' };
  }

  async setDoneNotes(id: number) {
    const identity = id;
    const search = await this.notesService.findBy({
      id: identity,
    });

    if (search.length > 0) {
      this.notesService.query(`UPDATE notes SET status=1 WHERE id=${id}`);
      return { message: 'Zmieniono status zadania' };
    } else {
      return { message: 'Brak takiego taska' };
    }
  }

  async deleteNote(id: number) {
    const identity = id;

    try {
      await this.notesService.delete({
        id: identity,
      });

      return { message: 'Usunięto' };
    } catch (e) {
      console.log(e);
      return { message: 'Błąd' };
    }
  }
}
