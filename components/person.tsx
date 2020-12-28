
import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/all/item/[id]" as={`/all/item/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  )
}