import Navigation from "./Navigation";

export const metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "Welcome to my Next.js learning project",
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col max-w-[100%] mx-auto px-5">
      
      {/* Header */}
      <header className="py-4 border-b ml-7 mr-7">
        <Navigation />
      </header>

      {/* Page Content */}
      <main className="flex-grow py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 border-t ml-7 mr-7">
        © 2026 Your Company Name. All rights reserved.
      </footer>

    </div>
  );
}
