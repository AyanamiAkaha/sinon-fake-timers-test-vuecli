const { expect } = require('chai');
const sinon = require('sinon');

describe('fake timers', () => {
  it('work', () => {
    const now = new Date();
    const clock = sinon.useFakeTimers(now.getTime());
    for (let i = 0; i < 1e9; i += 1) { /* waiting */ }
    expect(new Date().getTime()).to.equal(now.getTime());
    clock.restore();
  });
});
