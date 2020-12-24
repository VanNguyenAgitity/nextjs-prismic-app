
import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/admin/person/[id]" as={`/admin/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  )
}