export const getApi = async () => {
  const url = `https://breakingbadapi.com/api/characters`;

  const resp = await fetch(url);
  const data = await resp.json();
  const result = data.map((character) => ({
    id: character.char_id,
    name: character.name,
    nickname: character.nickname,
  }));

  return result;
};