"use server"
export const getPopularAnime = async () => {
    
    const resp = await fetch(
      `https://kitsu.app/api/edge/anime`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );
    const data = await resp.json();
    return data.data;
  };
