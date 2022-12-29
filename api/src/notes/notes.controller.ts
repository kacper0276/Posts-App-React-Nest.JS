import { Controller, Get, Post, Body } from '@nestjs/common';
import { noteType } from 'src/types/noteType';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('/getnotes')
  async getNotes() {
    return await this.notesService.getNotes();
  }

  @Post('/addnotes')
  async addNotes(@Body() noteData: noteType) {
    return await this.notesService.addNotes(noteData);
  }
}
