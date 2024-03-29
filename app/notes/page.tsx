import CreateNote from './CreateNote'
import Notes from './Notes'
import PocketBase from 'pocketbase'
import styles from './Notes.module.css'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getNotes() {
  const pb = new PocketBase('https://crooked-soccer.pockethost.io')
  const data = await pb.collection('notes').getList()

  // const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  // const data = await res.json();

  return data?.items as any[] 
}

export default async function NotesPage() {
  const notes = await getNotes()

  const notesArray = notes.map((note) => ({
    id: note.id,
    created: note.created,
    content: note.content,
    title: note.title,
  }))

  return (
    <div>
      <h1 className={styles.heading1}>Notes</h1>
      <Notes notes={notesArray}></Notes>

      <CreateNote />
    </div>
  )
}
