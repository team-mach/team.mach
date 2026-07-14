import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";

export function NotFound() {
  return (
    <div className="min-h-screen grid-bg bg-graphite flex flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="font-display text-4xl font-semibold text-ink mb-4">Flight path not found</h1>
      <p className="text-ink-muted mb-8 max-w-sm">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/">
        <Button variant="primary">Return to base</Button>
      </Link>
    </div>
  );
}
