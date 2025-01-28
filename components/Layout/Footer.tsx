export default function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-stone-400 text-sm">
                        © {new Date().getFullYear()} Quantrack. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 