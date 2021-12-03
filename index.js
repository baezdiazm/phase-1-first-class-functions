function receivesAFunction(f) {
    return f()
}

function returnsANamedFunction(name) {
   return function name() {
       console.log(`This is a named function`)
   }
}

function returnsAnAnonymousFunction(noName) {
    return function () {}
}