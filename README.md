Work Sample
===========

## Local install directions

Download or clone the repository onto your local machine from https://github.com/tosterberg/work-sample.
- You will also need node.js for both the backend and the node package manager.  Instructions on their installation can be found here https://nodejs.org/en/.  You will then run `npm install` which will download the required dependencies.
- Starting the development code will require you to run `npm run-script dev` in the command line while in the project root directory. You will get the following prompt in your console.  Source code can be found in `./src/`.
```
Work sample for Tyler Osterberg has started...
>
```
- Starting the development code will require you to run `npm run-script test` in the command line while in the project root directory.  You should get the following response in your console.  Testing was done using Mocha and Chai, and testing source code can be found in `./test/`
```
MultiValueStringDictionary
  √ dictionary should start empty
  √ dictionary should return cleared after clear function
  √ dictionary add key value pair should insert into dictionary
  √ dictionary add key value pair should error when key pair already exists
  √ dictionary remove key value pair should remove from dictionary
  √ dictionary remove key value pair should fail when key value pair does not exist
  √ dictionary remove all from key should remove from dictionary
  √ dictionary remove all from key should fail if key does not exist
  √ dictionary does key exist should return truth
  √ dictionary does key value pair exist should return truth


10 passing (4ms)
```

### Commands and functionality - Reference Work Sample.md
The Multi-Value Dictionary app is a command line application that stores a multivalue dictionary in memory.  All keys and values are strings.

It should support the following commands.

### KEYS
Returns all the keys in the dictionary.  Order is not guaranteed.

Example
```
> ADD foo bar
) Added
> ADD baz bang
) Added
> KEYS
1) foo
2) baz
```

### MEMBERS
Returns the collection of strings for the given key.  Return order is not guaranteed.  Returns an error if the key does not exists.

Example:
```
> ADD foo bar
> ADD foo baz
> MEMBERS foo
1) bar
2) baz

> MEMBERS bad
) ERROR, key does not exist.
```

### ADD
Add a member to a collection for a given key. Displays an error if the value already existed in the collection.

```  
> ADD foo bar
) Added
> ADD foo baz
) Added
> ADD foo bar
) ERROR, value already exists
```

### REMOVE
Removes a value from a key.  If the last value is removed from the key, they key is removed from the dictionary. If the key or value does not exist, displays an error.

Example:
```
> ADD foo bar
) Added
> ADD foo baz
) Added

> REMOVE foo bar  
) Removed
> REMOVE foo bar  
) ERROR, value does not exist

> KEYS
1) foo

> REMOVE foo baz
) Removed

> KEYS
) empty set

> REMOVE boom
) ERROR, key does not exist
```

### REMOVEALL
Removes all value for a key and removes the key from the dictionary. Returns an error if the key does not exist.

Example:
```
> ADD foo bar
) Added
> ADD foo baz
) Added
> KEYS
1) foo

> REMOVEALL foo
) Removed

> KEYS
(empty set)

REMOVEALL foo
) ERROR, key does not exist

```

### CLEAR
Removes all keys and all values from the dictionary.

Example:
```
> ADD foo bar
) Added
> ADD bang zip
) Added
> KEYS
1) foo
2) bang

> CLEAR
) Cleared

> KEYS
(empty set)

> CLEAR
) Cleared

> KEYS
(empty set)

```

### KEYEXISTS
Returns whether a key exists or not.

Example:
```
> KEYEXISTS foo
) false
> ADD foo bar
) Added
> KEYEXISTS foo
) true
```

### VALUEEXISTS
Returns whether a value exists within a key.  Returns false if the key does not exist.

Example:
```
> VALUEEXISTS foo bar
) false
> ADD foo bar
) Added
> VALUEEXISTS foo bar
) true
> VALUEEXISTS foo baz
) false
```

### ALLMEMBERS
Returns all the values in the dictionary.  Returns nothing if there are none. Order is not guaranteed.

Example:
```
> ALLMEMBERS
(empty set)
> ADD foo bar
) Added
> ADD foo baz
) Added  
> ALLMEMBERS
1) bar
2) baz
> ADD bang bar
) Added
> ADD bang baz
> ALLMEMBERS
1) bar
2) baz
3) bar
4) baz
```

### ITEMS
Returns all keys in the dictionary and all of their values.  Returns nothing if there are none.  Order is not guaranteed.

Example:
```
> ITEMS
(empty set)
> ADD foo bar
) Added
> ADD foo baz
) Added  
> ITEMS
1) foo: bar
2) foo: baz
> ADD bang bar
) Added
> ADD bang baz
> ITEMS
1) foo: bar
2) foo: baz
3) bang: bar
4) bang: baz
```  
