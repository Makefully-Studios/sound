'use strict';

var Sound = require('../Sound.js');
var WebAudioMedia = require('../webaudio/WebAudioMedia.js');

function sineTone(hertz = 200, seconds = 1) {
  const sound = Sound.Sound.from({
    singleInstance: true
  });
  if (!(sound.media instanceof WebAudioMedia.WebAudioMedia)) {
    return sound;
  }
  const media = sound.media;
  const context = sound.context;
  const nChannels = 1;
  const sampleRate = 48e3;
  const amplitude = 2;
  const buffer = context.audioContext.createBuffer(
    nChannels,
    seconds * sampleRate,
    sampleRate
  );
  const fArray = buffer.getChannelData(0);
  for (let i = 0; i < fArray.length; i++) {
    const time = i / buffer.sampleRate;
    const angle = hertz * time * 2 * Math.PI;
    fArray[i] = Math.sin(angle) * amplitude;
  }
  media.buffer = buffer;
  sound.isLoaded = true;
  return sound;
}

exports.sineTone = sineTone;
//# sourceMappingURL=sineTone.js.map