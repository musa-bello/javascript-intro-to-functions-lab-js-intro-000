
function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const spy = expect.spyOn(console, 'log').andCallThrough();

  logShout('hello');

  return (spy).toHaveBeenCalledWith('HELLO');

  console.log.restore();
}
