import axios from 'axios';
import type { Note } from '@/types/note';
import type { Response } from '@/types/response';

interface CreateNoteData {
  title: string;
  content?: string;
  tag: Note['tag'];
}

const apiKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export async function fetchNotes(
  searchText: string,
  pageNumber: number,
  tag: string | undefined
): Promise<Response> {
  const params: {
    page: number;
    perPage: number;
    search?: string;
    tag?: string;
  } = {
    page: pageNumber,
    perPage: 10,
  };

  if (searchText) {
    params.search = searchText;
  }

  if (tag) {
    params.tag = tag;
  }

  const response = await api.get<Response>('/notes', { params });
  console.log(response.data);
  return response.data;
}

export async function fetchNoteById(id: number) {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
}

export async function createNote(noteData: CreateNoteData): Promise<Note> {
  const response = await api.post<Note>('/notes', noteData);
  return response.data;
}

export async function deleteNote(id: number): Promise<Note> {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
}
