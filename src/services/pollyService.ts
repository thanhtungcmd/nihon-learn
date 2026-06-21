import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';

const polly = new PollyClient({
  region: import.meta.env.VITE_AWS_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function playJapanesePronunciation(
  text: string,
  voiceId: string = 'Takumi'
): Promise<void> {
  if (!text || !text.trim()) {
    return;
  }

  try {
    const command = new SynthesizeSpeechCommand({
      OutputFormat: 'mp3',
      VoiceId: voiceId,
      LanguageCode: 'ja-JP',
      TextType: 'text',
      Text: text.trim(),
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
