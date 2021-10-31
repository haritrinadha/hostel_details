function add(x) {
    hostlers.push(x);
    remainingbeds = remainingbeds - 1;
  }
  function sub(x) {
    hostlers.pop(x)
    remainingbeds = remainingbeds + 1;
  }
  
  function list(hostlers) {
    for ( let i = 0; i < hostlers.length; i++) {
      console.log(hostlers[i] )
    }
  }