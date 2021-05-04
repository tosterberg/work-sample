/** Testing for all non-void functions in MultiValueStringDictionary */
const assert = require('chai').assert;
import MultiValueStringDictionary from '../src/MultiValueStringDictionary';

describe('MultiValueStringDictionary', function(){
    let dict = new MultiValueStringDictionary;

    it('dictionary should start empty', function(){
        assert.equal(dict.size(), 0);
    });

    it('dictionary should return cleared after clear function', function(){
        assert.equal(dict.clearDictionary(), dict.CLEARED);
        assert.equal(dict.size(), 0);
    });

    it('dictionary add key value pair should insert into dictionary', function(){
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.size(), 1);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary add key value pair should error when key pair already exists', function(){
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.addKeyValue('foo','bar'), dict.ALREADYEXISTS);
        assert.equal(dict.size(), 1);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary remove key value pair should remove from dictionary', function(){
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.size(), 1);
        assert.equal(dict.removeValueAtKey('foo','bar'), dict.REMOVED);
        assert.equal(dict.size(), 0);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary remove key value pair should fail when key value pair does not exist', function(){
        assert.equal(dict.removeValueAtKey('foo','bar'), dict.KEYDOESNOTEXIST);
        assert.equal(dict.size(), 0);
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.size(), 1);
        assert.equal(dict.removeValueAtKey('foo','baz'), dict.VALUEDOESNOTEXIST);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary remove all from key should remove from dictionary', function(){
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.size(), 1);
        assert.equal(dict.addKeyValue('foo','baz'), dict.ADDED);
        assert.equal(dict.size(), 2);
        assert.equal(dict.removeKeyWithValues('foo'), dict.REMOVED);
        assert.equal(dict.size(), 0);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary remove all from key should fail if key does not exist', function(){
        assert.equal(dict.removeKeyWithValues('foo'), dict.KEYDOESNOTEXIST);
        assert.equal(dict.size(), 0);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary does key exist should return truth', function(){
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.size(), 1);
        assert.equal(dict.doesKeyExist('foo'), dict.TRUE);
        assert.equal(dict.doesKeyExist('bar'), dict.FALSE);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

    it('dictionary does key value pair exist should return truth', function(){
        assert.equal(dict.addKeyValue('foo','bar'), dict.ADDED);
        assert.equal(dict.size(), 1);
        assert.equal(dict.doesValueExist('foo', 'bar'), dict.TRUE);
        assert.equal(dict.doesValueExist('bar', 'foo'), dict.FALSE);
        assert.equal(dict.clearDictionary(), dict.CLEARED);
    });

});
