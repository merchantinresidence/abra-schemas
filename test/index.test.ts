import ImpulseSchema from '../src/themes/impulse.json';
import { getSchemaByThemeStoreId } from '../src';

describe('index', () => {
  describe('getSchemaByThemeStoreId()', () => {
    it('returns a schema when the id is a string', () => {
      expect(getSchemaByThemeStoreId('857')).toStrictEqual(ImpulseSchema);
    });

    it('returns a schema when the id is a number', () => {
      expect(getSchemaByThemeStoreId(857)).toStrictEqual(ImpulseSchema);
    });

    it('returns undefined when the schema is not found', () => {
      expect(getSchemaByThemeStoreId(0)).toBeUndefined();
    });
  });
});
