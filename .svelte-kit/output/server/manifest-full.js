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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cases",
				pattern: /^\/cases\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/clientes",
				pattern: /^\/clientes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contato",
				pattern: /^\/contato\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/quem-somos",
				pattern: /^\/quem-somos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/servicos",
				pattern: /^\/servicos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/servicos/analise-oleos",
				pattern: /^\/servicos\/analise-oleos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/servicos/automacao",
				pattern: /^\/servicos\/automacao\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/servicos/inspecoes-tecnicas",
				pattern: /^\/servicos\/inspecoes-tecnicas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/servicos/lubrificacao",
				pattern: /^\/servicos\/lubrificacao\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/servicos/manutencao-corretiva",
				pattern: /^\/servicos\/manutencao-corretiva\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/servicos/manutencao-preventiva",
				pattern: /^\/servicos\/manutencao-preventiva\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
