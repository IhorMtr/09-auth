import css from './NotesLayout.module.css';
type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section className={css.section}>
      <aside className={css.aside}>{sidebar}</aside>
      {children}
    </section>
  );
}
