import { TranslateClient, TranslateTextCommand } from '@aws-sdk/client-translate';

const translate = new TranslateClient({
  region: import.meta.env.VITE_AWS_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function translateJapaneseToVietnamese(text: string): Promise<string> {
  const response = await translate.send(new TranslateTextCommand({
    Text: text.trim(),
    SourceLanguageCode: 'ja',
    TargetLanguageCode: 'vi',
  }));
  return response.TranslatedText ?? '';
}
