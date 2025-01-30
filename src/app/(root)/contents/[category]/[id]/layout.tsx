import { Floating } from '@/components/floating';

export default function ContentViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Floating />
    </div>
  );
}
