const cloudJumping  = require('../hacker_rank/cloudJumping');
describe('implmementations of test', () => {
  it('returns sum of array', () => {
    var arr = [0, 1, 0, 0, 0, 1, 0];
    const cloudJumpingResult = cloudJumping(arr);
    expect(cloudJumpingResult).toBe(3);
  });
});

