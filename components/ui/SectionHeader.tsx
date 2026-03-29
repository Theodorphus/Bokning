interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  body?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  body,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
          {eyebrow}
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-slate-600 ${center ? "mx-auto max-w-2xl" : ""}`}>
          {body}
        </p>
      )}
    </div>
  );
}
