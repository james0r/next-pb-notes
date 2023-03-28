import styles from '../Notes.module.css'
import PocketBase from 'pocketbase'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getNote(noteId: string) {
  // const res = await fetch(
  //   `https://crooked-soccer.pockethost.io/api/collections/notes/records/${noteId}`
  // )
  // const data = await res.json()
  // return data

  const pb = new PocketBase('https://crooked-soccer.pockethost.io')

  const record = await pb.collection('notes').getOne(noteId)

  return record;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  )
}
