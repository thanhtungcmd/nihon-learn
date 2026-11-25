import { shallowRef } from 'vue';
import { DescribeVoicesCommand, PollyClient } from '@aws-sdk/client-polly';
import { TranslateClient } from '@aws-sdk/client-translate';

type AwsConfig = { region: string; credentials: { accessKeyId: string; secretAccessKey: string } };

const storageKey = 'aws-credentials';

function createClients(config: AwsConfig) {
  return { polly: new PollyClient(config), translate: new TranslateClient(config) };
}

function restore() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved ? createClients(JSON.parse(saved)) : null;
  } catch {
    return null;
  }
}

export const awsClients = shallowRef<ReturnType<typeof createClients> | null>(restore());

export function requireAwsClients() {
  if (!awsClients.value) throw new Error('Chưa đăng nhập AWS.');
  return awsClients.value;
}

export async function signInAws(region: string, accessKeyId: string, secretAccessKey: string) {
  const config = { region: region.trim(), credentials: { accessKeyId: accessKeyId.trim(), secretAccessKey: secretAccessKey.trim() } };
  const clients = createClients(config);
  // Cheap authenticated call to prove the credentials work before letting the user in.
  await clients.polly.send(new DescribeVoicesCommand({ LanguageCode: 'ja-JP' }));
  // shortcut: secret kept in localStorage (readable by any script on this origin), move to a backend/Cognito if the app is shared.
  window.localStorage.setItem(storageKey, JSON.stringify(config));
  awsClients.value = clients;
}

export function signOutAws() {
  window.localStorage.removeItem(storageKey);
  awsClients.value = null;
}
