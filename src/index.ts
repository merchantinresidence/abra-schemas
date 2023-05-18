import DawnSchema from './themes/dawn.json';
import ExpanseSchema from './themes/expanse.json';
import FetchSchema from './themes/fetch.json';
import ImpulseSchema from './themes/impulse.json';
import MotionSchema from './themes/motion.json';
import StreamlineSchema from './themes/streamline.json';

export {
  DawnSchema,
  ExpanseSchema,
  FetchSchema,
  ImpulseSchema,
  MotionSchema,
  StreamlineSchema,
};

export interface Schema {
  schema: {
    [template: string]: {
      [blockId: string]: object;
    };
  };
}

export function getSchemaByThemeStoreId(
  id: number | string
): Schema | undefined {
  switch (id.toString()) {
    case '847': {
      return MotionSchema;
    }
    case '857': {
      return ImpulseSchema;
    }
    case '872': {
      return StreamlineSchema;
    }
    case '887': {
      return DawnSchema;
    }
    case '902': {
      return ExpanseSchema;
    }
    case '1949': {
      return FetchSchema;
    }
    default:
      return undefined;
  }
}
