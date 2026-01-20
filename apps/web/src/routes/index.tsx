import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return <div className="bg-black p-4 text-white">Home</div>;
}
