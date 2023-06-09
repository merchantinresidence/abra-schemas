import DawnSchema from './themes/dawn.json';
import ExpanseSchema from './themes/expanse.json';
import FetchSchema from './themes/fetch.json';
import ImpulseSchema from './themes/impulse.json';
import MotionSchema from './themes/motion.json';
import StreamlineSchema from './themes/streamline.json';
export { DawnSchema, ExpanseSchema, FetchSchema, ImpulseSchema, MotionSchema, StreamlineSchema, };
export interface Schema {
    schema: {
        [template: string]: {
            [blockId: string]: object;
        };
    };
}
export declare function getSchemaByThemeStoreId(id: number | string): Schema | undefined;
export interface ThemeMeta {
    author: string;
    name: string;
}
export declare function getThemeMetaByThemeStoreId(id: number | string): ThemeMeta | undefined;
