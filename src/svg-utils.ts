export class SvgUtils {
	private constructor() {}

	public static escape(s: string): string {
		return (s + '').replace(/-/g, '&#45;')
	}

	public static unescape(s: string): string {
		return (s + '').replace(/&#45;/g, '-')
	}
}
