var configPluginXml = require('../index'),
    path = require('path'),
    fs = require('fs');

describe('api', function () {

    it('should replace', function (done) {
        configPluginXml(path.resolve(__dirname, 'test.xml')).setVersion('0.1.0');
        setTimeout(function () {
            var testXml = fs.readFileSync(path.resolve(__dirname, 'test.xml'), 'utf8');
            expect(testXml).not.toContain('<activity xmlns:android=""');
            done();
        }, 1000);
    });
});