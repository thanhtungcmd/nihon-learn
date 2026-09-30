import { PollyClient, SynthesizeSpeechCommand, type VoiceId } from '@aws-sdk/client-polly';

const polly = new PollyClient({
  region: import.meta.env.VITE_AWS_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

let activeAudio: HTMLAudioElement | undefined;
let activeAudioUrl: string | undefined;
let playbackRequest = 0;

function releaseActiveAudio() {
  activeAudio?.pause();
  activeAudio = undefined;
  if (activeAudioUrl) URL.revokeObjectURL(activeAudioUrl);
  activeAudioUrl = undefined;
}

function encodeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function playJapanesePronunciation(
  text: string,
  voiceId: VoiceId = 'Takumi'
): Promise<void> {
  if (!text || !text.trim()) {
    return;
  }

  const requestId = ++playbackRequest;
  const ssmlText = `<speak><prosody rate="60%">${encodeXml(text.trim())}</prosody></speak>`;

  try {
    const command = new SynthesizeSpeechCommand({
      OutputFormat: 'mp3',
      VoiceId: voiceId,
      LanguageCode: 'ja-JP',
      Engine: 'neural',
      TextType: 'ssml',
      Text: ssmlText,
    });

    const response = await polly.send(command);
    if (!response.AudioStream) {
      throw new Error('No audio stream received from Polly.');
    }

    const audioData = await new Response(response.AudioStream as any).arrayBuffer();
    // Synthesis responses may arrive out of order; only play the most recent request.
    if (requestId !== playbackRequest) return;

    releaseActiveAudio();
    activeAudioUrl = URL.createObjectURL(new Blob([audioData], { type: 'audio/mpeg' }));
    activeAudio = new Audio(activeAudioUrl);
    activeAudio.addEventListener('ended', releaseActiveAudio, { once: true });
    activeAudio.addEventListener('error', releaseActiveAudio, { once: true });
    await activeAudio.play();
  } catch (error) {
    console.error('Polly playback failed:', error);
    throw error;
  }
}
