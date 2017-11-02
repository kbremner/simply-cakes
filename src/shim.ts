// React requires requestAnimationFrame, which is not included
// in jsdom (yet). Adding the below and importing this file
// in setupTests.ts removes the associated warnings until
// this can be resolved upstream.
//
// see the following links for more info:
// https://github.com/facebook/jest/issues/4545
// https://reactjs.org/docs/javascript-environment-requirements.html

// requestAnimationFrame hasn't been added to definition of
// global, so cast to any for now
// tslint:disable-next-line no-any
var anyGlobal = (global as any);

anyGlobal.requestAnimationFrame = function(callback: () => {}) {
    setTimeout(callback, 0);
};

export default anyGlobal.requestAnimationFrame;
