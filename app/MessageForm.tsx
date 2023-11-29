import { SubmitButton } from "./SubmitButton";
import { submitMessageForm } from "./submitMessageForm";


export function MessageForm() {
  return (
    <form action={submitMessageForm}>
      <h2>New Message</h2>

      <input id="content" name="content" required minLength={3} />

      <SubmitButton />
    </form>
  );
}
