import { TranslateTextCommand } from '@aws-sdk/client-translate';
import { requireAwsClients } from '@/services/awsSession';

export async function translateJapaneseToVietnamese(text: string): Promise<string> {
  const response = await requireAwsClients().translate.send(new TranslateTextCommand({
    Text: text.trim(),
    SourceLanguageCode: 'ja',
    TargetLanguageCode: 'vi',
  }));
  return response.TranslatedText ?? '';
}
