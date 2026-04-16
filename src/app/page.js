export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 shadow-xl border border-base-300 max-w-md w-full">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-3xl font-bold bg-primary bg-clip-text">KinKeeper</h1>
          <p className="text-base-content/70">Next.js + Tailwind + DaisyUI + Recharts</p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}