"use strict";
const loggerMiddleware = require('../middleware/logger');

describe('Logger test',() => {
    let consoleSpy
    let req = {};
    let res={};
    let next= jest.fn();

    beforeEach(() =>{

        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(() =>{
        consoleSpy.mockRestore();
    })
  test('should contain a Log', async () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
})