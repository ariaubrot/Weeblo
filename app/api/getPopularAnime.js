"use server"
export const getPopularAnime = async () => {
    
    const resp = await fetch(
      `https://wajik-anime-api.vercel.app/samehadaku/popular`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );
    const data = await resp.json();
    return data.data;
  };
