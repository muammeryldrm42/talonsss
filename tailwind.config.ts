import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { bg:'#05070d', panel:'#0c111d', line:'rgba(255,255,255,0.08)', brand:'#7c3aed', brand2:'#22d3ee', text:'#f8fafc', muted:'#94a3b8' },
      boxShadow: { glow:'0 0 0 1px rgba(255,255,255,0.05), 0 16px 60px rgba(124,58,237,0.18)' }
    }
  },
  plugins: []
};
export default config;
