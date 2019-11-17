export declare class FlowCancellationError extends Error {
    constructor();
}
export declare function isFlowCancellationError(error: Error): boolean;
export declare type CancellablePromise<T> = Promise<T> & {
    cancel(): void;
};
export declare function flow<R, Args extends any[]>(generator: (...args: Args) => Generator<any, R, any> | AsyncGenerator<any, R, any>): (...args: Args) => CancellablePromise<R>;
