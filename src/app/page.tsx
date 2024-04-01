import { Send } from "lucide-react";

export default function Home() {
  function renderForm() {
    return (
      <div>
        <form
          className="w-full h-full flex flex-row gap-2 items-center"
          action=""
        >
          <input
            className="rounded-md border-b border-dashed outline-none px-4 py-2 text-[#0842A0] placeholder:text-[#0842A0] text-right focus:placeholder:text-transparent"
            type="text"
            placeholder="Ask Something ..."
          />
          <button type="submit" className="rounded-full shadow-md border">
            <Send className="p-2.5 h-10 w-10" />
          </button>
        </form>
      </div>
    );
  }

  function renderMessages() {
    return <div></div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="text-center">
        <h1>Prajwal-GPT</h1>
        {renderForm()}
        {renderMessages()}
      </div>
    </main>
  );
}
