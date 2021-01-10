import { expose } from 'comlink'
import { f } from './funcs'
declare const self: Worker
export default {} as typeof Worker & { new (): Worker }
expose({f})
