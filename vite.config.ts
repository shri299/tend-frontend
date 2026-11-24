import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'Tend — Personal Life Companion',short_name:'Tend',description:'A little care, every day.',theme_color:'#FAF8F5',background_color:'#FAF8F5',display:'standalone',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml'}]}})],server:{port:5173}});
