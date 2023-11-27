import Image from 'next/image'
import { ServerComp } from './ServerComp'
import { ClientComp } from './ClientComp'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <ServerComp />
      <ClientComp />
    </div>
  )
}
