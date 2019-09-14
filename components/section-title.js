export function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <div className="section-title__title">{title}</div>
      <style jsx>{`
        .section-title__title {
          border-left: 8px solid #343a40;
          font-family: "Segoe UI Bold";
          font-size: 20px;
          padding-left: 20px;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}
