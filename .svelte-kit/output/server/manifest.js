export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".htaccess","favicon.png","images/alan.jpg","images/enem-ultra.png","images/fartecvetorizada.png","images/fernando-dias.jpg","images/founder1.jpg","images/hero-factory.jpg","images/logo.png","images/logo3.png","images/logo4.png","images/ricardo-cto.png","images/ricardo.jpeg","images/ricardo.png","images/team/alan-100.jpg","images/team/alan-200.jpg","images/team/alan-400.jpg","images/team/alan-800.jpg","images/team/fernando-100.jpg","images/team/fernando-200.jpg","images/team/fernando-400.jpg","images/team/fernando-800.jpg","images/team/profile-large.jpg","images/team/profile-medium.jpg","images/team/profile-original.jpg","images/team/profile-small.jpg","images/team/profile-thumb.jpg","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Cf6YvtKI.js",app:"_app/immutable/entry/app.DF2e36HU.js",imports:["_app/immutable/entry/start.Cf6YvtKI.js","_app/immutable/chunks/DjcnFMyR.js","_app/immutable/chunks/CvdWedVZ.js","_app/immutable/chunks/Fr5e5mL_.js","_app/immutable/entry/app.DF2e36HU.js","_app/immutable/chunks/CvdWedVZ.js","_app/immutable/chunks/H42e_b3g.js","_app/immutable/chunks/CuzZAaYI.js","_app/immutable/chunks/Kc2zeECM.js","_app/immutable/chunks/Fr5e5mL_.js","_app/immutable/chunks/5gLgv857.js","_app/immutable/chunks/CYoW_xPA.js","_app/immutable/chunks/bY2p4YZv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog","/cases","/clientes","/contato","/quem-somos","/servicos","/servicos/analise-oleos","/servicos/automacao","/servicos/inspecoes-tecnicas","/servicos/lubrificacao","/servicos/manutencao-corretiva","/servicos/manutencao-preventiva"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
