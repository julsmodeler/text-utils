export class StringUtils {
	private constructor() {}

	public static replaceAll(str: string, srch: string, repl: string): string {
		let regex = new RegExp(StringUtils.escapeRegExp(srch), 'g')
		return str.replace(regex, repl)
	}

	public static escapeRegExp(str: string): string {
		return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
	}

	public static removeTrailingNewlineIfAny(str: string): string {
		if (str && str.endsWith('\n')) str = str.substr(0, str.length - 1)
		return str
	}
}
