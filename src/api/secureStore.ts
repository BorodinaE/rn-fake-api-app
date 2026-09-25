import * as SecureStore from "expo-secure-store";

const KEY = "FAKE_API_TOKEN";

export async function saveToken(value: string): Promise<void> {
  await SecureStore.setItemAsync(KEY, value);
}

export async function getToken(): Promise<string | undefined> {
  let result = await SecureStore.getItemAsync(KEY);
  if (result) {
    return result;
  }
}
