import { FC } from 'react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="text-center text-xs text-stone-500">
                    © {currentYear} Quantrack. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;