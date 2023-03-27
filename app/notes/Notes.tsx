'use client'
import styles from './Notes.module.css'
import Link from 'next/link'

export default function Notes({ notes }: { notes: any[] }) {
  return (
    <div>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
            />
          )
        })}
      </div>
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`/notes/${id}`}>
      <style jsx>
        {`
          .created {
            background-color: purple;
            color: white;
          }
        `}
      </style>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p className="created">{created}</p>
      </div>
    </Link>
  )
}
