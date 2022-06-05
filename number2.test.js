require('rootpath')()
const two = require('./number2')
test('Teste com num ordinario', () => {
 expect(two(12)).toBe('doze');
});