import * as moduleExports from '.';

describe('exports', () => {
  it('should have all expected exports', () => {
    expect(Object.keys(moduleExports)).toMatchInlineSnapshot(`
Array [
  "abiERC20",
  "abiERC721",
  "abiERC1155",
  "abiFiatTokenV2",
]
`);
  });
});
