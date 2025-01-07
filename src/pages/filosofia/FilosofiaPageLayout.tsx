import React from "react";
interface FilosofiaPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const FilosofiaPageLayout: React.FC<FilosofiaPageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-center mb-6">{title}</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
      </main>
    </div>
  );
};

export default FilosofiaPageLayout;
