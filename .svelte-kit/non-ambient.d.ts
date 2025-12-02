
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/blog" | "/cases" | "/clientes" | "/contato" | "/quem-somos" | "/servicos" | "/servicos/analise-oleos" | "/servicos/automacao" | "/servicos/inspecoes-tecnicas" | "/servicos/lubrificacao" | "/servicos/manutencao-corretiva" | "/servicos/manutencao-preventiva";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/blog": Record<string, never>;
			"/cases": Record<string, never>;
			"/clientes": Record<string, never>;
			"/contato": Record<string, never>;
			"/quem-somos": Record<string, never>;
			"/servicos": Record<string, never>;
			"/servicos/analise-oleos": Record<string, never>;
			"/servicos/automacao": Record<string, never>;
			"/servicos/inspecoes-tecnicas": Record<string, never>;
			"/servicos/lubrificacao": Record<string, never>;
			"/servicos/manutencao-corretiva": Record<string, never>;
			"/servicos/manutencao-preventiva": Record<string, never>
		};
		Pathname(): "/" | "/blog" | "/blog/" | "/cases" | "/cases/" | "/clientes" | "/clientes/" | "/contato" | "/contato/" | "/quem-somos" | "/quem-somos/" | "/servicos" | "/servicos/" | "/servicos/analise-oleos" | "/servicos/analise-oleos/" | "/servicos/automacao" | "/servicos/automacao/" | "/servicos/inspecoes-tecnicas" | "/servicos/inspecoes-tecnicas/" | "/servicos/lubrificacao" | "/servicos/lubrificacao/" | "/servicos/manutencao-corretiva" | "/servicos/manutencao-corretiva/" | "/servicos/manutencao-preventiva" | "/servicos/manutencao-preventiva/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.htaccess" | "/favicon.png" | "/images/alan.jpg" | "/images/enem-ultra.png" | "/images/fartecvetorizada.png" | "/images/fernando-dias.jpg" | "/images/founder1.jpg" | "/images/hero-factory.jpg" | "/images/logo.png" | "/images/logo3.png" | "/images/logo4.png" | "/images/ricardo-cto.png" | "/images/ricardo.jpeg" | "/images/ricardo.png" | "/images/team/alan-100.jpg" | "/images/team/alan-200.jpg" | "/images/team/alan-400.jpg" | "/images/team/alan-800.jpg" | "/images/team/fernando-100.jpg" | "/images/team/fernando-200.jpg" | "/images/team/fernando-400.jpg" | "/images/team/fernando-800.jpg" | "/images/team/profile-large.jpg" | "/images/team/profile-medium.jpg" | "/images/team/profile-original.jpg" | "/images/team/profile-small.jpg" | "/images/team/profile-thumb.jpg" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}