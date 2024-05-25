import Editor from "./_components/Editor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>영화자막 생성기</h1>
      <div>
        <Editor />
      </div>
    </main>
  );
}
