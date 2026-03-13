
export default function Home() {
  return (
     <main className="max-w-4xl mx-auto p-10">

      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold">Vishal Mandlik</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Full-Stack Developer building scalable applications
          with React, Node.js and DevOps tools.
        </p>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-3">About</h2>
        <p className="text-gray-700">
          I am a full-stack developer with experience building
          scalable backend systems and modern frontend
          applications. I enjoy creating developer tools,
          automation systems and micro-SaaS products.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-gray-200 rounded">React</span>
          <span className="px-3 py-1 bg-gray-200 rounded">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 rounded">Node.js</span>
          <span className="px-3 py-1 bg-gray-200 rounded">Docker</span>
          <span className="px-3 py-1 bg-gray-200 rounded">AWS</span>
          <span className="px-3 py-1 bg-gray-200 rounded">PostgreSQL</span>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-3">Projects</h2>

        <div className="space-y-6">

          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold">
              DevOps Log Analyzer
            </h3>
            <p className="text-gray-600">
              Tool to analyze logs and detect system issues.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold">
              API Screenshot Tool
            </h3>
            <p className="text-gray-600">
              Generate website screenshots using an API.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-700">
          GitHub: github.com/mandlikvs
        </p>
      </section>

    </main>
  );
}
