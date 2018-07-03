import { TruncateEthereumAddressPipe } from './truncate-ethereum-address.pipe';

describe('TruncateEthereumAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateEthereumAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
