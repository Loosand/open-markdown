import PlateEditor from '@/components/plate-editor';

export default function IndexPage() {
  return (
    <section className="container items-center md:py-10">
      <div className="rounded-lg border bg-background shadow">
        <PlateEditor />
      </div>
    </section>
  );
}
