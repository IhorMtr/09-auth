import { Metadata } from 'next';
import Image from 'next/image';
import css from './ProfilePage.module.css';
import Link from 'next/link';
import { getServerUser } from '@/lib/api/serverApi';

export const metadata: Metadata = {
  title: 'Your Profile — NoteHub',
  description:
    'Manage your personal information, view your saved notes, and customize your experience in your NoteHub profile.',
  openGraph: {
    type: 'profile',
    url: 'https://09-auth-sigma.vercel.app/profile',
    title: 'Your Profile — NoteHub',
    description:
      'Access your profile, manage your notes, and personalize your NoteHub account for a better note-taking experience.',
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      },
    ],
  },
};

export default async function Profile() {
  const user = await getServerUser();

  return (
    <div className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        {user.avatar && (
          <div className={css.avatarWrapper}>
            <Image
              src={user.avatar}
              alt="User Avatar"
              width={120}
              height={120}
              className={css.avatar}
            />
          </div>
        )}
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
