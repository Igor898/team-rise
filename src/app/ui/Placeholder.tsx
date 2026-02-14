interface Props {
  height?: string;
}

export default function Placeholder({ height = "h-64" }: Props) {
  return (
    <div
      className={`w-full ${height} bg-soft border border-border rounded-xl`}
    />
  );
}
