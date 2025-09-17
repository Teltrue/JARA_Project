import Placeholder from "@/components/common/Placeholder";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-20 pb-24">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Build and Monetize Pages Effortlessly</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Create beautiful landing pages, publish payment links, and track revenue in one place. Login to access your dashboard.</p>
          <div className="mt-6 flex gap-3">
            <a href="/auth/login" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90">Get Started</a>
            <a href="/pages" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">Explore Pages</a>
          </div>
        </div>
      </section>
      <Placeholder title="How it works" description="Use your Supabase session. Every API request automatically injects your Bearer token. Set VITE_API_URL in your environment to connect.">
        <ul className="grid sm:grid-cols-3 gap-6 text-sm text-white/80">
          <li className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">1. Generate or design a page</li>
          <li className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">2. Publish payment links</li>
          <li className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">3. Track revenue on your dashboard</li>
        </ul>
      </Placeholder>
    </div>
  );
}
