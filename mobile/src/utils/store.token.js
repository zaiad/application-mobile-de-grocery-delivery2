import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeUserSession(accessToken, refreshToken) {
  const accessTokenExpireAt = new Date();
  accessTokenExpireAt.setHours(accessTokenExpireAt.getHours() + 1);

  const refreshTokenExpireAt = new Date();
  refreshTokenExpireAt.setDate(refreshTokenExpireAt.getDate() + 5);

  await AsyncStorage.setItem(
    'acces_token',
    JSON.stringify({
      accessToken,
    }),
  );

  await AsyncStorage.setItem(
    'refresh_token',
    JSON.stringify({
      refreshToken,
    }),
  );
}
