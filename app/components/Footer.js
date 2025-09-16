export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-500 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Oviya | Built with{" "}
          <span className="text-blue-400">Next.js</span> &{" "}
          <span className="text-blue-400">Tailwind CSS</span>
        </p>

        {/* Right
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/OviyaSenthilk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oviya2604"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:oviya.s2604@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>
        </div> */}
      </div>
    </footer>
  );
}
