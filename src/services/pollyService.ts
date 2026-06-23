import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';

const polly = new PollyClient({
  region: import.meta.env.VITE_AWS_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

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
  voiceId: string = 'Takumi'
): Promise<void> {
  if (!text || !text.trim()) {
    return;
  }

  const ssmlText = `<speak><prosody rate="70%">${encodeXml(text.trim())}</prosody></speak>`;

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
    const audioUrl = URL.createObjectURL(new Blob([audioData], { type: 'audio/mpeg' }));
    const audio = new Audio(audioUrl);
    await audio.play();
  } catch (error) {
    console.error('Polly playback failed:', error);
    throw error;
  }
}
