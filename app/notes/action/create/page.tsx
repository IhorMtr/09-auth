import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NoteHub — Create a New Note',
  description: 'Create a new note and organize your thoughts efficiently.',
  openGraph: {
    type: 'website',
    url: 'https://08-zustand-one.vercel.app/notes/action/create',
    title: 'NoteHub — Create a New Note',
    description: 'Use this page to create and categorize a new note.',
    siteName: 'NoteHub',
    images: [
      { url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg' },
    ],
  },
};

export default function CreateNote() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Create note</h1>
      <NoteForm />
    </div>
  );
}
