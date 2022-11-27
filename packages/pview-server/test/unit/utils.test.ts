import * as utils from '../../src/utils/index';
import { getConfig } from '../../src/config';

describe('Utils', () => {
  it('parseNumber', () => {
    expect(utils.parseNumber('5', 1)).toEqual(5);
    expect(utils.parseNumber(0, 1)).toEqual(0);
    expect(utils.parseNumber('z', 1)).toEqual(1);
    expect(utils.parseNumber(NaN, 1)).toEqual(1);
    expect(utils.parseNumber('z', NaN)).toBeNaN();
  });

  it('getConfig', () => {
    const config = getConfig();
    expect(typeof config.port).toBe('number');
  });
});
