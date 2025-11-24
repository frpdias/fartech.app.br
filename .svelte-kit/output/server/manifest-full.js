export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/hero-factory.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BPe6FQ26.js",app:"_app/immutable/entry/app.3tuhwHvP.js",imports:["_app/immutable/entry/start.BPe6FQ26.js","_app/immutable/chunks/32Pj_OqM.js","_app/immutable/chunks/Cic3LXh-.js","_app/immutable/chunks/DiQ5VlDJ.js","_app/immutable/entry/app.3tuhwHvP.js","_app/immutable/chunks/Cic3LXh-.js","_app/immutable/chunks/tHfPhL_P.js","_app/immutable/chunks/BdPJ2nMw.js","_app/immutable/chunks/DiQ5VlDJ.js","_app/immutable/chunks/CJF7e3YA.js","_app/immutable/chunks/A2Km-dPo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
