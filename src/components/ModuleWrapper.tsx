import React from "react";

interface ModuleWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ModuleWrapper: React.FC<ModuleWrapperProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <hr className="block w-full border-t border-gray-300 mb-4" />
          <p className="text-lg text-gray-700 mb-6">{description}</p>

          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default ModuleWrapper;
