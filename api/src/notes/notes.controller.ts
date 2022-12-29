import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { noteType } from 'src/types/noteType';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('/getnotes/:username')
  async getNotes(@Param('username') username: string) {
    return await this.notesService.getNotes(username);
  }

  @Post('/addnotes')
  async addNotes(@Body() noteData: noteType) {
    return await this.notesService.addNotes(noteData);
  }

  @Get('/setdonenote/:id')
  async setDoneNote(@Param('id') id: number) {
    return await this.notesService.setDoneNotes(id);
  }

  @Get('/deletenotes/:id')
  async deleteNote(@Param('id') id: number) {
    return await this.notesService.deleteNote(id);
  }
}
