import { ClientComp } from './ClientComp'
import { MessageForm } from './MessageForm'
import { ServerComp } from './ServerComp'
import { ServerComp2 } from './ServerComp2'
import { SharedComp } from './SharedComp'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <ServerComp />
      <SharedComp />
      <ClientComp svrComp={<ServerComp2 value="SSR" />} />
      <hr />
      <ServerComp2 value="yoyo" />
      <hr />
      <MessageForm />
    </div>
  )
}
