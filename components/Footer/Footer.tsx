import { FC } from 'react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-sm text-stone-500">
                        © {currentYear} Quantrack. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;