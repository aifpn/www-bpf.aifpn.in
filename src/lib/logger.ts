/* eslint-disable no-console */
export enum LogLevel {
	off = 0,
	error,
	warn,
	info,
	debug,
}

export class Logger {
	private _source: string;
	private level: LogLevel;

	constructor(source: string, level: LogLevel) {
		this._source = source;
		this.level = level;
	}

	public debug(...data: unknown[]): void {
		this.log(console.log, LogLevel.debug, data);
	}

	public info(...data: unknown[]): void {
		this.log(console.info, LogLevel.info, data);
	}

	public warn(...data: unknown[]): void {
		this.log(console.warn, LogLevel.warn, data);
	}

	public error(...data: unknown[]): void {
		this.log(console.error, LogLevel.error, data);
	}

	private log = (
		fun: () => void,
		level: LogLevel,
		objects: unknown[],
	): void => {
		if (level >= this.level) {
			const log = this._source
				? ["[" + this._source + "]"].concat(objects as string[])
				: objects;
			fun.apply(console, log);
		}
	};
}
