import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';
interface NotePreviewProps {
  params: Promise<{ id: string }>;
}
export default async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const numericId = parseInt(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', numericId],
    queryFn: () => fetchNoteById(numericId),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotePreviewClient />
    </HydrationBoundary>
  );
}
