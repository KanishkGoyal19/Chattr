import Image from "next/image";

export const metadata = {
  title: "Chattr",
  description: "Home - Chattr",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
          Welcome to <span className="text-blue-500">Chattr</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          A simple and fun way to connect with friends. Create your account and
          start chatting today!
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Get Started
          </button>
        </div>
      </section>

      {/* Illustration */}
      <div className="mt-10">
        {/* <Image
          src="/chat-illustration.svg"
          // alt="Chat Illustration"
          width={400}
          height={300}
          priority
        /> */}
      </div>

      {/* Footer */}
      <footer className="mt-auto text-gray-500 text-sm">
        © {new Date().getFullYear()} Chattr. All rights reserved.
      </footer>
    </main>
  );
}
