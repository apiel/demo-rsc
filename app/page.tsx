import Image from 'next/image'
import { ServerComp } from './ServerComp'
import { ClientComp } from './ClientComp'
import { ServerComp2 } from './ServerComp2'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <ServerComp />
      <ClientComp />
      <hr />
      <ServerComp2 value="yoyo" />
    </div>
  )
}
