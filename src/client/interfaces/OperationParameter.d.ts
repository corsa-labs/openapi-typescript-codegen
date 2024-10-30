import type { Model } from './Model';

export interface OperationParameter extends Model {
    in: 'path' | 'query' | 'header' | 'formData' | 'body' | 'cookie' | 'param';
    prop: string;
    mediaType: string | null;
}
