import { Inter, Lusitana } from 'next/font/google';

// Initialize the fonts
const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'] // Add the weights you want to use
});

// Export both fonts
export { inter, lusitana };
