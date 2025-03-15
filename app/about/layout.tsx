export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2">
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
