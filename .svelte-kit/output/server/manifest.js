export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".htaccess","favicon.png","images/enem-ultra.png","images/fartecvetorizada.png","images/fernando-dias.jpg","images/founder1.jpg","images/hero-factory.jpg","images/logo.png","images/logo3.png","images/logo4.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BchbU2Lb.js",app:"_app/immutable/entry/app.CED0wV5A.js",imports:["_app/immutable/entry/start.BchbU2Lb.js","_app/immutable/chunks/DMkIocSa.js","_app/immutable/chunks/BFNcXGEy.js","_app/immutable/chunks/fIb7srva.js","_app/immutable/entry/app.CED0wV5A.js","_app/immutable/chunks/BFNcXGEy.js","_app/immutable/chunks/Dhqx1P-U.js","_app/immutable/chunks/DtrOx_13.js","_app/immutable/chunks/fIb7srva.js","_app/immutable/chunks/D-3Jfg5U.js","_app/immutable/chunks/wOykGSzW.js","_app/immutable/chunks/2_aWtOj_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
