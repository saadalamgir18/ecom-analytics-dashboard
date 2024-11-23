import React from "react";

export default function AnalyticsCard({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="dark:bg-tertiary border bg-slate-100 rounded-md p-6 h-full">
      <div className="mb-3">
        <p>{title}</p>
        <span className="text-primary text-sm">{subtitle}</span>
      </div>
      {children}
    </div>
  );
}
