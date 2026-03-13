
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10">

      <h1 className="text-4xl font-bold">Vishal Mandlik</h1>

      <p className="text-gray-600 mt-2">
        Full-Stack Developer | React • Node • DevOps
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2">
          I build scalable web applications and developer tools using modern
          technologies like React, Node.js, and cloud infrastructure.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-2 list-disc ml-5">
          <li>DevOps Log Analyzer</li>
          <li>API Screenshot Tool</li>
          <li>CI Monitoring Dashboard</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="mt-2">
          React • Next.js • Node.js • Docker • AWS • PostgreSQL
        </p>
      </section>

    </main>
  );
}
